import { useContext } from "react";
import { Button, Text, View } from "react-native";
import Colors from "../../assets/colors/colors";
import GradientText from "../../components/ui/GradientText";
import { AuthContext } from "../../store/context";
import FinishScreenStyle from "./style";

const styles = FinishScreenStyle;

function FinishScreen({ route, navigation }) {
  const authCtx = useContext(AuthContext);
  const { name } = authCtx;

  const score = route.params.points;
  const answeredQuestions = route.params.questions;
  const percentage = +((score / answeredQuestions) * 100)
    .toString()
    .slice(0, 3);

  function navigateHandler() {
    navigation.navigate("Choosing");
  }

  return (
    <View style={styles.screen}>
      <View style={styles.summary}>
        <View style={styles.rateView}>
          <GradientText
            gradientColors={[Colors.gradient100, Colors.gradient200]}
            textStyle={styles.rateText}
          >
            {percentage < 10
              ? "Bad Luck"
              : percentage >= 10 && percentage < 30
              ? "Not Bad"
              : percentage >= 30 && percentage < 60
              ? "Good"
              : percentage >= 60 && percentage < 90
              ? "Great Job"
              : percentage >= 90 && percentage < 100
              ? "Awsome"
              : percentage === 100
              ? "Perfect"
              : null}
          </GradientText>
          <Text style={styles.nameText}>'' {name} ''</Text>
        </View>
        <View style={styles.scoresView}>
          <Text style={styles.scores}>
            You answered {score} out of {answeredQuestions} question correctly
          </Text>
        </View>
        <Text style={styles.topText}> your total score is {percentage} %</Text>
      </View>
      <Button title="restart" onPress={navigateHandler} />
    </View>
  );
}

export default FinishScreen;
