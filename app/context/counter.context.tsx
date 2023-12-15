"use client";
import React, { Dispatch, createContext, useReducer } from "react";
type StateType = {
  count: number;
  selectedCategory: string[];
  price: {};
};

const initialState: StateType = {
  count: 0,
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
  price: {},
};

export const actionType = {
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
