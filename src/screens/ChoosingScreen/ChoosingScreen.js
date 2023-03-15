import { useContext, useRef, useState } from "react";
import { Button, Modal, Pressable, Text, TextInput, View } from "react-native";
import { Modalize } from "react-native-modalize";
import CategoryModal from "../../components/CategoryModal/CategoryModal";
import GradientText from "../../components/ui/GradientText";
import { AuthContext } from "../../store/auth-context";
import ChoosingScreenStyle from "./ChoosingScreenStyle";

const styles = ChoosingScreenStyle;
/* Simple validation for number input */
function isValidNum(value) {
  if (value > 0 && value < 51) {
    return true;
  } else return false;
}

function ChoosingScreen() {
  const [number, setNumber] = useState();
  const [isTouched, setIsTouched] = useState(false);

  const authCtx = useContext(AuthContext);
  const name = authCtx.name;

  /* refs functions and states for custom select buttons with Modalize */

  const modalizeRefCategory = useRef(null);
  const modalizeRefDifficulty = useRef(null);
  const modalizeRefType = useRef(null);

  function onOpenCategoryModal() {
    modalizeRefCategory.current?.open();
  }
  function onCancelCategoryModal() {
    modalizeRefCategory.current?.close();
  }

  function onOpenDifficultyModal() {
    modalizeRefDifficulty.current?.open();
  }
  function onCancelDifficultyModal() {
    modalizeRefDifficulty.current?.close();
  }

  function onOpenTypeModal() {
    modalizeRefType.current?.open();
  }
  function onCancelTypeModal() {
    modalizeRefType.current?.close();
  }

  const [category, setCategory] = useState("Any Category");
  const [difficulty, setDifficulty] = useState("Any Difficulty");
  const [type, setType] = useState("Any Type");

  console.log(category);
  return (
    <View style={styles.screen}>
      <Button title="reset" onPress={() => authCtx.clearNameAndToken()} />
      <View style={styles.welocomeView}>
        <GradientText
          gradientColors={["#C5bd23", "#1453a0"]}
          textStyle={styles.welcomeText}
        >
          Welcome
        </GradientText>
        <Text style={styles.nameText}>'' {name} ''</Text>
      </View>
      <View style={styles.rulesView}>
        <Text style={styles.rules}>
          You can choose Number, Category, Difficulty and Type of questions
        </Text>
      </View>

      {/* Number Input and custom select buttons with Modalize  */}
      <View style={styles.selections}>
        <Text style={styles.numberDescription}>
          Number of Questions 1 - 50:
        </Text>
        <View
          style={[
            styles.numberView,
            !isValidNum(number) && isTouched && styles.invalidNumberView,
            isValidNum(number) && isTouched && styles.correctNumberView,
          ]}
        >
          <TextInput
            style={styles.numberInput}
            keyboardType="numbers-and-punctuation"
            placeholder="Number of Questions 1 - 50"
            onChangeText={(value) => setNumber(value)}
            value={number}
            onBlur={() => setIsTouched(true)}
          />
        </View>

        <Text style={styles.selectDescription}>Select Category:</Text>
        <Pressable onPress={onOpenCategoryModal} style={styles.select}>
          <Text style={styles.selectText}>{category}</Text>
        </Pressable>

        <Text style={styles.selectDescription}>Select Difficulty:</Text>
        <Pressable onPress={onOpenDifficultyModal} style={styles.select}>
          <Text style={styles.selectText}>{difficulty}</Text>
        </Pressable>

        <Text style={styles.selectDescription}>Select Type:</Text>
        <Pressable onPress={onOpenTypeModal} style={styles.select}>
          <Text style={styles.selectText}>{type}</Text>
        </Pressable>
      </View>

      {/* Modalize for select buttons */}
      <Modalize
        ref={modalizeRefCategory}
        adjustToContentHeight={true}
        modalStyle={styles.modalStyle}
      >
        <CategoryModal
          setCategory={setCategory}
          selectedCategory={category}
          onCancel={onCancelCategoryModal}
        />
      </Modalize>
      <Modalize
        ref={modalizeRefDifficulty}
        adjustToContentHeight={true}
        modalStyle={styles.modalStyle}
      ></Modalize>
      <Modalize
        ref={modalizeRefType}
        adjustToContentHeight={true}
        modalStyle={styles.modalStyle}
      ></Modalize>
    </View>
  );
}

export default ChoosingScreen;
