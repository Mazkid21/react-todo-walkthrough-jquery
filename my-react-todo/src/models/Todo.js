import $ from 'jquery'

class TodoModel {
	static all(){
		let request = $.ajax({
			url:"https://super-crud.herokuapp.com/todos",
			method:'GET'
		})
		return request
	}
	static create(todo){
		let request = $.ajax({
			url: "https://super-crud.herokuapp.com/todos",
		    method: 'POST',
		    data: todo
		})
		return request
	}
	static delete(todo){
		 let request = $.ajax({
		    url: "https://super-crud.herokuapp.com/todos/"+todo._id,
		    method: 'DELETE'
		  })
		  return request
	}
	static update(todo){
		 let request = $.ajax({
		    url: "https://super-crud.herokuapp.com/todos/"+todo._id,
		    method: 'PUT',
		    data: {
		    	_id : todo.id,
		    	body: todo.body
		    }
		  })
		  return request
	}
}

export default TodoModel
  