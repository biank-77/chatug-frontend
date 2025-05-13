import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { useAuth } from '../../context/AuthContext';

const HomeScreen = () => {
    const { signOut, userToken, userInfo } = useAuth();

    const handleSignOut = async () => {
        await signOut();
    };

    return (
        <View style={styles.container}>
            {userToken && userInfo && <Text style={styles.title}>¡Bienvenido {userInfo.name}!</Text>}
            <Text>Estás en el Home (dentro de tabs).</Text>
            <Button title="Cerrar Sesión" onPress={handleSignOut} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20 },
    title: { fontSize: 24, marginBottom: 20 },
});

export default HomeScreen;