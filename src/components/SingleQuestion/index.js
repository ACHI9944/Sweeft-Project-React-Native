import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { Text, View } from "react-native";
import SelectingOption from "../SelectingOption";
import CustomButton from "../ui/CustomButton";
import SingleQuestionStyle from "./style";

const styles = SingleQuestionStyle;

function SingleQuestion({
  questionsAmount,
  shuffledAnswers,
  recorder,
  setRecorder,
  curQuestionData,
}) {
  const navigation = useNavigation();
  const [point, setPoint] = useState(0);
  const [selected, setSelected] = useState("");
  const [confirmed, setConfirmed] = useState(false);
  const coorectAnswer = curQuestionData.correct_answer;


  //function for changing questions and also for navigating when its done.
  function confirmHandler() {
    setConfirmed(true);
  }

  function nextHandler() {
    if (selected === coorectAnswer) {
      setPoint(point + 1);
    }
    if (questionsAmount === recorder) {
      navigation.navigate("finished", {
        points: selected === coorectAnswer ? point + 1 : point,
        questions: questionsAmount,
      });
    } else setRecorder(recorder + 1);
    setSelected("");
    setConfirmed(false);
  }

  function exitHandler() {
    navigation.goBack();
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
          <CustomButton onPress={exitHandler} text="Exit" />
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
            onPress={!confirmed ? confirmHandler : nextHandler}
          />
        </View>
      </View>
    </View>
  );
}

export default SingleQuestion;
