import { useContext, useState } from "react";
import { Alert, Image, View } from "react-native";
import ErrorModal from "../../components/ErrorModal";
import CustomButton from "../../components/ui/CustomButton";
import GradientText from "../../components/ui/GradientText";
import LoadingOverlay from "../../components/ui/LoadingOverlay";
import { AuthContext } from "../../store/auth-context";
import { getQuestions, refreshToken } from "../../util/fetch";
import {
  categoryDetector,
  difficultyDetector,
  typeDetector,
} from "../../util/valueDetectors";
import StartingScreenStyle from "./style";

const styles = StartingScreenStyle;
function StartingScreen({ route, navigation }) {
  const authCtx = useContext(AuthContext);
  const { number, category, difficulty, type } = route.params;

  const url = `https://opentdb.com/api.php?amount=${number}${categoryDetector(
    category
  )}${difficultyDetector(difficulty)}${typeDetector(type)}&token=${
    authCtx.token
  }`;

  const [fetchedQuestions, setFetchedQuestions] = useState();
  const [isFetchingToken, setIsFetchingToken] = useState(false);
  const [errorModalVisible, setErrorModalVisible] = useState(false);

  async function startHandler() {
    setIsFetchingToken(true);
    try {
      const response = await getQuestions(url);
      const data = await response.data;
      setIsFetchingToken(false);
      console.log(data.response_code);
      if (data.response_code === 0) {
        setFetchedQuestions(data.results);
      } else setErrorModalVisible(true);
    } catch (error) {
      Alert.alert("Could not proceed, please try again later");
      setIsFetchingToken(false);
    }
  }
  if (isFetchingToken) {
    return <LoadingOverlay />;
  }
  async function refreshHandler() {
    setIsFetchingToken(true);

    try {
      await refreshToken(authCtx.token);
      navigation.goBack();
      setIsFetchingToken(false);
      Alert.alert("Question history refreshed");
    } catch (error) {
      Alert.alert("Could not proceed, please try again later");
      setIsFetchingToken(false);
    }
  }

  return (
    <>
      <View style={styles.screen}>
        <GradientText
          gradientColors={["#C5bd23", "#1453a0"]}
          textStyle={styles.readyText}
        >
          Ready?
        </GradientText>
        <Image
          style={styles.image}
          source={require("../../assets/flat-people-asking-questions-illustration_23-2148901520.avif")}
        />

        <View style={styles.buttons}>
          <View style={styles.button}>
            <CustomButton onPress={() => navigation.goBack()} text="Back" />
          </View>
          <View style={styles.button}>
            <CustomButton text="Start" onPress={startHandler} />
          </View>
        </View>
      </View>
      <ErrorModal
        errorModalVisible={errorModalVisible}
        setErrorModalVisible={setErrorModalVisible}
        refreshHandler={refreshHandler}
      />
    </>
  );
}

export default StartingScreen;
