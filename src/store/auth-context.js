import AsyncStorage from "@react-native-async-storage/async-storage";
import { createContext, useState } from "react";

export const AuthContext = createContext({
  name: "",
  token: "",
  setNameAndToken: (token, name) => {},
  clearNameAndToken: () => {},
  setStoredNameAndToken: (storedToken, storedName) => {},
});

function AuthContextProvider({ children }) {
  const [name, setName] = useState();
  const [token, setToken] = useState();
  async function setNameAndToken(token, name) {
    setToken(token);
    setName(name);
    await AsyncStorage.setItem("token", token);
    await AsyncStorage.setItem("name", name);
  }

  async function clearNameAndToken() {
    setToken("");
    setName("");
    await AsyncStorage.removeItem("token");
    await AsyncStorage.removeItem("name");
  }
  async function setStoredNameAndToken(storedToken, storedName) {
    setName(storedName);
    setToken(storedToken);
  }

  const value = {
    name: name,
    token: token,
    setNameAndToken: setNameAndToken,
    clearNameAndToken: clearNameAndToken,
    setStoredNameAndToken: setStoredNameAndToken,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export default AuthContextProvider;
