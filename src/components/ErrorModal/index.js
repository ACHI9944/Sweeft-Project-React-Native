import { useNavigation } from "@react-navigation/native";
import { useContext } from "react";
import { Alert, Modal, Text, View } from "react-native";
import { AuthContext } from "../../context/context";
import { refreshToken } from "../../util/fetch";
import CustomButton from "../ui/CustomButton";
import ErrorModalStyle from "./style";

const styles = ErrorModalStyle;

function ErrorModal({ setErrorModalVisible, errorModalVisible, setIsLoading }) {
  const authCtx = useContext(AuthContext);
  const navigation = useNavigation();

  async function refreshHandler() {
    setIsLoading(true);
    try {
      await refreshToken(authCtx.token);
      navigation.goBack();
      Alert.alert("Question history refreshed");
    } catch (error) {
      Alert.alert("Could not proceed, please try again later");
    } finally {
      setIsLoading(false);
    }
  }

  function closeHandler() {
    setErrorModalVisible(!errorModalVisible);
    navigation.goBack();
  }

  return (
    <Modal animationType="fade" transparent={true} visible={errorModalVisible}>
      <View style={[styles.backdrop]} />

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
            ___ Press Ok to return to options menu. Or refresh your game
            history.
          </Text>
        </View>
        <View style={styles.buttons}>
          <View style={styles.button}>
            <CustomButton onPress={refreshHandler} text="Refresh" />
          </View>
          <View style={styles.button}>
            <CustomButton onPress={closeHandler} text="Ok" />
          </View>
        </View>
      </View>
    </Modal>
  );
}

export default ErrorModal;
