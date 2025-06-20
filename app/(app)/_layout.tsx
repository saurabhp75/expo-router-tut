import { Slot } from "expo-router";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";

export default function RootLayout() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text>My Expo App</Text>
      </View>
      <Slot />
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
  footer: {
    padding: 20,
    backgroundColor: "blue",
  },
  footerText: {
    color: "white",
  },
});
