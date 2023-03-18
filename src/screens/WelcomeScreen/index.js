import AsyncStorage from "@react-native-async-storage/async-storage";
import { useContext, useState } from "react";
import { Alert, SafeAreaView, Text, TextInput, View } from "react-native";
import Colors from "../../assets/colors/colors";
import CustomButton from "../../components/ui/CustomButton";
import GradientText from "../../components/ui/GradientText";
import LoadingOverlay from "../../components/ui/LoadingOverlay";
import { AuthContext } from "../../store/context";
import { getToken } from "../../util/fetch";

import WelcomeScreenStyle from "./style";

const styles = WelcomeScreenStyle;

function WelcomeScreen() {
  const [name, setName] = useState("");
  const authCtx = useContext(AuthContext);
  const [isLoading, setIsLoading] = useState(false);

  async function submitHandler() {
    setIsLoading(true);
    try {
      const requestedData = await getToken();
      const { token } = requestedData.data;
      authCtx.setNameAndToken(token, name);
      await AsyncStorage.setItem("token", token);
      await AsyncStorage.setItem("name", name);
    } catch (error) {
      Alert.alert("Could not proceed, please try again later");
    } finally {
      setIsLoading(false);
    }
  }
  if (isLoading) {
    return <LoadingOverlay />;
  }

  return (
    <SafeAreaView style={styles.mainScreen}>
      <View style={styles.screen}>
        <GradientText
          gradientColors={[Colors.gradient100, Colors.gradient200]}
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
