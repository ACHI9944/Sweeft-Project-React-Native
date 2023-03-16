import { Pressable, ScrollView, Text, View } from "react-native";
import DummyHeaders from "../../DummyHeaders";
import CustomButton from "../ui/CustomButton";
import TypesModalStyle from "./style";

const styles = TypesModalStyle;

function TypesModal({ setType, selectedType, onCancel }) {
  function pressHandler(value) {
    setType(value);
    onCancel();
  }
  return (
    <View style={styles.modalScreen}>
      <ScrollView
        style={styles.types}
        contentContainerStyle={styles.contentContainerStyle}
      >
        {DummyHeaders.types.map((difficulty) => {
          return (
            <Pressable
              key={difficulty.value}
              onPress={() => pressHandler(difficulty.name)}
              style={[
                styles.type,
                selectedType === difficulty.name && styles.selectedType,
              ]}
            >
              <Text style={styles.typeText}>{difficulty.name}</Text>
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

export default TypesModal;
