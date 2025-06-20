import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="(app)" />
      <Stack.Screen name="(auth)" />
      <Stack.Screen name="products" />
      <Stack.Screen
        name="+not-found"
        options={{ headerShown: true, title: "Not Found" }}
      />
    </Stack>
  );
}
