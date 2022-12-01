import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import { COLORS } from "../../screens/Auth/mocks";

const Card = ({ item, onPress }) => {
  const generateColor = (status) => {
    switch (status) {
      case "Approved":
        return COLORS.success;
      case "Declined":
        return COLORS.danger;
      case "Pending":
        return COLORS.blue;
    }
    return COLORS.blue;
  };

  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <View style={styles.text}>
        <Text>{item?.name}</Text>
        <View style={styles.textContainer}>
          <Text style={{ fontSize: 13, color: COLORS.success }}>Services:</Text>
          <Text>{item?.service}</Text>
        </View>
        <Text style={{ fontSize: 11 }}>{item?.time}</Text>
      </View>
      <View style={styles.indicatorContainer}>
        <View
          style={[
            styles.indicator,
            { backgroundColor: generateColor(item?.status) },
          ]}
        />
      </View>
    </TouchableOpacity>
  );
};

export default Card;

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    justifyContent: "space-between",
    //elevation: 2,
    backgroundColor: "white",
    // shadowColor: "whitesmoke",
    // shadowOffset: { width: 0, height: 1 },
    // shadowOpacity: 0.2,
    // shadowRadius: 2,
    marginBottom: 5,
    padding: 10,
    paddingVertical: 20,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "whitesmoke",
  },
  text: {
    flexDirection: "column",
  },
  textContainer: {
    flexDirection: "row",
  },
  indicatorContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
  indicator: {
    width: 10,
    height: 10,
    borderRadius: 10,
    backgroundColor: COLORS.success,
  },
});
