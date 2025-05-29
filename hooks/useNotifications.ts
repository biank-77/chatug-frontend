import { useEffect, useState } from "react";
import { getNotifications, createNotification } from "@/services/notificationServices";
import {Notification} from "@/types/notification";

export const useNotifications = () => {
    const [notifications, setNotifications] = useState<Notification[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        fetchNotifications();
    }, []);

    const fetchNotifications = async () => {
        try {
            const data = await getNotifications();
            setNotifications(data);
        } catch (err: any) {
            console.log("Error", err)
            setError(err.message || "Error al cargar notificaciones");
        } finally {
            setLoading(false);
        }
    };

    const addNotification = async (newNotification: Notification) => {
        try {
            console.log(newNotification.image)
            const savedNotification = await createNotification(newNotification);

            setNotifications([savedNotification, ...notifications])

            return savedNotification
        } catch (err: any) {
            setError(err.message || "Error al guardar notificación");
        }
    };

    return { notifications, addNotification, fetchNotifications, loading, error };
};