import httpClient from "@/lib/httpClient";
import {Notification, NotificationType} from "@/types/notification";

export const getNotifications = async (type:NotificationType): Promise<Notification[]> => {
    return (await httpClient.get(`/notifications?type=${type}`)).data as Notification[];
};

export const createNotification = async (notification: Notification) => {
    return (await httpClient.post('/notifications', notification)).data as Notification;
};