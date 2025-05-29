export const formatDate =(dateString:string)=>{
    const date = new Date(dateString);
    return date.toLocaleDateString('es-ES', {
        day: 'numeric',
        month: 'long',
        year: "numeric",
        hour: '2-digit',
        minute: '2-digit',
        hour12: false
    });
}