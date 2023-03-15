import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import LoadingOverlay from "./src/components/ui/LoadingOverlay";
import Navigation from "./src/navigation/Navigation";
import AuthContextProvider from "./src/store/auth-context";

export default function App() {
  const [fontsLoaded] = useFonts({
    Texts: require("./src/assets/fonts/MPLUS1p-Medium.ttf"),
    Welcome: require("./src/assets/fonts/BonaNova-Regular.ttf"),
  });
  if (!fontsLoaded) {
    return <LoadingOverlay />;
  }
  return (
    <>
      <AuthContextProvider>
        <NavigationContainer>
          <Navigation />
        </NavigationContainer>
      </AuthContextProvider>
    </>
  );
}
