import React from 'react';
import NotificationComponent from "@/components/NotificationComponent";
import {NotificationType} from "@/types/notification";

const VinculacionScreen = () => {

    return (
       <NotificationComponent type={NotificationType.Vinculacion}/>
    );
};

export default VinculacionScreen;