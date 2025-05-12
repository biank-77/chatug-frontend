import React from 'react';
import { Tabs } from 'expo-router';
import FontAwesome from '@expo/vector-icons/FontAwesome';

function TabBarIcon(props: { name: React.ComponentProps<typeof FontAwesome>['name']; color: string }) {
    return <FontAwesome size={28} style={{ marginBottom: -3 }} {...props} />;
}

export default function TabLayout() {
    return (
        <Tabs
            screenOptions={{
                tabBarActiveTintColor: 'blue',
            }}>
            <Tabs.Screen
                name="index"
                options={{
                    title: 'Inicio',
                    tabBarIcon: ({ color }) => <TabBarIcon name="home" color={color} />,
                }}
            />
            <Tabs.Screen
                name="explore"
                options={{
                    title: 'Explorar',
                    tabBarIcon: ({ color }) => <TabBarIcon name="compass" color={color} />,
                }}
            />
        </Tabs>
    );
}