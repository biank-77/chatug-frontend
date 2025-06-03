import React from 'react';
import NotificationComponent from "@/components/NotificationComponent";
import {NotificationType} from "@/types/notification";

const TutoriaScreen = () => {

    return (
        <NotificationComponent type={NotificationType.Tutoria}/>
    );
};


export default TutoriaScreen;