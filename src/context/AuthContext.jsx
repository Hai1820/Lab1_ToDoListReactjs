import { createContext, useEffect, useState } from "react";
import { TOKEN_STORAGE_KEY, USER_STORAGE_KEY } from "../constants/key";
import { authService } from "../services/auth";
import { userService } from "../services/user";

export const AuthContext = createContext();
let _user = localStorage.getItem(USER_STORAGE_KEY);
if (_user) {
  _user = JSON.parse(_user);
}
export const AutProvider = ({ children }) => {
  const [user, setUser] = useState(_user);
  useEffect(() => {
    if (user) {
      localStorage.setItem(USER_STORAGE_KEY, JSON.stringify(user));
    } else {
      localStorage.removeItem(TOKEN_STORAGE_KEY);
      localStorage.removeItem(USER_STORAGE_KEY);
    }
  }, [user]);
  const handleLogin = async (data) => {
    const res = await authService.login(data);
    if (res.message) {
      return res.message;
    }
    localStorage.setItem(TOKEN_STORAGE_KEY, JSON.stringify(res.data));
    const user = await userService.getInfo();
    setUser(user.data);
  };
  const handleLogout = () => {
    setUser("");
  };
  return (
    <AuthContext.Provider value={{ user, handleLogin, handleLogout }}>
      {children}
    </AuthContext.Provider>
  );
};
