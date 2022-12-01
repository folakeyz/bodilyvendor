import React from "react";
import { View } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { COLORS } from "../../screens/Auth/mocks";

const TabIcon = ({ focused, icon }) => {
  return (
    <View
      style={{
        alignItems: "center",
        justifyContent: "center",
        height: 80,
        width: 50,
      }}
    >
      <AntDesign
        name={icon}
        size={20}
        style={{
          color: focused ? COLORS.success : COLORS.lightGray,
        }}
      />
      {focused && (
        <View
          style={{
            position: "absolute",
            left: 0,
            right: 0,
            bottom: 0,
            height: 5,
            borderTopLeftRadius: 5,
            borderTopRightRadius: 5,
            backgroundColor: COLORS.success,
            top: 15,
          }}
        ></View>
      )}
    </View>
  );
};

export default TabIcon;
