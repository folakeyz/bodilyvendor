import {
  StyleSheet,
  Text,
  View,
  Image,
  KeyboardAvoidingView,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
  StatusBar,
} from "react-native";
import React, { useState } from "react";
import { Button, Input } from "../../../components";
import { FontAwesome } from "@expo/vector-icons";
import { useAuth } from "../../../auth";
import { useUser } from "../../../auth/useUser";
import { COLORS } from "../mocks";
import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from "react-native-confirmation-code-field";

const Verification = ({ navigation }) => {
  const [mobile, setMobile] = useState("");
  const [value, setValue] = useState("");
  const ref = useBlurOnFulfill({ value, cellCount: 4 });
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });

  const auth = useAuth();

  const { user } = useUser();

  const submitHandler = () => {
    auth.signin(email, password);
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      <StatusBar color="black" backgroundColor="white" />
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.container}
      >
        <Text style={styles.title}>Let's verify your email?</Text>
        <Text style={styles.subText}>
          We sent you a one time pin. Please check your mail box
        </Text>
        <View style={styles.formContainer}>
          <CodeField
            ref={ref}
            {...props}
            // Use `caretHidden={false}` when users can't paste a text value, because context menu doesn't appear
            value={value}
            onChangeText={setValue}
            cellCount={4}
            rootStyle={styles.codeFieldRoot}
            keyboardType="number-pad"
            textContentType="oneTimeCode"
            renderCell={({ index, symbol, isFocused }) => (
              <Text
                key={index}
                style={[styles.cell, isFocused && styles.focusCell]}
                onLayout={getCellOnLayoutHandler(index)}
              >
                {symbol || (isFocused ? <Cursor /> : null)}
              </Text>
            )}
          />
          <Button onPress={submitHandler} title="Submit" />
        </View>

        <TouchableOpacity onPress={() => navigation.navigate("Login")}>
          <Text style={styles.subText}>
            Back to Sign in? <Text style={styles.link}>Sign in</Text>
          </Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};
export default Verification;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    padding: 30,
    paddingTop: 50,
  },
  title: {
    fontSize: 35,
    fontFamily: "Poppins",
  },
  titleContainer: {
    marginBottom: 20,
  },
  subText: {
    fontSize: 14,
    marginBottom: 10,
    marginTop: 10,
  },
  link: {
    fontSize: 14,
    marginBottom: 10,
    marginTop: 5,
    textAlign: "right",
    color: COLORS.blue,
  },
  formContainer: {
    display: "flex",
    paddingTop: 50,
  },

  codeFieldRoot: { marginTop: 10, justifyContent: "space-evenly" },
  cell: {
    display: "flex",
    flexDirection: "column",
    width: 60,
    height: 60,
    lineHeight: 58,
    fontSize: 24,
    borderWidth: 1,
    borderColor: "#00000030",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    borderRadius: 35,
    backgroundColor: "whitesmoke",
  },
  focusCell: {
    borderColor: "#000",
  },
});
