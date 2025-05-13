import {View, Text, Image, StyleSheet, TextInput, TouchableOpacity, Alert} from 'react-native';
import GlobalStyles from "@/styles/global";
import React, {useState} from "react";
import {Link, useRouter} from "expo-router";
import {signUp} from "@/services/authService";


export default function RegistroScreen() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [birthDate, setBirthDate] = useState('')
    const [password, setPassword] = useState('')
    const router = useRouter();

    const handleSignUp = async () => {
        if(name && email && birthDate && password){
            const success = await signUp({name, email, birthDate, password});
            if(!success) return
            Alert.alert('Success', 'Usuario creado con exito');
            router.navigate("/login");
        }
    }

    return (
        <View style={[GlobalStyles.backgroundColor]}>
            <View>
                <Image source={require('@/assets/images/ug-logo-v2.1.png')} style={styles.logo} />
                <Text style={styles.message}>¡Telemática, más conectada que nunca!</Text>
            </View>
            <View style={GlobalStyles.screenContainer}>

                <TextInput
                    style={[GlobalStyles.input, styles.inputContainer]}
                    placeholder="Nombre completo"
                    value={name}
                    onChangeText={setName}
                    autoCapitalize="none"
                />

                <TextInput
                    style={[GlobalStyles.input, styles.inputContainer]}
                    placeholder="Fecha de nacimiento"
                    value={birthDate}
                    onChangeText={setBirthDate}
                    secureTextEntry
                />

                <TextInput
                    style={[GlobalStyles.input, styles.inputContainer]}
                    placeholder="Correo institucional"
                    value={email}
                    onChangeText={setEmail}
                    secureTextEntry
                />

                <TextInput
                    style={[GlobalStyles.input, styles.inputContainer]}
                    placeholder="Contaseña"
                    value={password}
                    onChangeText={setPassword}
                    secureTextEntry
                />

                <TouchableOpacity style={styles.button} onPress={handleSignUp}>
                    <Text style={GlobalStyles.primaryButtonText}> Registrarse </Text>
                </TouchableOpacity>

                <hr style={GlobalStyles.divider}/>
                <Text >¿Ya tienes una cuenta? {' '}
                    <Link href="/login" style={GlobalStyles.hyperLink}>
                        ¡Inicia sesión!
                    </Link>
                </Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    logo: {width: "70%", height: 150, alignSelf: 'center', marginTop: 40},
    message: {marginTop: -20, textAlign: "center", color: "#555555"},
    inputContainer: {marginBottom: 14},
    button: {...GlobalStyles.primaryButton, marginTop:54}
})
