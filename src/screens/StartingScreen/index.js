import { useContext, useEffect, useState } from "react";
import { Alert, Image, View } from "react-native";
import { categories, difficulties, types } from "../../DummyData";
import { AuthContext } from "../../context/context";
import { getQuestions } from "../../util/fetch";
import AsyncStorage from "@react-native-async-storage/async-storage";
import ErrorModal from "../../components/ErrorModal";
import SingleQuestion from "../../components/SingleQuestion";
import CustomButton from "../../components/ui/CustomButton";
import GradientText from "../../components/ui/GradientText";
import LoadingOverlay from "../../components/ui/LoadingOverlay";
import StartingScreenStyle from "./style";

//helper function for array shuffling that shuffles existing array
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
  const [gameStarted, setGameStarted] = useState(false);
  const [recorder, setRecorder] = useState(1);
  const [errorModalVisible, setErrorModalVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  //fetching questions
  useEffect(() => {
    async function fetchHandler() {
      setIsLoading(true);
      try {
        const response = await getQuestions(url);
        const newDate = new Date().getTime();
        await AsyncStorage.setItem("date", newDate.toString());
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
      } finally {
        
        setIsLoading(false);
      }
    }
    fetchHandler();
  }, []);

  //preparing fetched question and shuffled answers for child element
  const curQuestionData = fetchedQuestions[recorder - 1];
  const questionsAmount = fetchedQuestions.length;

  let shuffledAnswers;
  if (fetchedQuestions.length > 0) {
    shuffledAnswers = [
      ...curQuestionData.incorrect_answers,
      curQuestionData.correct_answer,
    ];
    shuffleArray(shuffledAnswers);
  }

  function startHandler() {
    setGameStarted(true);
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
          questionData={curQuestionData}
          answers={shuffledAnswers}
          setRecorder={setRecorder}
          recorder={recorder}
          questionsAmount={questionsAmount}
        />
      ) : (
        <View style={styles.screen}>
          <GradientText textStyle={styles.readyText}>Ready?</GradientText>
          <Image
            style={styles.image}
            source={require("../../assets/pictures/ready.png")}
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
            setIsLoading={setIsLoading}
          />
        </View>
      )}
    </>
  );
}

export default StartingScreen;
