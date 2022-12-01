import { StyleSheet, TextInput, View, Text } from "react-native";
import React from "react";

const Input = ({
  placeholder,
  onChange,
  value,
  secureEntry = false,
  onFocus = () => {},
  type = "default",
}) => {
  return (
    <View style={styles.inputContainer}>
      <TextInput
        placeholder={placeholder}
        onChangeText={onChange}
        value={value}
        style={styles.input}
        secureTextEntry={secureEntry}
        autoCapitalize="none"
        onFocus={onFocus}
        keyboardType={type}
      />
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  label: {
    paddingHorizontal: 5,
  },
  inputContainer: {
    // padding: 5,
    // marginBottom: 20,
    // borderBottomColor: "#0075FF",
    // borderBottomWidth: 1,
  },

  input: {
    display: "flex",
    borderWidth: 0,
    paddingVertical: 5,
    paddingHorizontal: 5,
  },
});
