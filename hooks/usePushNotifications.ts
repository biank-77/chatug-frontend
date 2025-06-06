import * as Notifications from 'expo-notifications';
import * as Device from 'expo-device';
import {useEffect, useRef, useState} from 'react';
import {EventSubscription} from "expo-notifications";

export const usePushNotifications = () => {
    const notificationListener = useRef<EventSubscription>();
    const responseListener = useRef<EventSubscription>();
    const [tokenn, setToken]= useState<string>()

    useEffect(() => {
        registerForPushNotificationsAsync().then(token => {
            console.log("Expo Push Token:", token);
            setToken(token)
            // Aquí puedes enviarlo a tu backend con fetch o axios
        });

        notificationListener.current = Notifications.addNotificationReceivedListener(notification => {
            console.log("Notificación recibida:", notification);
        });

        responseListener.current = Notifications.addNotificationResponseReceivedListener(response => {
            console.log("Respuesta del usuario:", response);
        });

        return () => {
            if(notificationListener.current && responseListener.current){
                Notifications.removeNotificationSubscription(notificationListener.current);
                Notifications.removeNotificationSubscription(responseListener.current);
            }
        };
    }, []);

    async function registerForPushNotificationsAsync() {
        let token;
        if (Device.isDevice) {
            const { status: existingStatus } = await Notifications.getPermissionsAsync();
            let finalStatus = existingStatus;

            if (existingStatus !== 'granted') {
                const { status } = await Notifications.requestPermissionsAsync();
                finalStatus = status;
            }

            if (finalStatus !== 'granted') {
                alert('¡No se otorgaron permisos para notificaciones!');
                return;
            }

            token = (await Notifications.getExpoPushTokenAsync()).data;
        } else {
            alert('Debes usar un dispositivo físico para notificaciones push');
        }

        return token;
    }

    return {tokenn}

}