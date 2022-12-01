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
import RNPickerSelect from "react-native-picker-select";

const Signup = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [state, setState] = useState("");
  const [businessType, setBusinessType] = useState("");
  const [businessName, setBusinessName] = useState("");
  const [mobile, setMobile] = useState("");
  const [show, setShow] = useState(true);
  const [shows, setShows] = useState(true);

  const auth = useAuth();

  const { user } = useUser();

  const submitHandler = () => {
    if (!email) {
      return Alert.alert("Warning!", "Enter Email Address", [{ text: "Ok" }]);
    }
    // if (!state) {
    //   return Alert.alert("Warning!", "Select a State", [{ text: "Ok" }]);
    // }

    // if (!businessName) {
    //   return Alert.alert("Warning!", "Enter Business Name", [{ text: "Ok" }]);
    // }
    // if (!businessType) {
    //   return Alert.alert("Warning!", "Enter Business Type", [{ text: "Ok" }]);
    // }
    if (!password || !confirmPassword) {
      return Alert.alert("Warning!", "Enter Password", [{ text: "Ok" }]);
    }
    if (password !== confirmPassword) {
      return Alert.alert("Error", "Password does not match", [{ text: "Ok" }]);
    }
    auth.signup(email, password);
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      <StatusBar color="black" backgroundColor="white" />

      <View style={styles.container}>
        <ScrollView
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
        >
          <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
          >
            <View>
              <View style={styles.titleContainer}>
                <Text style={styles.title}>Let’s get you</Text>
                <Text style={styles.title}>started!</Text>
              </View>

              <Text>We just need your basic information. </Text>
              <Text>It won’t take long</Text>
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
                  <FontAwesome name="envelope" size={14} color={COLORS.gray} />
                </View>
              </View>

              {/* <View style={styles.inputFlex}>
                <View style={styles.input}>
                  <RNPickerSelect
                    onValueChange={(text) => setState(text)}
                    useNativeAndroidPickerStyle={false}
                    style={{
                      inputAndroid: {
                        borderWidth: 0,
                        paddingVertical: 5,
                        paddingHorizontal: 5,
                      },
                    }}
                    placeholder={{
                      label: "Select a State...",
                      value: null,
                    }}
                    items={[
                      { label: "Lagos", value: "Lagos" },
                      { label: "Ogun", value: "Ogun" },
                    ]}
                  />
                </View>
                <View style={styles.icon}>
                  <FontAwesome
                    name="map-marker"
                    size={14}
                    color={COLORS.gray}
                  />
                </View>
              </View> */}

              {/* <View style={styles.inputFlex}>
                <View style={styles.input}>
                  <Input
                    placeholder="Business Name"
                    onChange={(text) => setBusinessName(text)}
                    value={businessName}
                  />
                </View>

                <View style={styles.icon}>
                  <FontAwesome5 name="tag" size={14} color={COLORS.gray} />
                </View>
              </View>
              <View style={styles.inputFlex}>
                <View style={styles.input}>
                  <RNPickerSelect
                    onValueChange={(text) => setBusinessType(text)}
                    useNativeAndroidPickerStyle={false}
                    style={{
                      inputAndroid: {
                        borderWidth: 0,
                        paddingVertical: 5,
                        paddingHorizontal: 5,
                      },
                    }}
                    placeholder={{
                      label: "Select a Business Type...",
                      value: null,
                    }}
                    items={[
                      { label: "Nail technician", value: "Nail technician" },
                      { label: "Barber", value: "Barber" },
                      { label: "Hair Stylist", value: "Hair Stylist" },
                    ]}
                  />
                </View>
                <View style={styles.icon}>
                  <FontAwesome
                    name="crosshairs"
                    size={14}
                    color={COLORS.gray}
                  />
                </View>
              </View> */}

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

              <View style={styles.inputFlex}>
                <View style={styles.input}>
                  <Input
                    placeholder=" Confirm Password"
                    onChange={(text) => setConfirmPassword(text)}
                    value={confirmPassword}
                    secureEntry={shows}
                  />
                </View>
                <View style={styles.icon}>
                  <FontAwesome5
                    name={shows ? "eye" : "eye-slash"}
                    size={14}
                    color="black"
                    onPress={() => setShows(!shows)}
                  />
                </View>
              </View>
              <Button onPress={submitHandler} title="Create Account" />
            </View>

            <TouchableOpacity
              onPress={() => navigation.navigate("Verification")}
            >
              <Text style={styles.subText}>
                Already Have an account?{" "}
                <Text style={styles.link}>Sign in</Text>
              </Text>
            </TouchableOpacity>
          </KeyboardAvoidingView>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default Signup;

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
    paddingHorizontal: 20,
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
