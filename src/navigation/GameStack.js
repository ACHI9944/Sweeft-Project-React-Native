import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ChoosingScreen from "../screens/ChoosingScreen/ChoosingScreen";

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
    </Stack.Navigator>
  );
}

export default GameStack;
