import React from 'react';
import NotificationComponent from "@/components/NotificationComponent";
import {NotificationType} from "@/types/notification";

const PracticaScreen = () => {
    return (
        <NotificationComponent type={NotificationType.Practica} />
    );
};

export default PracticaScreen;