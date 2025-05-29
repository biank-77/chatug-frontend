import React, { createContext, useState, useContext, useEffect, ReactNode } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {login, users} from "@/services/authService";
import  { jwtDecode } from 'jwt-decode';
import {User} from "@/types/User";

interface AuthContextType {
    userToken: string | null;
    error: string | null;
    userInfo: User | null;
    isLoading: boolean;
    signIn: (username: string, password:string) => Promise<true|false>;
    signOut: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

interface AuthProviderProps {
    children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
    const [userToken, setUserToken] = useState<string | null>(null);
    const [userInfo, setUserInfo] = useState<User|null>(null)
    const [error, setError] = useState<string|null>(null)
    const [isLoading, setIsLoading] = useState<boolean>(true);

    useEffect(() => {
        const bootstrapAsync = async () => {
            let token: string | null = null;
            try {
                token = await AsyncStorage.getItem('userToken');
                if (token) {
                    const decoded = jwtDecode(token||"") as User;
                    setUserInfo(decoded);
                    setUserToken(token);
                }
            } catch (e) {
                console.log('Restoring token failed');
            }
            finally {
                setIsLoading(false);
            }
        };

        bootstrapAsync();
    }, []);

    const signIn = async (username: string, password:string) => {
        setIsLoading(true);
        let success= false
        try {
            const token = await login(username, password)
            await AsyncStorage.setItem('userToken', token);
            const decoded = jwtDecode(token) as User;
            setUserToken(token);
            setUserInfo(decoded);
            success= true
        } catch (e) {
            setError("Usuario o contraseña incorrectos" + JSON.stringify(e));
        }
        setIsLoading(false);
        return success
    };

    const signOut = async () => {
        setIsLoading(true);
        try {
            await AsyncStorage.removeItem('userToken');
            setUserToken(null);
        } catch (e) {
            console.error('Signing out failed', e);
        }
        setIsLoading(false);
    };

    return (
        <AuthContext.Provider value={{ userToken, userInfo, error, isLoading, signIn, signOut }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = (): AuthContextType => {
    const context = useContext(AuthContext);
    if (context === undefined) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};