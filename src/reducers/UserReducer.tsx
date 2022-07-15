import AsyncStorage from '@react-native-async-storage/async-storage';

export type reducerActionType = {
  type: string;
  payload: {
    [key: string]: any;
  };
};

export type UserType = {
  token: string;
  user: {
    id: number,
    admin: number,
    name: string,
    email: string,
    cpf: string,
  };
  properties: object
};

export const userInitialState: UserType = {
  token: '',
  user: {
    id: 0,
    admin: 0,
    name: '',
    email: '',
    cpf: ''
  },
  properties: {}
};

export const userReducer = (state: UserType , action: reducerActionType) => {
  switch (action.type) {
    case "SET_TOKEN":
      AsyncStorage.setItem('@token', action.payload.token)
      return { ...state, token: action.payload.token };

    case "SET_USER":
      return { ...state, user: action.payload.user };

    case "SET_PROPERTY":
      return { ...state, property: action.payload.property };

    default:
      break;
  }

  return state;
};
