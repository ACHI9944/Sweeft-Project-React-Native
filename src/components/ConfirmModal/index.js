import AsyncStorage from "@react-native-async-storage/async-storage";
import { useContext } from "react";
import { Modal, Platform, Pressable, Text, View } from "react-native";
import { AuthContext } from "../../store/context";
import CustomButton from "../ui/CustomButton";
import ConfirmModalStyle from "./style";

const styles = ConfirmModalStyle;

function ConfirmModal({ modalVisible, setModalVisible }) {
  function modalHandler() {
    setModalVisible(!modalVisible);
  }
  async function clearHandler() {
    authCtx.clearNameAndToken();
    await AsyncStorage.removeItem("token");
    await AsyncStorage.removeItem("name");
  }

  const authCtx = useContext(AuthContext);
  return (
    <Modal animationType="fade" transparent={true} visible={modalVisible}>
      <Pressable
        style={[
          Platform.OS === "ios" ? styles.iOSBackdrop : styles.androidBackdrop,
          styles.backdrop,
        ]}
        onPress={modalHandler}
      />

      <View style={styles.modal}>
        <View style={styles.modalTexts}>
          <Text style={styles.bigText}>Are You Sure?</Text>
          <Text style={styles.smallText}>
            You will also reset history and may meet questions that you have
            already answered before...
          </Text>
        </View>
        <View style={styles.buttons}>
          <View style={styles.button}>
            <CustomButton onPress={clearHandler} text="Yes" />
          </View>
          <View style={styles.button}>
            <CustomButton onPress={modalHandler} text="No" />
          </View>
        </View>
      </View>
    </Modal>
  );
}

export default ConfirmModal;
