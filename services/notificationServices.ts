import httpClient from "@/lib/httpClient";
import {Notification} from "@/types/notification";

export const getNotifications = async (): Promise<Notification[]> => {
    return (await httpClient.get('/notifications')).data as Notification[];
};

export const createNotification = async (notification: Notification) => {
    return (await httpClient.post('/notifications', notification)).data as Notification;
};