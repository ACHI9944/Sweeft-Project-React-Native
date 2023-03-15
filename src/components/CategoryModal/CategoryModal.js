import { Modal, ScrollView, Text, View } from "react-native";
import dummy from "../../dummy";
import Category from "../Category/Category";
import CustomButton from "../ui/CustomButton";
import CategoryModalStyle from "./CategoryModalStyle";

const styles = CategoryModalStyle;
function CategoryModal({ selectedCategory, setCategory, onCancel }) {
  return (
    <View style={styles.modalScreen}>
      <ScrollView
        style={styles.categories}
        contentContainerStyle={{ alignItems: "center" }}
      >
        {dummy.map((category) => {
          return (
            <Category
              onCancel={onCancel}
              selectedCategory={selectedCategory}
              setCategory={setCategory}
              name={category.name}
              key={category.value}
            />
          );
        })}
      </ScrollView>
      <View style={styles.button}>
        <CustomButton text="Close" onPress={onCancel} />
      </View>
    </View>
  );
}

export default CategoryModal;
