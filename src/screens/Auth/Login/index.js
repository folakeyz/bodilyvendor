import {
  StyleSheet,
  Text,
  View,
  KeyboardAvoidingView,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
  StatusBar,
  Platform,
  Alert,
} from "react-native";
import React, { useState } from "react";
import { Button, Input } from "../../../components";
import { Entypo, FontAwesome5, FontAwesome } from "@expo/vector-icons";
import { useAuth } from "../../../auth";
import { useUser } from "../../../auth/useUser";
import { COLORS } from "../mocks";

const Login = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [show, setShow] = useState(true);

  const auth = useAuth();

  const { user } = useUser();

  const submitHandler = () => {
    // if (!email) {
    //   return Alert.alert("Warning!", "Enter Email Address", [{ text: "Ok" }]);
    // }
    // if (!password) {
    //   return Alert.alert("Warning!", "Enter Password", [{ text: "Ok" }]);
    // }
    // auth.signin(mail, password);
    navigation.replace("Dashboard");
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      <StatusBar color="black" backgroundColor="white" />
      <ScrollView
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
      >
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          style={styles.container}
        >
          <View>
            <View style={styles.titleContainer}>
              <Text style={styles.title}>Hi</Text>
            </View>

            <Text>Welcome Back </Text>
          </View>

          <View style={styles.formContainer}>
            <View style={styles.inputFlex}>
              <View style={styles.input}>
                <Input
                  placeholder="Email Address"
                  onChange={(text) => setEmail(text)}
                  value={email}
                  type="email-address"
                />
              </View>
              <View style={styles.icon}>
                <FontAwesome name="envelope" size={14} color="black" />
              </View>
            </View>

            <View style={styles.inputFlex}>
              <View style={styles.input}>
                <Input
                  placeholder="Password"
                  onChange={(text) => setPassword(text)}
                  value={password}
                  secureEntry={show}
                />
              </View>
              <View style={styles.icon}>
                <FontAwesome5
                  name={show ? "eye" : "eye-slash"}
                  size={14}
                  color="black"
                  onPress={() => setShow(!show)}
                />
              </View>
            </View>

            <TouchableOpacity
              onPress={() => navigation.navigate("Forgot Password")}
            >
              <Text style={styles.link}>Forgot Password?</Text>
            </TouchableOpacity>
            <Button onPress={submitHandler} title="Login" />
          </View>

          <TouchableOpacity onPress={() => navigation.navigate("Register")}>
            <Text style={styles.subText}>
              Don't Have an account? <Text style={styles.link}>Sign up</Text>
            </Text>
          </TouchableOpacity>
        </KeyboardAvoidingView>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Login;

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
