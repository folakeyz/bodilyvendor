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
import AsyncStorage from "@react-native-async-storage/async-storage";
import { COLORS } from "../mocks";

const ForgotPassword = ({ navigation }) => {
  const [mobile, setMobile] = useState("");

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
        <Text style={styles.title}>Forgot your Password?</Text>
        <Text style={styles.subText}>Not a problem, we gat you</Text>
        <View style={styles.formContainer}>
          <View style={[styles.inputFlex]}>
            <View style={styles.input}>
              <Input
                placeholder="Phone Number"
                onChange={(text) => setMobile(text)}
                value={mobile}
                type="number-pad"
              />
            </View>
            <View style={styles.icon}>
              <FontAwesome name="mobile-phone" size={14} color="black" />
            </View>
          </View>
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
export default ForgotPassword;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    padding: 30,
    paddingTop: 50,
  },
  imgContainer: {
    display: "flex",
  },
  logo: {
    width: 150,
    height: 150,
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
    textAlign: "center",
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
  inputFlex: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
    borderRadius: 50,
    height: 60,
    alignItems: "center",
    paddingHorizontal: 10,
    backgroundColor: "whitesmoke",
  },
  input: {
    display: "flex",
    flex: 0.9,
  },
  icon: {
    display: "flex",
    flex: 0.1,
    flexDirection: "row",
    alignItems: "center",
    // backgroundColor: "blue",
  },
});
