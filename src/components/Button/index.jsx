import { StyleSheet, Text, View, Pressable } from "react-native";
import React from "react";

const Button = ({ onPress, title }) => {
  return (
    <View style={styles.buttonContainer}>
      <Pressable onPress={onPress} style={styles.button}>
        <Text style={styles.text}>{title}</Text>
      </Pressable>
    </View>
  );
};

export default Button;

const styles = StyleSheet.create({
  buttonContainer: {
    paddingHorizontal: 5,
  },
  button: {
    width: "100%",
    height: 50,
    borderRadius: 50,
    backgroundColor: "#0075FF",
    color: "black",
    padding: 3,
    margin: 5,
    marginTop: 10,
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "white",
  },
});
