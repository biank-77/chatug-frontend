import React from 'react';
import { View, Text, StyleSheet, Modal, TouchableOpacity} from 'react-native';

interface ModalProps {
    visible: boolean;
    setVisible: (visible: boolean) => void;
    children: React.ReactNode
}

const ModalComponent = ({visible, setVisible, children }: ModalProps) => {


    return (
        <Modal
            transparent={true}
            visible={visible}
            animationType="fade"
            onRequestClose={() => setVisible(false)}
        >
            <View style={styles.overlay}>
                <View style={styles.modalView}>
                    <TouchableOpacity
                        onPress={() => setVisible(false)}
                        style={styles.closeButton}
                    >
                        <Text style={styles.closeText}>X</Text>
                    </TouchableOpacity>
                    <View style={styles.modalContent}>
                        {children}

                    </View>
                </View>
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    touchableBox: {
        backgroundColor: '#4CAF50',
        padding: 20,
        borderRadius: 10,
    },
    boxText: {
        color: '#fff',
        fontSize: 16,
    },
    overlay: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.5)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalView: {
        backgroundColor:"#ecf7ff",
        borderRadius: 10,
        minWidth: 250,
    },
    modalText: {
        fontSize: 18,
        marginBottom: 20,
    },
    closeButton: {
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 5,
        alignSelf:"flex-end"
    },
    closeText: {
        color: '#000',
        fontSize: 16,
        fontWeight: 'bold',
    },
    modalContent: {
        padding: 15,
        alignItems: 'center',
        minWidth: 250,
    }
});

export default ModalComponent;