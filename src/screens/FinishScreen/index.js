import { Button, Text, View } from "react-native";
import FinishScreenStyle from "./style";

const styles = FinishScreenStyle;

function FinishScreen({ route, navigation }) {
  const score = route.params.points;
  const answeredQuestions = route.params.totalQuestions;
  const percentage = ((score / answeredQuestions) * 100).toString().slice(0, 3);

  console.log(score);
  return (
    <View style={styles.screen}>
      <Text style={styles.topText}>
        You answered {score} out of {answeredQuestions} question correctly
      </Text>
      <Text style={styles.topText}> your total score is {percentage} %</Text>
      <Button title="restart" onPress={() => navigation.navigate("Choosing")} />
    </View>
  );
}

export default FinishScreen;
