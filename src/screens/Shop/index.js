import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import React from "react";
import { COLORS } from "../Auth/mocks";
import { Entypo, FontAwesome } from "@expo/vector-icons";
import { Input } from "../../components";

const Shop = () => {
  const [service, setService] = React.useState("");
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
      <View style={styles.container}>
        <View style={styles.cardContainer}>
          <View>
            <Text style={styles.subTitle}>My Shop</Text>
            <Text style={styles.title}>Toria Sweets</Text>
            <Text style={styles.type}>Baking</Text>
          </View>
          <View>
            <View style={styles.circle}>
              <Entypo name="shop" size={24} color="white" />
            </View>
          </View>
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.heading}>Add Services</Text>
          <Text style={styles.type}>
            You can add the services you render and images
          </Text>
        </View>
        <View style={styles.formContainer}>
          <View style={styles.inputFlex}>
            <View style={styles.input}>
              <Input
                placeholder="Service"
                onChange={(text) => setService(text)}
                value={service}
              />
            </View>
            <View style={styles.icon}>
              <FontAwesome name="crosshairs" size={14} color="black" />
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Shop;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    padding: 20,
    paddingTop: 50,
  },
  profile: {
    // flex: 1,
    flexDirection: "row",
    alignItems: "center",
    height: 60,
    marginBottom: 20,
  },
  title: {
    fontSize: 15,
    fontWeight: "bold",
  },
  cardContainer: {
    padding: 20,
    elevation: 2,
    backgroundColor: "white",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    borderRadius: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 5,
  },
  subTitle: {
    fontSize: 12,
    color: COLORS.gray,
  },
  type: {
    fontSize: 15,
    color: COLORS.black,
  },
  title: {
    fontSize: 25,
    color: COLORS.black,
  },
  circle: {
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: COLORS.brown,
  },
  textContainer: {
    padding: 20,
  },
  heading: {
    fontSize: 25,
    color: COLORS.black,
    fontWeight: "bold",
    marginBottom: 5,
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
