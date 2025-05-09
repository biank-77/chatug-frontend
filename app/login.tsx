import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';
import { useRouter } from 'expo-router';
import { useAuth } from '../context/AuthContext'; // Ajusta la ruta si 'context' está en otro nivel

const LoginScreen = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const { signIn } = useAuth();
    const router = useRouter();

    const handleLogin = async () => {
        if (username && password) {
            // Simula la obtención de un token
            const fakeToken = `fake-jwt-token-for-${username}`;
            await signIn(fakeToken);
            // Después del login, redirige a la ruta principal de tus pestañas
            // Podría ser '/', '/(tabs)/', o la ruta de tu tab inicial como '/explore'
            router.replace('/'); // Expo Router debería llevarte al (tabs) index si es la ruta raíz
        } else {
            Alert.alert('Error', 'Por favor, ingresa usuario y contraseña.');
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Iniciar Sesión</Text>
            <TextInput
                style={styles.input}
                placeholder="Usuario"
                value={username}
                onChangeText={setUsername}
                autoCapitalize="none"
            />
            <TextInput
                style={styles.input}
                placeholder="Contraseña"
                value={password}
                onChangeText={setPassword}
                secureTextEntry
            />
            <Button title="Ingresar" onPress={handleLogin} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20 },
    title: { fontSize: 24, marginBottom: 20 },
    input: { width: '100%', height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 12, paddingHorizontal: 10, borderRadius: 5 },
});

export default LoginScreen;