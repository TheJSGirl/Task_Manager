const todoReducer = (state = [], action ) => {
  switch(action.type){
    case "Add_Todo":
    return [
      ...state,
      action.payload
    ]

    case "Delete_Todo":
    return [
      ...state.slice(0, action.payload),
      ...state.slice(action.payload + 1)
    ]
    case "Edit_Todo":
    let index = action.payload.index;
    return [
      ...state.slice(0, index),
      {...state[index], text: action.payload.text},
      ...state.slice(index+1)
    ]
    default: 
    return state;
  }
};

export default todoReducer;