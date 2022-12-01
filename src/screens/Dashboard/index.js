import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  Dimensions,
  StatusBar,
} from "react-native";
import React, { useRef } from "react";
import { getStoredUser } from "../../storage";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { appointment, cardSlides, COLORS } from "../Auth/mocks";
import { useUser } from "../../auth/useUser";
import { baseImageUrl } from "../../axiosInstance/constants";
import { EvilIcons, MaterialIcons, AntDesign } from "@expo/vector-icons";
import { Avatar, Slider, Card } from "../../components";
import { avatar } from "../../components/Avatar";

const { width, height } = Dimensions.get("window");

const Dashboard = ({ navigation }) => {
  const [currentSlideIndex, setCurrentSlideIndex] = React.useState(0);
  const ref = useRef();
  const { user } = useUser();

  const userInfo = typeof user === "string" ? JSON.parse(user) : user;

  const updateCurrentSlideIndex = (e) => {
    const contentOffsetX = e.nativeEvent.contentOffset.x;
    const currentIndex = Math.round(contentOffsetX / width);
    setCurrentSlideIndex(currentIndex);
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
      <View style={styles.container}>
        <View style={styles.profile}>
          {userInfo?.user?.photo ? (
            <Image source={`${baseImageUrl}/userInfo?.user?.photo`} />
          ) : (
            avatar(userInfo?.user?.gender)
          )}
          <Text style={styles.title}>Hello {userInfo?.user?.firstname}!</Text>
        </View>
        {/* <ScrollView> */}
        <View style={styles.cardContainer}>
          <FlatList
            ref={ref}
            onMomentumScrollEnd={updateCurrentSlideIndex}
            contentContainerStyle={{
              height: Platform.OS === "ios" ? height * 0.18 : height * 0.23,
            }}
            showsHorizontalScrollIndicator={false}
            horizontal
            data={cardSlides}
            pagingEnabled
            renderItem={({ item }) => <Slider item={item} />}
          />
          <View style={styles.indicatorContainer}>
            {cardSlides.map((_, index) => (
              <View
                key={index}
                style={[
                  styles.indicator,
                  currentSlideIndex == index && {
                    backgroundColor: COLORS.green,
                    width: 8,
                    height: 8,
                  },
                ]}
              />
            ))}
          </View>
        </View>

        <View style={[styles.cardContainer, { flex: 1 }]}>
          <FlatList
            showsVerticalScrollIndicator={false}
            vertical
            keyExtractor={(item) => `${item.id}`}
            keyboardDismissMode="on-drag"
            data={appointment}
            ListHeaderComponent={
              <View>
                {userInfo ? (
                  <View
                    style={[
                      styles.status,
                      { backgroundColor: COLORS.lightBlue },
                    ]}
                  >
                    <Text>Registration is pending....</Text>
                  </View>
                ) : (
                  <View
                    style={[styles.status, { backgroundColor: COLORS.success }]}
                  >
                    <Text style={{ color: COLORS.white }}>
                      Registration approved
                    </Text>
                    <AntDesign name="checkcircle" size={24} color="white" />
                  </View>
                )}
                <View style={[styles.statusSM]}>
                  <Text>Recent Appointments</Text>
                  <Text style={styles.link}>History</Text>
                </View>
              </View>
            }
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
        {/* </ScrollView> */}
      </View>
    </SafeAreaView>
  );
};

export default Dashboard;

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
  search: {
    flexDirection: "row",
    alignItems: "center",
    height: 50,
    borderWidth: 1,
    borderColor: COLORS.gray,
    borderRadius: 50,
    padding: 5,
    paddingHorizontal: 15,
    justifyContent: "space-between",
  },
  cardContainer: {
    marginBottom: 20,
  },
  indicatorContainer: {
    flexDirection: "row",
    justifyContent: "center",
  },
  indicator: {
    height: 5,
    width: 5,
    backgroundColor: "grey",
    marginHorizontal: 3,
    borderRadius: 5,
  },
  status: {
    flexDirection: "row",
    padding: 10,
    height: 50,
    paddingHorizontal: 15,
    borderRadius: 10,
    justifyContent: "space-between",
    marginBottom: 5,
    alignItems: "center",
  },
  statusSM: {
    flexDirection: "row",
    padding: 10,
    height: 40,
    paddingHorizontal: 15,
    borderRadius: 10,
    justifyContent: "space-between",
    marginBottom: 5,
    alignItems: "center",
    elevation: 1,
    backgroundColor: "white",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
  link: {
    fontSize: 11,
    color: COLORS.blue,
  },
});
