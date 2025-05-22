import React, { useState } from 'react';
import {View, TextInput, StyleSheet, Alert, Image, TouchableOpacity, Text} from 'react-native';
import {Link} from 'expo-router';
import { useAuth } from '../context/AuthContext';
import GlobalStyles from '../styles/global';
import { useNavigation } from '@react-navigation/native';
import { CommonActions } from '@react-navigation/native';

const LoginScreen = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const { signIn, error } = useAuth();
    const navigation = useNavigation();

    const handleLogin = async () => {
        if (username && password) {
            const success = await signIn(username, password);
            if(!success) return
            navigation.dispatch(
                CommonActions.reset({index: 0,routes: [{ name: 'Home' }],})
            );
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

            {error && <Text style={GlobalStyles.errorMessage}> {error} </Text>}

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