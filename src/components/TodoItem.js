import React from 'react';

class TodoItem extends React.Component{

  constructor(){
    super();
    
    this.state={
      isEditing: false
    }
  }

  toggleIsEditing = () => {
    
    this.setState({isEditing: !this.state.isEditing});
  }

  deleteItemFromState = () => {
    this.props.deleteTodo(this.props.index); 
  }

  renderItem = () => {

    const { todo } = this.props;
    return (
        <section>
          {todo.text} &nbsp;
          <button  className="waves-effect waves-light btn  pink darken-3" onClick ={this.deleteItemFromState}>Delete</button>&nbsp; 
          <button  className="waves-effect waves-light btn  pink darken-3" onClick ={this.toggleIsEditing }>Edit</button>
        </section>
      )
  }

  //edit in state
  editItemToState = (e) => {
    e.preventDefault();
    this.props.editTodo({
      text: this.refs.editTodo.value,
      index: this.props.index
    })
    this.refs.editTodo.value = "";
    this.toggleIsEditing(); 
  }

  renderForm = () => {
    const {todo} = this.props;
    return(
      <form onSubmit= {this.editItemToState}>
        <input type= "text" defaultValue= {todo.text} ref = "editTodo"/>
        <button type= "submit"   className="waves-effect waves-light btn  pink darken-3">Edit Todo</button>
      </form>
    )
  }


  render(){
    // const {todo} = this.props;
    return(
      <div className = "row center">
        <div className = "col s12 m10 l10 offset-l1 offset-m1 ">
          <li  className= "list-group-item card-panel  flow-text" >
            {
              this.state.isEditing ? this.renderForm() : this.renderItem()
            }
          </li>
        </div>
      </div>
    )
  }
}

export default TodoItem;