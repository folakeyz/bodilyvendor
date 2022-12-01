import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  FlatList,
} from "react-native";
import React from "react";
import { appointment, COLORS } from "../../Auth/mocks";
import { Card } from "../../../components";

const AppointmentDetails = ({ navigation, route }) => {
  const [selectedAppt, setSelectedAppt] = React.useState("");

  React.useEffect(() => {
    let { appointment } = route.params;
    setSelectedAppt(appointment);
  }, []);
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
      <View style={styles.container}>
        <View style={styles.details}>
          <View style={styles.textContainer}>
            <Text style={styles.title}>Name</Text>
            <Text>{selectedAppt?.name}</Text>
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.title}>Services</Text>
            <Text>{selectedAppt?.service}</Text>
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.title}>Appointment Data / Time</Text>
            <Text>{selectedAppt?.time}</Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default AppointmentDetails;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "whitesmoke",
    padding: 30,
    paddingTop: 50,
    flex: 1,
  },

  details: {
    padding: 20,
    borderRadius: 20,
    backgroundColor: COLORS.white,
  },
  textContainer: {
    marginBottom: 15,
  },
  title: {
    fontSize: 11,
    color: COLORS.gray,
  },
});
