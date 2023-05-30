export const initialState = {
  fullName: "",
  email: "",
  userId: "",
  logout: true,
};

type State = {
  fullName: string,
  email: string,
  userId: string,
  logout: boolean,
}

type Action = {
  payload: State,
  type:string,
}

export const userReducer = (state:State, action: Action) => {
  switch (action.type) {
    case "LOGIN":
      return { ...action.payload, logout: false };

    case "LOGOUT":
      return {  fullName: "", email: "", userId: "", logout: true };

    default:
     return  state;
  }
};