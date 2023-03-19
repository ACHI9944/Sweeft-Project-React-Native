import AsyncStorage from "@react-native-async-storage/async-storage";
import { useContext, useEffect, useState } from "react";
import { Alert, Image, View } from "react-native";
import Colors from "../../assets/colors/colors";
import ErrorModal from "../../components/ErrorModal";
import SingleQuestion from "../../components/SingleQuestion";
import CustomButton from "../../components/ui/CustomButton";
import GradientText from "../../components/ui/GradientText";
import LoadingOverlay from "../../components/ui/LoadingOverlay";
import { categories, difficulties, types } from "../../DummyHeaders";
import { AuthContext } from "../../store/context";
import { getQuestions, refreshToken } from "../../util/fetch";
import StartingScreenStyle from "./style";

//helper function for array shuffling
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}
const styles = StartingScreenStyle;
function StartingScreen({ route, navigation }) {
  const authCtx = useContext(AuthContext);
  const { amount, category, difficulty, type } = route.params;

  //building URL accourding to choices
  const url = `https://opentdb.com/api.php?amount=${amount}&category=${categories[category]}&difficulty=${difficulties[difficulty]}&type=${types[type]}&token=${authCtx.token}&encode=url3986`;

  const [fetchedQuestions, setFetchedQuestions] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [errorModalVisible, setErrorModalVisible] = useState(false);
  const [gameStarted, setGameStarted] = useState(false);
  const [recorder, setRecorder] = useState(1);

  //fetching questions
  useEffect(() => {
    async function fetchHandler() {
      setIsLoading(true);
      try {
        const response = await getQuestions(url);
        const newDate = new Date().getTime();
        await AsyncStorage.setItem("date", newDate.toString());
        setIsLoading(false);
        if (response.data.response_code === 0) {
          setFetchedQuestions(response.data.results);
        } else if (response.data.response_code === 3) {
          await AsyncStorage.clear();
          authCtx.clearNameAndToken();
          Alert.alert(
            "Your session has timed out, please re-enter your name to start again"
          );
        } else setErrorModalVisible(true);
      } catch (error) {
        Alert.alert("Could not proceed, please try again later");
        setIsLoading(false);
      }
    }
    fetchHandler();
  }, []);

  //preparing fetched for child element
  const curQuestionData = fetchedQuestions[recorder - 1];
  const questionsAmount = fetchedQuestions.length;

  let shuffledAnswers;
  if (fetchedQuestions.length > 0) {
    console.log(decodeURIComponent(curQuestionData.correct_answer));
    shuffledAnswers = [
      ...curQuestionData.incorrect_answers,
      curQuestionData.correct_answer,
    ];
    shuffleArray(shuffledAnswers);
  }

  //game starter
  function startHandler() {
    setGameStarted(true);
  }

  //fetcher function in case if user wants to refresh token
  async function refreshHandler() {
    setIsLoading(true);
    try {
      await refreshToken(authCtx.token);
      navigation.goBack();
      setIsLoading(false);
      Alert.alert("Question history refreshed");
    } catch (error) {
      Alert.alert("Could not proceed, please try again later");
      setIsLoading(false);
    }
  }
  function goBackHandler() {
    navigation.goBack();
  }

  if (isLoading) {
    return <LoadingOverlay />;
  }

  return (
    <>
      {fetchedQuestions.length > 0 && gameStarted ? (
        <SingleQuestion
          curQuestionData={curQuestionData}
          shuffledAnswers={shuffledAnswers}
          setRecorder={setRecorder}
          recorder={recorder}
          questionsAmount={questionsAmount}
        />
      ) : (
        <View style={styles.screen}>
          <GradientText
            gradientColors={[Colors.gradient100, Colors.gradient200]}
            textStyle={styles.readyText}
          >
            Ready?
          </GradientText>
          <Image
            style={styles.image}
            source={require("../../assets/pictures/startingScreen.png")}
          />

          <View style={styles.buttons}>
            <View style={styles.button}>
              <CustomButton onPress={goBackHandler} text="Back" />
            </View>
            <View style={styles.button}>
              <CustomButton text="Start" onPress={startHandler} />
            </View>
          </View>
          <ErrorModal
            errorModalVisible={errorModalVisible}
            setErrorModalVisible={setErrorModalVisible}
            refreshHandler={refreshHandler}
          />
        </View>
      )}
    </>
  );
}

export default StartingScreen;
