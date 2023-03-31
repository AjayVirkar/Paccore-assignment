const initialState = {
  inputValue: 'Vijay'
}

// export const setInputValue = (val) => ({ type: 'SET_INPUT_VALUE', val });

const inputReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'UPDATE_INPUT_VALUE':
      return {
        ...state,
        inputValue: action.payload
      }

    default:
      return state
  }
}

export default inputReducer
