import AsyncStorage from "@react-native-async-storage/async-storage";
import { useContext, useEffect, useState } from "react";
import LoadingOverlay from "../components/ui/LoadingOverlay";
import WelcomeScreen from "../screens/WelcomeScreen";
import { AuthContext } from "../store/context";
import GameStack from "./GameStack";

function Navigation() {
  const [isLoading, setIsLoading] = useState(true);
  const authCtx = useContext(AuthContext);

  useEffect(() => {
    async function fetchToken() {
      const storedToken = await AsyncStorage.getItem("token");
      const storedName = await AsyncStorage.getItem("name");
      const storedDate = await AsyncStorage.getItem("date");
      const newDate = new Date().getTime();
      const timePassed = ((newDate - storedDate) * 0.001) / 60 / 60;

      if (timePassed > 5) {
        await AsyncStorage.clear();
        authCtx.clearNameAndToken();
      }

      if (!!storedToken && !!storedName) {
        await AsyncStorage.setItem("date", newDate.toString());
        authCtx.setNameAndToken(storedToken, storedName);
      }
      setIsLoading(false);
    }

    fetchToken();
  }, []);
  if (isLoading) {
    return <LoadingOverlay />;
  }
  return <>{!!authCtx.token ? <GameStack /> : <WelcomeScreen />}</>;
}

export default Navigation;
