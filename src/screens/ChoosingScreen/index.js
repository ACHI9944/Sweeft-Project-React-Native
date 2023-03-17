import { useContext, useRef, useState } from "react";
import { Pressable, Text, TextInput, View } from "react-native";
import { Modalize } from "react-native-modalize";
import GradientText from "../../components/ui/GradientText";
import { AuthContext } from "../../store/auth-context";
import CategoriesModal from "../../components/CategoriesModal";
import ChoosingScreenStyle from "./style";
import DifficultiesModal from "../../components/DifficultiesModal";
import TypesModal from "../../components/TypesModal";
import CustomButton from "../../components/ui/CustomButton";
import ConfirmModal from "../../components/ConfirmModal";

const styles = ChoosingScreenStyle;
/* Simple validation for number input */
function isValidNum(value) {
  return value > 0 && value < 51;
}

function ChoosingScreen({ navigation }) {
  const [number, setNumber] = useState();
  const [isTouched, setIsTouched] = useState(false);
  const [category, setCategory] = useState("Any Category");
  const [difficulty, setDifficulty] = useState("Any Difficulty");
  const [type, setType] = useState("Any Type");
  const [modalVisible, setModalVisible] = useState(false);

  const authCtx = useContext(AuthContext);
  const { name } = authCtx;

  /* refs and states for custom select buttons with Modalize */

  const modalizeRefCategory = useRef(null);
  const modalizeRefDifficulty = useRef(null);
  const modalizeRefType = useRef(null);

  function clearHandler() {
    setNumber("10");
    setCategory("Any Category");
    setDifficulty("Any Difficulty");
    setType("Any Type");
  }
  function nextHandler() {
    navigation.navigate("starting", {
      number,
      category,
      difficulty,
      type,
    });
  }

  return (
    <>
      <View style={styles.screen}>
        <View style={styles.form}>
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
              You Can Choose Number, Category, Difficulty And Type Of Questions
            </Text>
          </View>

          {/* Number Input and custom select buttons with Modalize  */}

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
          <Pressable
            onPress={() => modalizeRefCategory.current?.open()}
            style={styles.select}
          >
            <Text style={styles.selectText}>{category}</Text>
          </Pressable>

          <Text style={styles.selectDescription}>Select Difficulty:</Text>
          <Pressable
            onPress={() => modalizeRefDifficulty.current?.open()}
            style={styles.select}
          >
            <Text style={styles.selectText}>{difficulty}</Text>
          </Pressable>

          <Text style={styles.selectDescription}>Select Type:</Text>
          <Pressable
            onPress={() => modalizeRefType.current?.open()}
            style={styles.select}
          >
            <Text style={styles.selectText}>{type}</Text>
          </Pressable>
          <CustomButton
            onPress={clearHandler}
            style={styles.clearButton}
            text="Default"
          />
        </View>

        <View style={styles.buttons}>
          <View style={styles.button}>
            <CustomButton
              onPress={() => setModalVisible(!modalVisible)}
              text="Reset"
            />
          </View>
          <View style={styles.button}>
            <CustomButton
              text="Next"
              disabled={!isValidNum(number)}
              onPress={nextHandler}
            />
          </View>
        </View>
      </View>

      {/* Modal for confirming reset */}
      <ConfirmModal
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
      />

      {/* Modalize for select buttons */}
      <Modalize ref={modalizeRefCategory} adjustToContentHeight={true}>
        <CategoriesModal
          setCategory={setCategory}
          selectedCategory={category}
          onCancel={() => modalizeRefCategory.current?.close()}
        />
      </Modalize>

      <Modalize ref={modalizeRefDifficulty} adjustToContentHeight={true}>
        <DifficultiesModal
          setDifficulty={setDifficulty}
          selectedDifficulty={difficulty}
          onCancel={() => modalizeRefDifficulty.current?.close()}
        />
      </Modalize>

      <Modalize ref={modalizeRefType} adjustToContentHeight={true}>
        <TypesModal
          setType={setType}
          selectedType={type}
          onCancel={() => modalizeRefType.current?.close()}
        />
      </Modalize>
    </>
  );
}

export default ChoosingScreen;
