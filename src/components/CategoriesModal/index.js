import { Pressable, ScrollView, Text, View } from "react-native";
import DummyHeaders from "../../DummyHeaders";

import CustomButton from "../ui/CustomButton";
import CategoriesModalStyle from "./style";

const styles = CategoriesModalStyle;
function CategoriesModal({ selectedCategory, setCategory, onCancel }) {
  function pressHandler(value) {
    setCategory(value);
    onCancel();
  }
  return (
    <View style={styles.modalScreen}>
      <ScrollView
        style={styles.categories}
        contentContainerStyle={styles.contentContainerStyle}
      >
        {DummyHeaders.categories.map((category) => {
          return (
            <Pressable
              key={category.value}
              onPress={() => pressHandler(category.name)}
              style={[
                styles.category,
                selectedCategory === category.name && styles.selectedCategory,
              ]}
            >
              <Text style={styles.categoryText}>{category.name}</Text>
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

export default CategoriesModal;
