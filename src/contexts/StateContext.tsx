import React, {createContext, useContext, useReducer} from 'react';

import {reducerActionType, userInitialState, userReducer} from '../reducers/UserReducer'

type InitialStateType = {
  user: any;
};

type ContextType = {
  state: InitialStateType;
  dispatch: React.Dispatch<any>;
};

const initialState = {
  user: userInitialState
}



export const StateContext = createContext<ContextType>({
  state: initialState,
  dispatch: () => null
})

const mainReducer = (state: InitialStateType, action: reducerActionType) => ({
  user: userReducer(state.user, action),
});

export const StateProvider:  React.FC<any> = ({ children }) => {
  const [state, dispatch] = useReducer(mainReducer, initialState);

  return (
    <StateContext.Provider value={{ state, dispatch }}>
      {children}
    </StateContext.Provider>
  );
}

export const useStateValue = () => useContext(StateContext)