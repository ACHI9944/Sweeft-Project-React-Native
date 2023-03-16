import { useNavigation } from "@react-navigation/native";
import { useContext } from "react";
import { Modal, Platform, Pressable, Text, View } from "react-native";
import { AuthContext } from "../../store/auth-context";
import { refreshToken } from "../../util/fetch";
import CustomButton from "../ui/CustomButton";
import ErrorModalStyle from "./style";

const styles = ErrorModalStyle;

function ErrorModal({
  setErrorModalVisible,
  errorModalVisible,
  refreshHandler,
}) {
  const navigation = useNavigation();

  function closeHandler() {
    setErrorModalVisible(!errorModalVisible);
    navigation.goBack();
  }

  return (
    <Modal animationType="fade" transparent={true} visible={errorModalVisible}>
      <View
        style={[
          Platform.OS === "ios" ? styles.iOSBackdrop : styles.androidBackdrop,
          styles.backdrop,
        ]}
      />

      <View style={styles.modal}>
        <View style={styles.modalTexts}>
          <Text style={styles.bigText}>Warning!</Text>
          <Text style={styles.smallText}>
            ___ You may have already done all the possible questions of this
            category.
          </Text>
          <Text style={styles.smallText}>
            ___ Or you may have entered bigger amount of questions than that
            specific category has.
          </Text>
          <Text style={styles.smallText}>
            ___ Please choose different amount of questions or different
            category, or refresh your game history to be able to do same
            questions again!
          </Text>
        </View>
        <View style={styles.buttons}>
          <View style={styles.button}>
            <CustomButton onPress={refreshHandler} text="Refresh" />
          </View>
          <View style={styles.button}>
            <CustomButton onPress={closeHandler} text="Close" />
          </View>
        </View>
      </View>
    </Modal>
  );
}

export default ErrorModal;
