import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ChoosingScreen from "../screens/ChoosingScreen";
import StartingScreen from "../screens/StartingScreen";

const Stack = createNativeStackNavigator();
function GameStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Choosing"
        component={ChoosingScreen}
        options={({}) => ({
          headerShown: false,
        })}
      />
      <Stack.Screen
        name="starting"
        component={StartingScreen}
        options={({}) => ({
          headerShown: false,
        })}
      />
    </Stack.Navigator>
  );
}

export default GameStack;
