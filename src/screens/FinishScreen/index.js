import { Image, Text, View } from "react-native";
import CustomButton from "../../components/ui/CustomButton";
import GradientText from "../../components/ui/GradientText";
import FinishScreenStyle from "./style";

const styles = FinishScreenStyle;

function FinishScreen({ route, navigation }) {
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
        <View style={styles.headerView}>
          <GradientText textStyle={styles.header}>Results</GradientText>
        </View>
        <Text style={styles.scores}>
          Score: {score} / {answeredQuestions}
        </Text>
        <Text style={styles.scores}>Rate: {percentage} %</Text>

        <View style={styles.percentageView}>
          <View style={styles.percentage}>
            <View
              style={[
                styles.percentageCounter,
                {
                  width: `${percentage.toString()}%`,
                },
              ]}
            ></View>
          </View>
        </View>
      </View>

      <Image
        source={require("../../assets/pictures/testresults.png")}
        style={styles.image}
      />

      <CustomButton text="Back To Menu" onPress={navigateHandler} />
    </View>
  );
}

export default FinishScreen;
