const initialState = {
  firstname: "",
  lastname: ""
}


const inputReducer = (state = initialState, action) => {
  console.log(action.type);
  console.log(action.payload);
  switch (action.type) {
    case 'SET_FIRSTNAME':
      return {
        ...state,
        firstname: action.payload
        // inputValue: action.payload
      }
    case 'SET_LASTNAME':
      return {
        ...state,
        lastname: action.payload
        // inputValue: action.payload
      }

    default:
      return state
  }

  // return {
  //   ...state,
  //   firstname: action.payload.firstname,
  //   lastname: action.payload.lastname,
  //   // fullname: firstname + lastname
  // }
}
export default inputReducer
