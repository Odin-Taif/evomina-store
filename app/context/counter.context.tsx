"use client";
import React, { Dispatch, createContext, useReducer } from "react";
type StateType = {
  cartproducts: number;
  selectedCategory: string[];
  price: {
    max: 1000;
    min: 0;
  };
};

const initialState: StateType = {
  cartproducts: 0,
  selectedCategory: [
    "All Products",
    "Accessories",
    "Gift sets",
    "Incense cones",
    "Diffuser",
    "Frankincense",
    "Essential oil",
    "Incense burners",
    "Other",
  ],
  price: {
    min: 0,
    max: 1000,
  },
};

export const actionType = {
  ADD_CART_PRODUCT: "ADD_CART_PRODUCT",
  SET_CATEGORY: "SET_CATEGORY",
  SET_PRICE: "SET_PRICE",
};
const reducer = (state: StateType, action: any) => {
  switch (action.type) {
    case actionType.SET_CATEGORY:
      return {
        ...state,
        selectedCategory: action.selectedCategory,
      };
    case actionType.SET_PRICE:
      return {
        ...state,
        price: action.price,
      };
    case actionType.ADD_CART_PRODUCT:
      return {
        ...state,
        cartproducts: action.cartproducts,
      };
    default:
      return state;
  }
};

export const CounterContext = createContext<{
  state: StateType;
  dispatch: Dispatch<any>;
}>({ state: initialState, dispatch: () => null });

export const CounterContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <CounterContext.Provider value={{ state, dispatch }}>
      {children}
    </CounterContext.Provider>
  );
};
