import React from "react";

class AddTodo extends React.Component{
  addItemToStore = (e) => {
    e.preventDefault();
  
    this.props.addTodo({
      text: this.refs.addtodo.value
    });
    this.refs.addtodo.value = '';
  }
  
  render(){
    return(
      <div>
        <form onSubmit= {this.addItemToStore}>
          <input type = "text" ref = "addtodo" />
          <button type = "submit" className="btn waves-effect waves-light btn-large   pink darken-3" >AddTodo</button>          
        </form>
      </div>
    )
  }
}
//disable btn
export default AddTodo;