import { useLocalSearchParams } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

export default function CatchAllProductDetails() {
  const { rest } = useLocalSearchParams<{ rest: string[] }>();

  console.log("Rest params:", rest);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Catch all product details</Text>
      <Text style={styles.subtitle}>
        Details about product at: {Array.isArray(rest) ? rest.join("/") : rest}
      </Text>
      <Text style={styles.debug}>Raw rest param: {JSON.stringify(rest)}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: 20,
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 18,
    textAlign: "center",
  },
  debug: {
    fontSize: 14,
    color: "gray",
    textAlign: "center",
  },
});
