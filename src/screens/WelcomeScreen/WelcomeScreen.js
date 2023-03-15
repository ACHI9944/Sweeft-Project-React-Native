import { useContext, useState } from "react";
import { Alert, SafeAreaView, Text, TextInput, View } from "react-native";
import CustomButton from "../../components/ui/CustomButton";
import GradientText from "../../components/ui/GradientText";
import LoadingOverlay from "../../components/ui/LoadingOverlay";
import { AuthContext } from "../../store/auth-context";
import { getToken } from "../../util/fetchToken";
import WelcomeScreenStyle from "./WelcomeScreenStyle";

const styles = WelcomeScreenStyle;

function WelcomeScreen({ navigation }) {
  const [name, setName] = useState("");
  const authCtx = useContext(AuthContext);
  const [isFetchingToken, setIsFetchingToken] = useState(false);

  function textHandler(value) {
    setName(value);
  }

  async function submitHandler() {
    setIsFetchingToken(true);
    try {
      const requestedData = await getToken();
      setIsFetchingToken(false);
      const token = requestedData.data.token;
      authCtx.setNameAndToken(token, name);
    } catch (error) {
      Alert.alert("Could not proceed, please try again later");
      setIsFetchingToken(false);
    }

    // navigation.navigate("Choosing", { nickname: nickname });
  }
  if (isFetchingToken) {
    return <LoadingOverlay />;
  }

  return (
    <SafeAreaView style={styles.mainScreen}>
      <View style={styles.screen}>
        <GradientText
          gradientColors={["#C5bd23", "#1453a0"]}
          textStyle={styles.welcomeText}
        >
          Welcome
        </GradientText>

        <Text style={styles.text}>Please Enter Your Nickname </Text>

        <View style={styles.inputView}>
          <TextInput
            style={styles.input}
            placeholder="Nickname . . ."
            keyboardType="default"
            onChangeText={textHandler}
            value={name}
          />
        </View>

        <CustomButton
          text="Submit"
          style={styles.button}
          onPress={submitHandler}
          disabled={name.length === 0 && true}
        />
      </View>
    </SafeAreaView>
  );
}

export default WelcomeScreen;