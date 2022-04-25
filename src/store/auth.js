import { TOKEN_STORAGE_KEY, USER_STORAGE_KEY } from "../constants/key";
import { authService } from "../services/auth";
import { userService } from "../services/user";

let _user = localStorage.getItem(USER_STORAGE_KEY);
if (_user) {
  _user = JSON.parse(_user);
}
const initialState = {
  user: _user,
  errorMessage: "",
};
// export const authLogin = () => {
//     return async(dispatch) => {
//         const res = await authService.login(form);
//         if (res.message) {
//           return res.message;
//         }
//         localStorage.setItem(TOKEN_STORAGE_KEY, JSON.stringify(res.data));
//         const user = await userService.getInfo();
//         // setUser(user.data);
//         dispatch({ type: "auth/login", payload: user.data });
//     }
// }
export const authLogin = (form) => {
  return async (dispatch) => {
    const res = await authService.login(form);
    if (res.message) {
      dispatch({ type: "auth/errorMessage", payload: res.message });
      return;
    }
    localStorage.setItem(TOKEN_STORAGE_KEY, JSON.stringify(res.data));
    const user = await userService.getInfo();
    localStorage.setItem(USER_STORAGE_KEY, JSON.stringify(user.data));
    // setUser(user.data);
    dispatch({ type: "auth/login", payload: user.data });
  };
};
export const authLogout = () => {
  localStorage.removeItem(TOKEN_STORAGE_KEY);
  localStorage.removeItem(USER_STORAGE_KEY);
  return { type: "auth/logout" };
};
export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case "auth/login":
      return {
        ...state,
        user: action.payload,
      };
    case "auth/logout":
      return {
        ...state,
        user: null,
      };
    case "auth/errorMessage":
      return {
        ...state,
        errorMessage: action.payload,
      };
    default:
      return state;
  }
};
