import AsyncStorage from "@react-native-async-storage/async-storage";
import { useContext, useEffect, useState } from "react";
import LoadingOverlay from "../components/ui/LoadingOverlay";
import WelcomeScreen from "../screens/WelcomeScreen";
import { AuthContext } from "../store/auth-context";
import GameStack from "./GameStack";

function Navigation() {
  const [isTryingFetch, setIsTryingFetch] = useState(true);
  const authCtx = useContext(AuthContext);

  useEffect(() => {
    async function fetchToken() {
      const storedToken = await AsyncStorage.getItem("token");
      const storedName = await AsyncStorage.getItem("name");

      if (storedToken && storedName) {
        authCtx.setStoredNameAndToken(storedToken, storedName);
      }
      setIsTryingFetch(false);
    }

    fetchToken();
  }, []);
  if (isTryingFetch) {
    return <LoadingOverlay />;
  }
  return <>{authCtx.tokenIsReady ? <GameStack /> : <WelcomeScreen />}</>;
}

export default Navigation;
