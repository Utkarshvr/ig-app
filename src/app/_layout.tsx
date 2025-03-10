import "../../global.css";

import {
  useFonts,
  Poppins_100Thin,
  Poppins_100Thin_Italic,
  Poppins_200ExtraLight,
  Poppins_200ExtraLight_Italic,
  Poppins_300Light,
  Poppins_300Light_Italic,
  Poppins_400Regular,
  Poppins_400Regular_Italic,
  Poppins_500Medium,
  Poppins_500Medium_Italic,
  Poppins_600SemiBold,
  Poppins_600SemiBold_Italic,
  Poppins_700Bold,
  Poppins_700Bold_Italic,
  Poppins_800ExtraBold,
  Poppins_800ExtraBold_Italic,
  Poppins_900Black,
  Poppins_900Black_Italic,
} from "@expo-google-fonts/poppins";

import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { StatusBar } from "expo-status-bar";
import { useEffect } from "react";
import "react-native-reanimated";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  let [fontsLoaded, fontError] = useFonts({
    p1t: Poppins_100Thin,
    p1ti: Poppins_100Thin_Italic,
    p2xl: Poppins_200ExtraLight,
    p2xli: Poppins_200ExtraLight_Italic,
    p3l: Poppins_300Light,
    p3li: Poppins_300Light_Italic,
    p4r: Poppins_400Regular,
    p4ri: Poppins_400Regular_Italic,
    p5m: Poppins_500Medium,
    p5mi: Poppins_500Medium_Italic,
    p6sb: Poppins_600SemiBold,
    p6sbi: Poppins_600SemiBold_Italic,
    p7b: Poppins_700Bold,
    p7bi: Poppins_700Bold_Italic,
    p8xb: Poppins_800ExtraBold,
    p8xbi: Poppins_800ExtraBold_Italic,
    p9b: Poppins_900Black,
    p9bi: Poppins_900Black_Italic,
  });

  useEffect(() => {
    if (fontsLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <>
      <Stack>
        <Stack.Screen name="+not-found" />
      </Stack>
      <StatusBar style="auto" />
    </>
  );
}
