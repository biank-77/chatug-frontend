import React from 'react';
import { Tabs } from 'expo-router';
import FontAwesome from '@expo/vector-icons/FontAwesome'; // o tu librería de iconos

// Puedes mantener tu helper de iconos si lo tienes
function TabBarIcon(props: { name: React.ComponentProps<typeof FontAwesome>['name']; color: string }) {
    return <FontAwesome size={28} style={{ marginBottom: -3 }} {...props} />;
}

export default function TabLayout() {
    // Ya no necesitas useAuth aquí para la redirección principal,
    // a menos que tengas lógica específica de auth para el layout de las pestañas.
    // La protección general ya la hace app/_layout.tsx

    return (
        <Tabs
            screenOptions={{
                tabBarActiveTintColor: 'blue', // Personaliza tus colores
                // headerShown: false, // Si no quieres headers por defecto en las tabs
            }}>
            <Tabs.Screen
                name="index" // Corresponde a app/(tabs)/index.tsx
                options={{
                    title: 'Inicio',
                    tabBarIcon: ({ color }) => <TabBarIcon name="home" color={color} />,
                }}
            />
            <Tabs.Screen
                name="explore" // Corresponde a app/(tabs)/explore.tsx
                options={{
                    title: 'Explorar',
                    tabBarIcon: ({ color }) => <TabBarIcon name="compass" color={color} />,
                    // headerRight: () => (...), // Puedes añadir botones al header aquí
                }}
            />
            {/*
        NO incluyas _layout como un Tabs.Screen.
        NO incluyas +not-found como un Tabs.Screen aquí directamente,
        Expo Router lo maneja a nivel de app.
      */}
        </Tabs>
    );
}