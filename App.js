import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import LoadingOverlay from "./src/components/ui/LoadingOverlay";
import Navigation from "./src/navigation/Navigation";
import AuthContextProvider from "./src/context/context";

export default function App() {
  const [fontsLoaded] = useFonts({
    Main: require("./src/assets/fonts/BonaNova-Regular.ttf"),
    Helper: require("./src/assets/fonts/Lora-Regular.ttf"),
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
