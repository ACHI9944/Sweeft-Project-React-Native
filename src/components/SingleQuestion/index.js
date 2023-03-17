import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { Text, View } from "react-native";
import SelectingOption from "../SelectingOption";
import CustomButton from "../ui/CustomButton";
import SingleQuestionStyle from "./style";
const styles = SingleQuestionStyle;

//helper function for shuffling answers in array
function shuffle(data) {
  const shuffledData = data
    .map((value) => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value);

  return shuffledData;
}

function SingleQuestion({ setFetchedQuestions, fetchedQuestions }) {
  const navigation = useNavigation();

  //states for counting and other game functionalities
  const [questions, setQuestions] = useState([]);
  const [recorder, setRecorder] = useState(1);
  const [point, setPoint] = useState(0);

  //states for markuping correct, incorrect and selected answers
  const [selected, setSelected] = useState("");
  const [confirmed, setConfirmed] = useState(false);

  //variables for game functionalities
  const questionsAmount = fetchedQuestions.length;
  const curQuestionData = fetchedQuestions[recorder - 1];
  const question = curQuestionData.question;
  const answers = [
    ...curQuestionData.incorrect_answers,
    curQuestionData.correct_answer,
  ];

  //if else statement to avoid reshuffle of answers while changing answer before confirm
  let shuffledAnswers;
  if (!questions.includes(question)) {
    shuffledAnswers = shuffle(answers);
    setQuestions((prevValues) => [...prevValues, question, shuffledAnswers]);
  } else {
    const index = questions.findIndex((element) => element === question);
    shuffledAnswers = questions[index + 1];
  }

  //function that handles question changing and also finishing to navigate
  function nextHandler() {
    if (selected === curQuestionData.correct_answer) {
      setPoint(point + 1);
    }
    if (questionsAmount === recorder) {
      /* setRecorder(1);
    setQuestions("");
    setFetchedQuestions("");
    setSelected("");
    setConfirmed(false); */

      navigation.navigate("finished", {
        points: point,
        totalQuestions: questionsAmount,
      });
    } else setRecorder(recorder + 1);
    setSelected("");
    setConfirmed(false);
  }

  return (
    <View style={styles.screen}>
      <View style={styles.top}>
        <Text style={styles.counter}>
          {recorder} / {questionsAmount}
        </Text>
        <View style={styles.questionView}>
          <Text style={styles.question}>{curQuestionData.question}</Text>
        </View>
        {shuffledAnswers.map((answer) => {
          return (
            <SelectingOption
              key={answer}
              givenName={answer}
              setSelected={setSelected}
              selected={selected}
              confirmed={confirmed}
              correct={curQuestionData.correct_answer}
            />
          );
        })}
      </View>
      <View style={styles.buttons}>
        <View style={styles.button}>
          <CustomButton onPress={() => navigation.goBack()} text="Exit" />
        </View>
        <View style={styles.button}>
          <CustomButton
            disabled={!selected}
            text={
              !confirmed
                ? "Confirm"
                : confirmed && questionsAmount !== recorder
                ? "Next"
                : "Finish"
            }
            onPress={
              selected && !confirmed ? () => setConfirmed(true) : nextHandler
            }
          />
        </View>
      </View>
    </View>
  );
}

export default SingleQuestion;
