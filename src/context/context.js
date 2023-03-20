import { createContext, useState } from "react";

export const AuthContext = createContext({
  name: "",
  token: "",
  setNameAndToken: (token, name) => {},
  clearNameAndToken: () => {},
});

function AuthContextProvider({ children }) {
  const [name, setName] = useState();
  const [token, setToken] = useState();

  async function setNameAndToken(token, name) {
    setToken(token);
    setName(name);
  }

  function clearNameAndToken() {
    setToken("");
    setName("");
  }

  const value = {
    name: name,
    token: token,
    setNameAndToken: setNameAndToken,
    clearNameAndToken: clearNameAndToken,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export default AuthContextProvider;
