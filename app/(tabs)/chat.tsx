import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useAuth } from '../../context/AuthContext';

const ChatScreen = () => {
    const { signOut, userToken, userInfo } = useAuth();


    return (
        <View style={styles.container}>

            <Text>Aqui el chat</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20 },
    title: { fontSize: 24, marginBottom: 20 },
});

export default ChatScreen;