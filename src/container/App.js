import React, { Component } from 'react';
import { connect } from 'react-redux';
import AddTodo from '../components/AddTodo';
import TodoItem  from '../components/TodoItem';
class App extends Component {


  // deleteItem = (e) => {
  //   e.preventDefault();
  //   this.props.deleteTodo({
      
  //   })
  // }
  render() {
    const{addTodo, deleteTodo} = this.props;
    return (
      <div className="App">
        <header className="App-header">
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
          <h1 className="App-title center">Task Manager</h1>
        </header>
        
        <div>
          <AddTodo addTodo={addTodo}/>
          
          <ul className="list-group">
            {
              this.props.todos.map((todo, index) => {
                return (
                  <TodoItem todo={todo} deleteTodo={deleteTodo} key={index} index={index}/>
                )
              })
            }

          </ul>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    todos: state
  }
}

const mapDistpatchToProps = (dispatch) => {
  return {
    addTodo: ({text}) => {
      dispatch({
        type: 'Add_Todo',
        payload: {
          text,
          completed: false
        }
      })
    },
    deleteTodo: (index) => {
      dispatch({
        type: 'Delete_Todo',
        payload: index
      })
    }
  }
}

//first argument of connect is to access the states and second argument is to dispatch as props
export default  connect(mapStateToProps, mapDistpatchToProps, null)(App);
