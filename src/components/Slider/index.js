import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  ImageBackground,
} from "react-native";
import React from "react";
const { width } = Dimensions.get("window");

const Slider = ({ item }) => {
  return (
    <View style={styles.cardContainer}>
      <ImageBackground
        source={require("../../../assets/bg.png")}
        resizeMode="cover"
        style={[styles.card, { width: width }]}
        imageStyle={styles.bgImage}
      >
        <View style={styles.text}>
          <Text style={{ color: "white" }}>{item?.title}</Text>
          <Text style={{ color: "white", fontWeight: "bold" }}>
            {item?.subtitle}
          </Text>
        </View>
      </ImageBackground>
    </View>
  );
};

export default Slider;

const styles = StyleSheet.create({
  cardContainer: {
    flex: 1,
    height: 150,
    borderRadius: 20,
    marginRight: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    elevation: 1,
    overflow: "hidden",
    padding: 0,
  },
  card: {
    flex: 1,
    height: 150,
    padding: 20,
  },
  text: {
    flex: 1,
    justifyContent: "space-between",
  },

  bgImage: {
    resizeMode: "cover",
  },
});
