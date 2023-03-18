import { Pressable, ScrollView, Text, View } from "react-native";
import { types } from "../../DummyHeaders";
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
        {Object.keys(types).map((type) => {
          return (
            <Pressable
              key={types[type]}
              onPress={pressHandler.bind(this, type)}
              style={[
                styles.type,
                selectedType === type && styles.selectedType,
              ]}
            >
              <Text style={styles.typeText}>{type}</Text>
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
