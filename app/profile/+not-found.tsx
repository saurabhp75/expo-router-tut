import { Link } from "expo-router";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function CustomNotFound() {
  return (
    <View style={styles.container}>
      <Text>Profile page not found</Text>
      <Link href={"/"}>
        <Text>Go to Home</Text>
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: 20,
  },
});
