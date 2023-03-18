import { useContext, useRef, useState } from "react";
import { Pressable, Text, TextInput, View } from "react-native";
import { Modalize } from "react-native-modalize";
import GradientText from "../../components/ui/GradientText";
import { AuthContext } from "../../store/context";
import CategoriesModal from "../../components/CategoriesModal";
import ChoosingScreenStyle from "./style";
import DifficultiesModal from "../../components/DifficultiesModal";
import TypesModal from "../../components/TypesModal";
import CustomButton from "../../components/ui/CustomButton";
import ConfirmModal from "../../components/ConfirmModal";
import Colors from "../../assets/colors/colors";

const styles = ChoosingScreenStyle;
/* Simple validation for number input */
function isValidNum(value) {
  return value > 0 && value < 51;
}

function ChoosingScreen({ navigation }) {
  const [amount, setAmount] = useState();
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
    setAmount("10");
    setCategory("Any Category");
    setDifficulty("Any Difficulty");
    setType("Any Type");
  }
  function nextHandler() {
    navigation.navigate("starting", {
      amount,
      category,
      difficulty,
      type,
    });
  }
  //function for opening and closing modalize
  function refHandler(ref, action) {
    if (action === "open") {
      ref.current?.open();
    } else ref.current?.close();
  }

  function modalHandler() {
    setModalVisible(!modalVisible);
  }

  return (
    <>
      <View style={styles.screen}>
        <View style={styles.form}>
          <View style={styles.welocomeView}>
            <GradientText
              gradientColors={[Colors.gradient100, Colors.gradient200]}
              textStyle={styles.welcomeText}
            >
              Welcome
            </GradientText>
            <Text style={styles.nameText}>'' {name} ''</Text>
          </View>
          <View style={styles.rulesView}>
            <Text style={styles.rules}>
              You Can Choose Amount, Category, Difficulty And Type Of Questions
            </Text>
          </View>

          {/* Amount Input and custom select buttons with Modalize  */}

          <Text style={styles.numberDescription}>
            Number of Questions 1 - 50:
          </Text>
          <View
            style={[
              styles.numberView,
              !isValidNum(amount) && isTouched && styles.invalidNumberView,
              isValidNum(amount) && isTouched && styles.correctNumberView,
            ]}
          >
            <TextInput
              style={styles.numberInput}
              keyboardType="numbers-and-punctuation"
              placeholder="Number of Questions 1 - 50"
              onChangeText={(value) => setAmount(value)}
              value={amount}
              onBlur={() => setIsTouched(true)}
            />
          </View>

          <Text style={styles.selectDescription}>Select Category:</Text>
          <Pressable
            onPress={refHandler.bind(this, modalizeRefCategory, "open")}
            style={styles.select}
          >
            <Text style={styles.selectText}>{category}</Text>
          </Pressable>

          <Text style={styles.selectDescription}>Select Difficulty:</Text>
          <Pressable
            onPress={refHandler.bind(this, modalizeRefDifficulty, "open")}
            style={styles.select}
          >
            <Text style={styles.selectText}>{difficulty}</Text>
          </Pressable>

          <Text style={styles.selectDescription}>Select Type:</Text>
          <Pressable
            onPress={refHandler.bind(this, modalizeRefType, "open")}
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
            <CustomButton onPress={modalHandler} text="Reset" />
          </View>
          <View style={styles.button}>
            <CustomButton
              text="Next"
              disabled={!isValidNum(amount)}
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
          onCancel={refHandler.bind(this, modalizeRefCategory, "close")}
        />
      </Modalize>

      <Modalize ref={modalizeRefDifficulty} adjustToContentHeight={true}>
        <DifficultiesModal
          setDifficulty={setDifficulty}
          selectedDifficulty={difficulty}
          onCancel={refHandler.bind(this, modalizeRefDifficulty, "close")}
        />
      </Modalize>

      <Modalize ref={modalizeRefType} adjustToContentHeight={true}>
        <TypesModal
          setType={setType}
          selectedType={type}
          onCancel={refHandler.bind(this, modalizeRefType, "close")}
        />
      </Modalize>
    </>
  );
}

export default ChoosingScreen;
