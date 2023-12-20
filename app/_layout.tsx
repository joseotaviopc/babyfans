import { Ionicons } from '@expo/vector-icons';
import { useFonts } from 'expo-font';
import { SplashScreen, Stack, useRouter, useNavigation } from 'expo-router';
import { useEffect, useState } from 'react';
import { TouchableOpacity } from 'react-native';
import * as SecureStore from 'expo-secure-store';
import { supabase } from '@/lib/supabase';
import { Session } from '@supabase/supabase-js';
import { createStackNavigator } from '@react-navigation/stack';
import { AuthProvider, useAuth } from '@/context/Auth'

const tokenCache = {
  async getToken(key: string) {
    try {
      return SecureStore.getItemAsync(key)
    } catch (error) {
      console.log(error)
      return null
    }
  },
  async saveToken(key: string, value: string) {
    try {
      return SecureStore.setItemAsync(key, value)
    } catch (error) {
      console.log(error)
    }
  }
}

export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from 'expo-router';

export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: '(tabs)',
};

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded, error] = useFonts({
    mon: require("../assets/fonts/Montserrat-Regular.ttf"),
    "mon-sb": require("../assets/fonts/Montserrat-SemiBold.ttf"),
    "mon-b": require("../assets/fonts/Montserrat-Bold.ttf"),
  });

  // Expo Router uses Error Boundaries to catch errors in the navigation tree.
  useEffect(() => {
    if (error) throw error;
  }, [error]);

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <AuthProvider>
      <RootLayoutNav />
    </AuthProvider>
  );
}

// type RootStackParamList = {
//   "(tabs)": undefined,
//   "listing/[id]": undefined,
//   "(modals)/notification": undefined,
//   "(modals)/search": undefined,
//   "(modals)/settings": undefined,
//   "(modals)/login": { 
//     setSession: React.Dispatch<React.SetStateAction<Session | null>>
//    };
// };
// const RootStack = createStackNavigator<RootStackParamList>();

function RootLayoutNav() {
  const router = useRouter();
  const navigation = useNavigation();
  const { session } = useAuth()
  const [isSignedIn, setIsSignedIn] = useState(true);

  
  function handleCloseLogin() {
    router.back();
    setIsSignedIn(false);
  }

  // Automatically open login if user is not authenticated
  useEffect(() => {
    if (!session || (session && !session.user)) {
      router.push("/(modals)/login");
    }
    if (session && session.user) router.push("/(tabs)")
  }, [session]);

  return (
    <Stack>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen
        name="listing/[id]"
        options={{
          headerTitle: "",
          headerTransparent: true,
          // headerRight: ListingHeaderRight
        }}
      />
      <Stack.Screen
        name="(modals)/login"
        options={{
          // headerShown: false,
          presentation: "modal",
          title: "Log in",
          headerTitleStyle: {
            fontFamily: "mon-sb",
          },
          headerLeft: () => (
            <TouchableOpacity onPress={handleCloseLogin}>
              <Ionicons name="close-outline" size={28} />
            </TouchableOpacity>
          ),
        }}
      />
      <Stack.Screen
        name="(modals)/notification"
        options={{
          headerShown: false,
          animation: "fade",
          presentation: "transparentModal",
          headerLeft: () => (
            <TouchableOpacity onPress={() => router.back()}>
              <Ionicons name="close-outline" size={28} />
            </TouchableOpacity>
          ),
        }}
        />
      <Stack.Screen
        name="(modals)/search"
        options={{
          headerShown: false,
          animation: "fade",
          presentation: "modal",
          title: "Search",
          headerLeft: () => (
            <TouchableOpacity onPress={() => router.back()}>
              <Ionicons name="close-outline" size={28} />
            </TouchableOpacity>
          ),
        }}
        />
      <Stack.Screen
        name="(modals)/settings"
        options={{
          presentation: "transparentModal",
          animation: "fade",
          headerTransparent: true,
          title: "Settings",
          headerLeft: () => (
            <TouchableOpacity onPress={() => router.back()}>
              <Ionicons name="close-outline" size={28} />
            </TouchableOpacity>
          ),
        }}
        />
    </Stack>
  );

}
