import { Stack } from "expo-router";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function RootLayout() {
  return (
    <SafeAreaProvider>
      <Stack>
        <Stack.Screen
          name="index"
          options={{ title: "Home", headerShown: false }}
        />
        <Stack.Screen
          name="measurePressure"
          options={{ title: "measurePressure", headerShown: false }}
        />
      </Stack>
    </SafeAreaProvider>
  );
}
