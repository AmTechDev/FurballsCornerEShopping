import React, {createContext, useContext, useReducer} from "react";
//data layer 
//need to route and redux create admin user first there is no data here
export const StateContext =createContext();
//wrap our app
export const StateProvider =({reducer, initialState, children}) =>
  (<StateContext.Provider value ={useReducer (reducer,initialState)}> {children}  
</StateContext.Provider>);


export const useStateValue =()=> useContext(StateContext);