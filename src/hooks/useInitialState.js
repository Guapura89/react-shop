import { useState } from "react";

// Initial state value
const initialState = {
  cart: [],
};

const useInitialState = () => {
  const [state, setState] = useState(initialState);

  // Add the new value in the state
  const addToCart = (payload) => {
    setState({
      ...state,
      cart: [...state.cart, payload],
    });
  };

  return {
    state,
    addToCart,
  };
};

export default useInitialState;
