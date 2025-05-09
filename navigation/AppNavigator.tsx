// src/navigation/AppNavigator.tsx
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import { AppStackParamList } from '../types/navigation';

const Stack = createStackNavigator<AppStackParamList>();

const AppNavigator: React.FC = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Home"
                component={HomeScreen}
                options={{ title: 'Inicio' }}
            />
            {/* Aquí agregarías otras pantallas que requieren autenticación */}
            {/* <Stack.Screen name="Profile" component={ProfileScreen} /> */}
        </Stack.Navigator>
    );
};

export default AppNavigator;