import React, { Component } from 'react';
import Todo from './Todo';
import Addtodo from './Addtodo';
import axios from 'axios'
class App extends Component {
  state={
  todos:[]
  }
  componentDidMount(){
    axios.get('https://jsonplaceholder.typicode.com/todos').then(response=>(
     this.setState({ todos:response.data})
  
      ))
  }
  addtodo=(todo)=>{
 todo.id=Math.floor(Math.random()*100)
 todo.completed=true
const todos=[...this.state.todos,todo]
this.setState({
  todos:todos
})
  }
del=(id)=>{
  
  this.setState({
    todos:this.state.todos.filter(todo=>
      todo.id!==id
    )
  })
}
  markComplete=(id)=>{
    this.setState({todos:this.state.todos.map(todo=>{
      if(todo.id===id){
        todo.completed=!todo.completed
      }
      return todo
         })
  })
         
      

// this.setState({
//   todos:this.state.todos.map(todo=>{
// if(todo.id===id){
// todo.completed=!todo.completed
// }
// return todo
//   })
// })
  }
  render() {
    return (
     
        <div className="App">
        <div className="container">
        <h1 className="center-align">Todo List</h1>
        <Addtodo addtodo={this.addtodo}/>
         <Todo todos={this.state.todos} markComplete={this.markComplete} del={this.del}/>
        </div>
        </div>
        
    );
  }
}

export default App;