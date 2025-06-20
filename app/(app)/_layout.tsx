import { Stack } from "expo-router";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";

export default function AppLayout() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text>My Expo App</Text>
      </View>
      <View style={styles.content}>
        <Stack screenOptions={{ headerShown: false }}>
          <Stack.Screen name="index" />
          <Stack.Screen name="about" />
        </Stack>
      </View>
      <View style={styles.footer}>
        <Text style={styles.footerText}>RN Tutorial</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    padding: 20,
    backgroundColor: "red",
  },
  headerText: {
    color: "white",
  },
  content: {
    flex: 1,
  },
  footer: {
    padding: 20,
    backgroundColor: "blue",
  },
  footerText: {
    color: "white",
  },
});
