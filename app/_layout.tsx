import React, { useEffect } from 'react';
import { AuthProvider, useAuth } from '@/context/AuthContext';
import { Slot, SplashScreen, useRouter, useSegments } from 'expo-router';
import { ActivityIndicator, View } from 'react-native';

function RootLayoutNav() {
  const { userToken, isLoading } = useAuth();
  const segments = useSegments();
  const router = useRouter();

  // Prevent auto-hide on mount
  useEffect(() => {
    const prepare = async () => {
      try {
        await SplashScreen.preventAutoHideAsync();
      } catch (e) {
        console.warn('SplashScreen error:', e);
      }
    };
    prepare();
  }, []);

  // Hide splash when loading is done
  useEffect(() => {
    if (!isLoading) {
      SplashScreen.hideAsync();
    }
  }, [isLoading]);

  // Handle navigation
  useEffect(() => {
    if (isLoading) return;

    const isInAuthFlow = segments[0] === 'login' || segments[0] === 'sign-up';

    if (!userToken && !isInAuthFlow) {
      router.replace('/login');
    } else if (userToken && isInAuthFlow) {
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