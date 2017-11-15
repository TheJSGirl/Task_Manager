import React from 'react';

class TodoItem extends React.Component{

  deleteItemFromState = () => {
    this.props.deleteTodo(this.props.index); 
  }
  render(){
    const {todo} = this.props;
    return(
      <div className = "row center">
        <div className = "col s12 m10 l10 offset-l1 offset-m1 ">
          <li  className= "list-group-item card-panel teal lighten-2" >{todo.text} &nbsp;
          <button  className="waves-effect waves-light btn" onClick ={this.deleteItemFromState}>Delete</button>
      
      </li>
        </div>
      </div>
    )
  }
}

export default TodoItem;