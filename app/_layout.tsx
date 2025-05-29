import React, { useEffect } from 'react';
import { AuthProvider, useAuth } from '@/context/AuthContext';
import { Slot, SplashScreen, useRouter, useSegments } from 'expo-router';
import { ActivityIndicator, View } from 'react-native';

function RootLayoutNav() {
  const { userToken, isLoading } = useAuth();
  const segments = useSegments();
  const router = useRouter();

  // useEffect(() => {
  //   SplashScreen.preventAutoHideAsync();
  // }, []);

  // useEffect(() => {
  //   if (!isLoading) {
  //     SplashScreen.hideAsync();
  //   }
  // }, [isLoading]);

  useEffect(() => {
    if (isLoading) {
      return;
    }

    const isInAuthFlow = segments?.[0] === 'login' || segments?.[0] === 'sign-up';

    // Si no hay token Y NO estamos en el flujo de autenticación, vamos a login
    if (!userToken && !isInAuthFlow) {
      router.replace('/login');
    }
    // Si hay token Y estamos en el flujo de autenticación, vamos a la pantalla principal
    else if (userToken && isInAuthFlow) {
      router.replace('/');
    }

  }, [userToken, isLoading, segments, router]);

  if (isLoading) {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <ActivityIndicator size="large" color="#0000ff" />

        </View>
    );
  }

  return <Slot />;
}

export default function RootLayout() {
  return (
      <AuthProvider>
        <RootLayoutNav />
      </AuthProvider>
  );
}