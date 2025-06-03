export interface Notification {
    message: string,
    type: string,
    image?: string,
    imageName?: string,
    user?: {
        name: string,
        email: string,
        id?: string
    },
    userId?: string,
    createdDate: string
}

export enum NotificationType {
    Practica ="practica",
    Vinculacion = "vinculacion",
    Tutoria = "tutoria",
    General = "general"
}