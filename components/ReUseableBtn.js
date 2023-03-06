import { View, Text, StyleSheet, Button } from "react-native";
import React from "react";

// Reuseable button component
export default function ReUseableBtn({ title, color, onPress }) {
  return (
    <View>
      <View style={styles.button}>
        <Button title={title} color={color} onPress={onPress} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    padding: 10,
    width: "100%",
  },
});
