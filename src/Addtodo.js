import React, { Component } from 'react'

export class Addtodo extends Component {
    state={
        title:''
    }
handleChange=(e)=>{
    this.setState({
        title:e.target.value
    })
}
handleSubmit=(e)=>{
e.preventDefault()
this.props.addtodo(this.state)
this.setState({
    title:''
})
}
    render() {
        return (
            <div className="container">
            <form onSubmit={this.handleSubmit}>
                <input type="text" name="title" onChange={this.handleChange} value={this.state.title}/>
                </form>
            </div>
        )
    }
}

export default Addtodo
