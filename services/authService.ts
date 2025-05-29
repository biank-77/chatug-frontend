import httpClient from '../lib/httpClient';

export const login = async (email: string, password: string) => {
    const data= ((await httpClient.post('/auth/login', { email, password })).data as {token:string});
    return data.token
};


export const users = async () => {
    return (await httpClient.get('/users')).data
};

export const signUp = async (userData: {name:string, email:string, birthDate:string, password:string}) => {
    await httpClient.post('/auth/register', userData)
    return true
};