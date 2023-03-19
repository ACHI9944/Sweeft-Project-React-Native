import { Pressable, ScrollView, Text, View } from "react-native";
import { categories } from "../../DummyHeaders";
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
        {Object.keys(categories).map((category) => {
          return (
            <Pressable
              key={category}
              onPress={() => pressHandler(category)}
              style={[
                styles.category,
                selectedCategory === category && styles.selectedCategory,
              ]}
            >
              <Text style={styles.categoryText}>{category}</Text>
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
