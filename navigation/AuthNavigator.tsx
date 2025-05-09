import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from '../screens/LoginScreen';
import { AuthStackParamList } from '../types/navigation';

const Stack = createStackNavigator<AuthStackParamList>();

const AuthNavigator: React.FC = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Login"
                component={LoginScreen}
                options={{ title: 'Login' }}
            />
            {/* Aquí podrías agregar la pantalla de Registro si la tienes */}
            {/* <Stack.Screen name="Register" component={RegisterScreen} /> */}
        </Stack.Navigator>
    );
};

export default AuthNavigator;