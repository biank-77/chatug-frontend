import React from 'react';
import { Tabs } from 'expo-router';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import GlobalStyles from "@/styles/global";

function TabBarIcon(props: { name: React.ComponentProps<typeof FontAwesome>['name']; color: string }) {
    return <FontAwesome size={28} style={{ marginBottom: -3 }} {...props} />;
}

export default function TabLayout() {
    return (
        <Tabs
            screenOptions={{
                tabBarActiveTintColor: '#0c74b7',
            }}>
            <Tabs.Screen
                name="index"
                options={{
                    title: 'Noticias',
                    headerTitleStyle: GlobalStyles.headerTitle,
                    tabBarIcon: ({ color }) => <TabBarIcon name="newspaper-o" color={color} />,
                }}
            />
            <Tabs.Screen
                name="practica"
                options={{
                    title: 'Práctica',
                    headerTitleStyle: GlobalStyles.headerTitle,
                    tabBarIcon: ({ color }) => <TabBarIcon name="paperclip" color={color} />,
                }}
            />
            <Tabs.Screen
                name="vinculacion"
                options={{
                    title: 'Vinculación',
                    headerTitleStyle: GlobalStyles.headerTitle,
                    tabBarIcon: ({ color }) => <TabBarIcon name="random" color={color} />,
                }}
            />
            <Tabs.Screen
                name="tutoria"
                options={{
                    title: 'Tutorias',
                    headerTitleStyle: GlobalStyles.headerTitle,
                    tabBarIcon: ({ color }) => <TabBarIcon name="street-view" color={color} />,
                }}
            />
            <Tabs.Screen
                name="chat"
                options={{
                    title: 'Chat',
                    headerTitleStyle: GlobalStyles.headerTitle,
                    tabBarIcon: ({ color }) => <TabBarIcon name="comments-o" color={color} />,
                }}
            />
            <Tabs.Screen
                name="explore"
                options={{
                    title: 'Feedback',
                    headerTitleStyle: GlobalStyles.headerTitle,
                    tabBarIcon: ({ color }) => <TabBarIcon name="smile-o" color={color} />,
                }}
            />
        </Tabs>
    );
}