import { StyleSheet, Image } from "react-native";
import React from "react";

export const avatar = (sex) => {
  switch (sex) {
    case "Male":
      return (
        <Image
          source={require("../../../assets/male.png")}
          style={styles.image}
        />
      );
    case "Female":
      return (
        <Image
          source={require("../../../assets/female.png")}
          style={styles.image}
        />
      );
  }
  return (
    <Image source={require("../../../assets/male.png")} style={styles.image} />
  );
};
const styles = StyleSheet.create({
  image: {
    height: 60,
    width: 60,
    borderRadius: 60,
    resizeMode: "contain",
  },
});
