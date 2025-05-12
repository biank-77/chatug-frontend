import React, { useState } from 'react';
import {View, TextInput, StyleSheet, Alert, Image, TouchableOpacity, Text} from 'react-native';
import {Link, useRouter} from 'expo-router';
import { useAuth } from '../context/AuthContext';
import GlobalStyles from '../styles/global';

const LoginScreen = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const { signIn } = useAuth();
    const router = useRouter();

    const handleLogin = async () => {
        if (username && password) {
            const fakeToken = `fake-jwt-token-for-${username}`;
            await signIn(fakeToken);
            router.replace('/');
        } else {
            Alert.alert('Error', 'Por favor, ingresa usuario y contraseña.');
        }
    };

    return (
        <View style={GlobalStyles.screenContainer}>

            <Image source={require('@/assets/images/ug-logo-v3.png')} style={styles.logo} />
            <TextInput
                style={GlobalStyles.input}
                placeholder="Usuario"
                value={username}
                onChangeText={setUsername}
                autoCapitalize="none"
            />
            <TextInput
                style={GlobalStyles.input}
                placeholder="Contraseña"
                value={password}
                onChangeText={setPassword}
                secureTextEntry
            />
            <TouchableOpacity style={styles.button} onPress={handleLogin}>
                <Text style={GlobalStyles.primaryButtonText}> Ingresar </Text>
            </TouchableOpacity>

            <hr style={GlobalStyles.divider}/>
            <Text style={styles.singUp}>¿No tienes una cuenta? {' '}
                <Link href="/sign-up" style={GlobalStyles.hyperLink} >
                    ¡Regístrate!
                </Link>
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    logo: {width: "50%", height: undefined, alignSelf: 'center', aspectRatio: 1, resizeMode: 'contain' },
    title: { fontSize: 24, marginBottom: 20 },
    button: {...GlobalStyles.primaryButton, marginTop:28},
    singUp: {color: "gray"},
});


export default LoginScreen;