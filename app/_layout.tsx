import React, { useEffect } from 'react';
import { AuthProvider, useAuth } from '../context/AuthContext'; // Ajusta la ruta
import { Slot, SplashScreen, useRouter, useSegments } from 'expo-router';
import { ActivityIndicator, View } from 'react-native';

// Importante: Mantén la pantalla de splash visible hasta que se resuelva la autenticación.
SplashScreen.preventAutoHideAsync();

function RootLayoutNav() {
  const { userToken, isLoading } = useAuth();
  const segments = useSegments(); // ['(tabs)', 'index'] o ['login']
  const router = useRouter();

  useEffect(() => {
    if (isLoading) {
      return; // No hagas nada mientras se carga el token
    }

    const isInAuthFlow = segments[0] === 'login'; // O un grupo como '(auth)' si lo creas

    if (!userToken && !isInAuthFlow) {
      // Si no hay token y no estamos en el flujo de login, redirigir a login
      router.replace('/login');
    } else if (userToken && isInAuthFlow) {
      // Si hay token y estamos en la pantalla de login (o grupo auth), redirigir a la app
      router.replace('/'); // Redirige a la ruta raíz, que debería ser tu grupo (tabs)
    }

    // Una vez que la lógica está completa (ya sea redirigido o no), oculta el splash.
    if (!isLoading) {
      SplashScreen.hideAsync();
    }

  }, [userToken, isLoading, segments, router]);

  // Muestra un loader mientras se verifica el token o antes de la redirección.
  // SplashScreen.preventAutoHideAsync() ayuda a que esto sea más fluido.
  if (isLoading) {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <ActivityIndicator size="large" color="#0000ff" />
        </View>
    );
  }

  // <Slot /> renderiza el componente hijo correspondiente a la ruta actual.
  // Si userToken es null, y no estamos en /login, la redirección ya habrá ocurrido
  // y Slot renderizará LoginScreen. Si hay token, renderizará (tabs)/_layout.tsx y su contenido.
  return <Slot />;
}

export default function RootLayout() {
  return (
      <AuthProvider>
        <RootLayoutNav />
      </AuthProvider>
  );
}