import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  FlatList,
  useWindowDimensions,
} from "react-native";
import React from "react";
import { appointment, COLORS } from "../Auth/mocks";
import { Card } from "../../components";
import { TabView, SceneMap, TabBar } from "react-native-tab-view";
import { useNavigation } from "@react-navigation/native";

const FirstRoute = () => {
  const navigation = useNavigation();
  return (
    <View style={[styles.cardContainer, { flex: 1 }]}>
      <FlatList
        showsVerticalScrollIndicator={false}
        vertical
        data={appointment}
        renderItem={({ item }) => (
          <Card
            item={item}
            onPress={() =>
              navigation.navigate("Appointment Details", {
                appointment: item,
              })
            }
          />
        )}
      />
    </View>
  );
};

const SecondRoute = () => {
  const navigation = useNavigation();
  return (
    <View style={[styles.cardContainer, { flex: 1 }]}>
      <FlatList
        showsVerticalScrollIndicator={false}
        vertical
        data={appointment}
        renderItem={({ item }) => (
          <Card
            item={item}
            onPress={() =>
              navigation.navigate("Appointment Details", {
                appointment: item,
              })
            }
          />
        )}
      />
    </View>
  );
};

const ThirdRoute = () => {
  const navigation = useNavigation();
  return (
    <View style={[styles.cardContainer, { flex: 1 }]}>
      <FlatList
        showsVerticalScrollIndicator={false}
        vertical
        data={appointment}
        renderItem={({ item }) => (
          <Card
            item={item}
            onPress={() =>
              navigation.navigate("Appointment Details", {
                appointment: item,
              })
            }
          />
        )}
      />
    </View>
  );
};

const renderScene = SceneMap({
  first: FirstRoute,
  second: SecondRoute,
  third: ThirdRoute,
});

const Appointments = ({ navigation }) => {
  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: "first", title: "Pending" },
    { key: "second", title: "Completed" },
    { key: "third", title: "Terminated" },
  ]);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
      <TabView
        navigationState={{ index, routes }}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={{ width: layout.width }}
        renderTabBar={(props) => (
          <TabBar
            {...props}
            renderLabel={({ route, color }) => (
              <Text style={{ color: "black", margin: 8 }}>{route.title}</Text>
            )}
            style={{ backgroundColor: COLORS.white }}
            indicatorStyle={{
              backgroundColor: COLORS.blue,
            }}
          />
        )}
      />
    </SafeAreaView>
  );
};

export default Appointments;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "whitesmoke",
    padding: 30,
    paddingTop: 50,
    flex: 1,
  },
  menu: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: COLORS.white,
    height: 50,
    alignItems: "center",
    borderRadius: 50,
    overflow: "hidden",
  },
  menubar: {
    height: 45,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 20,
  },
  active: {
    height: 45,
    alignItems: "center",
    backgroundColor: COLORS.blue,
    justifyContent: "center",
    paddingHorizontal: 10,
    borderRadius: 50,
    paddingHorizontal: 20,
  },
  cardContainer: {
    marginBottom: 20,
    paddingTop: 10,
    paddingHorizontal: 20,
  },
});
