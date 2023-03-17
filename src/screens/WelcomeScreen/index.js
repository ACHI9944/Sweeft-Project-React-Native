import { useContext, useState } from "react";
import { Alert, SafeAreaView, Text, TextInput, View } from "react-native";
import CustomButton from "../../components/ui/CustomButton";
import GradientText from "../../components/ui/GradientText";
import LoadingOverlay from "../../components/ui/LoadingOverlay";
import { AuthContext } from "../../store/auth-context";
import { getToken } from "../../util/fetch";

import WelcomeScreenStyle from "./style";

const styles = WelcomeScreenStyle;

function WelcomeScreen() {
  const [name, setName] = useState("");
  const authCtx = useContext(AuthContext);
  const [isFetchingToken, setIsFetchingToken] = useState(false);

  async function submitHandler() {
    setIsFetchingToken(true);
    try {
      const requestedData = await getToken();
      const { token } = requestedData.data;
      authCtx.setNameAndToken(token, name);
    } catch (error) {
      Alert.alert("Could not proceed, please try again later");
    } finally {
      setIsFetchingToken(false);
    }
  }
  if (isFetchingToken) {
    return <LoadingOverlay />;
  }

  return (
    <SafeAreaView style={styles.mainScreen}>
      <View style={styles.screen}>
        <GradientText
          gradientColors={["#C5bd23", "#1453a0"]}
          textStyle={styles.quizgame}
        >
          Quiz Game
        </GradientText>
        <Text style={styles.text}>Please Enter Your Name To Start </Text>
        <View style={styles.inputView}>
          <TextInput
            style={styles.input}
            placeholder="Nickname . . ."
            onChangeText={(value) => setName(value)}
            value={name}
          />
        </View>
        <CustomButton
          text="Submit"
          onPress={submitHandler}
          disabled={name.length === 0 && true}
        />
      </View>
    </SafeAreaView>
  );
}

export default WelcomeScreen;
