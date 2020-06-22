import React,{Component} from 'react'

class Todo extends Component { 

  render(){
 const Todolist= this.props.todos.length?(
  this.props.todos.map(todo=>{
        return (

            <div className="card-panel" key={todo.id} >
            <label>
            {todo.id}
        <input type="checkbox" onChange={this.props.markComplete.bind(this,todo.id)}/>
        <span className="blue-text text-darken-2" style={todo.completed?{textDecoration:'line-through'}:{textDecoration:'none'}}>{todo.title}</span>  
        <button onClick={this.props.del.bind(this,todo.id)}>X</button>
      </label>
            </div>
        )
    })
  ):
    (
        <p className="card-panel">No task left</p>
    )
  return(
      <div className="container">{Todolist}</div>
      
  )
  }
}

export default Todo
