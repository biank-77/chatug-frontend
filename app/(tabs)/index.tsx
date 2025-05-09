import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { useAuth } from '../../context/AuthContext'; // Ajusta la ruta

const HomeScreen = () => {
    const { signOut, userToken } = useAuth(); // Agrega userToken si quieres mostrarlo

    const handleSignOut = async () => {
        await signOut();
        // El RootLayoutNav en app/_layout.tsx se encargará de redirigir a /login
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>¡Bienvenido!</Text>
            <Text>Estás en el Home (dentro de tabs).</Text>
            {userToken && <Text style={{fontSize: 10, color: 'grey', marginVertical: 10}}>Token: {userToken.substring(0,15)}...</Text>}
            <Button title="Cerrar Sesión" onPress={handleSignOut} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20 },
    title: { fontSize: 24, marginBottom: 20 },
});

export default HomeScreen;