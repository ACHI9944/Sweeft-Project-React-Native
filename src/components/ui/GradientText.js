import MaskedView from "@react-native-masked-view/masked-view";
import { LinearGradient } from "expo-linear-gradient";

import { Text, View } from "react-native";
import Colors from "../../assets/colors/colors";

function GradientText({ children, textStyle }) {
  return (
    <MaskedView maskElement={<Text style={textStyle}>{children}</Text>}>
      <LinearGradient
        colors={[Colors.blue300, "#2c3ec1"]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
      >
        <Text style={[textStyle, { opacity: 0 }]}>{children}</Text>
      </LinearGradient>
    </MaskedView>
  );
}

export default GradientText;
