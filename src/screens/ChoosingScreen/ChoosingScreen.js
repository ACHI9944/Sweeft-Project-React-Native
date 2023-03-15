import { useContext } from "react";
import { Button, View } from "react-native";

import { AuthContext } from "../../store/auth-context";
import ChoosingScreenStyle from "./ChoosingScreenStyle";

const styles = ChoosingScreenStyle;

function ChoosingScreen() {
  const authCtx = useContext(AuthContext);
  return (
    <View style={{ marginTop: 200 }}>
      <Button title="logout" onPress={() => authCtx.clearNameAndToken()} />
    </View>
  );
}

export default ChoosingScreen;
