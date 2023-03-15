import { Pressable, Text } from "react-native";
import CategoryStyle from "./CategoryStyle";

const styles = CategoryStyle;

function Category({ name, setCategory, selectedCategory, onCancel }) {
  function pressHandler() {
    setCategory(name);
    onCancel();
  }
  return (
    <Pressable
      onPress={pressHandler}
      style={[
        styles.category,
        selectedCategory === name ? { borderWidth: 2 } : null,
      ]}
    >
      <Text style={styles.categoryText}>{name}</Text>
    </Pressable>
  );
}

export default Category;
