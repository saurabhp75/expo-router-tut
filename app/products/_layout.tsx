import { Stack } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

export default function ProductsLayout() {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Stack screenOptions={{ headerShown: false }}>
          <Stack.Screen name="index" />
          <Stack.Screen name="[id]" />
          <Stack.Screen name="[...rest]" />
        </Stack>
      </View>
      <View style={styles.discountedProducts}>
        <Text>Discounted Products</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
  },
  discountedProducts: {
    padding: 20,
    backgroundColor: "orange",
    width: "100%",
  },
});
