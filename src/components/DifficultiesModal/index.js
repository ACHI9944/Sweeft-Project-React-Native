import { Pressable, ScrollView, Text, View } from "react-native";
import CustomButton from "../ui/CustomButton";
import DifficultiesModalStyle from "./style";
import DummyHeaders from "../../DummyHeaders";

const styles = DifficultiesModalStyle;

function DifficultiesModal({ setDifficulty, selectedDifficulty, onCancel }) {
  function pressHandler(value) {
    setDifficulty(value);
    onCancel();
  }
  return (
    <View style={styles.modalScreen}>
      <ScrollView
        style={styles.difficulties}
        contentContainerStyle={styles.contentContainerStyle}
      >
        {DummyHeaders.difficulties.map((difficulty) => {
          return (
            <Pressable
              key={difficulty.value}
              onPress={() => pressHandler(difficulty.name)}
              style={[
                styles.difficulty,
                selectedDifficulty === difficulty.name &&
                  styles.selectedDifficulty,
              ]}
            >
              <Text style={styles.difficultyText}>{difficulty.name}</Text>
            </Pressable>
          );
        })}
      </ScrollView>
      <View style={styles.button}>
        <CustomButton text="Close" onPress={onCancel} />
      </View>
    </View>
  );
}

export default DifficultiesModal;
