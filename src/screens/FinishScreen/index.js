import { Button, Text, View } from "react-native";
import FinishScreenStyle from "./style";

const styles = FinishScreenStyle;

function FinishScreen({ route, navigation }) {
  const score = route.params.points;
  const answeredQuestions = route.params.questions;
  const percentage = ((score / answeredQuestions) * 100).toString().slice(0, 3);

  function navigateHandler() {
    navigation.navigate("Choosing");
  }

  
  return (
    <View style={styles.screen}>
      <Text style={styles.topText}>
        You answered {score} out of {answeredQuestions} question correctly
      </Text>
      <Text style={styles.topText}> your total score is {percentage} %</Text>
      <Button title="restart" onPress={navigateHandler} />
    </View>
  );
}

export default FinishScreen;
