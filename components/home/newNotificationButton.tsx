import React, {useState} from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import GlobalStyles from "@/styles/global";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import ModalComponent from "@/components/ModalComponent"
import FormNewNotification from "@/components/home/formNewNotification";

const NewNotificationButton = ({addNotification}:any) => {
    const [modalVisible, setModalVisible] = useState(false);

    return (
        <TouchableOpacity style={GlobalStyles.card} onPress={() => setModalVisible(true)}>
            <View style={[GlobalStyles.cardHeader, {borderBottomWidth: 0}]}>
                <FontAwesome size={28} style={{ marginBottom: -3 }} name="pencil-square-o" color={"#0c74b7"}/>
                {/*<FlashingShadowIcon name="pencil-square-o" color={"#0c74b7"}/>*/}
                <Text style={styles.message}> ¿Hay una nueva actividad o evento que deseas notificar a los estudiantes? </Text>

            </View>
            <ModalComponent visible={modalVisible} setVisible={setModalVisible} >
                <FormNewNotification setModalVisible={setModalVisible} addNotification={addNotification}/>
            </ModalComponent>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    title: { fontSize: 24, marginBottom: 20 },
    message: {fontStyle: "italic", color: "gray", paddingHorizontal: 15},
});

export default NewNotificationButton;