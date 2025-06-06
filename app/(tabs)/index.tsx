import React from 'react';
import NotificationComponent from "@/components/NotificationComponent";
import {NotificationType} from "@/types/notification";
import {usePushNotifications} from "@/hooks/usePushNotifications";

const HomeScreen = () => {

    return (
       <NotificationComponent type={NotificationType.General}/>
    );
};


export default HomeScreen;