import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { useAuth } from '../context/AuthContext';

const HomeScreen: React.FC = () => {
    const { signOut, userToken } = useAuth();

    return (
        <View style={styles.container}>
            <Text style={styles.title}>¡Bienvenido!</Text>
            <Text style={styles.tokenText}>Estás en el Home.</Text>
            {userToken && <Text style={styles.tokenTextSmall}>Token: {userToken.substring(0,20)}...</Text>}
            <Button title="Cerrar Sesión" onPress={signOut} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    title: {
        fontSize: 24,
        marginBottom: 20,
    },
    tokenText: {
        fontSize: 16,
        marginBottom: 20,
        textAlign: 'center',
    },
    tokenTextSmall: {
        fontSize: 10,
        marginBottom: 20,
        color: 'grey',
        textAlign: 'center',
    },
});

export default HomeScreen;