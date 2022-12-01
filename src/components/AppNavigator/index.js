import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import TabIcon from "./TabIcon";
import Login from "../../screens/Auth/Login";
import ForgotPassword from "../../screens/Auth/ForgotPassword";
import Onboarding from "../../screens/Auth/Onboarding";
import Signup from "../../screens/Auth/Signup";
import Dashboard from "../../screens/Dashboard";
import Account from "../../screens/Account";
import Shop from "../../screens/Shop";
import Appointments from "../../screens/Appointments";
import AppointmentDetails from "../../screens/Appointments/Details";
import { Text } from "react-native";
import { COLORS } from "../../screens/Auth/mocks";
import Verification from "../../screens/Auth/Verification";

const Stack = createNativeStackNavigator();
const Tabs = createBottomTabNavigator();

export function AuthStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Welcome"
        component={Onboarding}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Login"
        component={Login}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Register"
        component={Signup}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Forgot Password"
        component={ForgotPassword}
        options={{ headerShown: false }}
      />
      {/* <Stack.Screen
        name="Verification"
        component={Verification}
        options={{ headerShown: false }}
      /> */}
    </Stack.Navigator>
  );
}

export function VerificationStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Verification"
        component={Verification}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}

export function TabStack() {
  return (
    <Tabs.Navigator
      screenOptions={{
        showLabel: true,
        style: {
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          elevation: 0,
          backgroundColor: "white",
          borderTopColor: "transparent",
          height: 70,
        },
      }}
    >
      <Tabs.Screen
        name="Home"
        component={Dashboard}
        options={{
          tabBarIcon: ({ focused }) => (
            <TabIcon focused={focused} icon="home" />
          ),
          headerShown: false,
          tabBarLabel: ({ focused, color, size }) => (
            <Text
              style={{ color: focused ? COLORS.success : color, fontSize: 10 }}
            >
              Home
            </Text>
          ),
        }}
      />
      <Tabs.Screen
        name="Appointments"
        component={Appointments}
        options={{
          tabBarIcon: ({ focused }) => (
            <TabIcon focused={focused} icon="clockcircleo" />
          ),
          headerShown: true,
          headerTitle: "",
          tabBarLabel: ({ focused, color, size }) => (
            <Text
              style={{ color: focused ? COLORS.success : color, fontSize: 10 }}
            >
              Appointments
            </Text>
          ),
        }}
      />
      <Tabs.Screen
        name="My Shop"
        component={Shop}
        options={{
          tabBarIcon: ({ focused }) => (
            <TabIcon focused={focused} icon="bank" />
          ),
          headerShown: false,
          tabBarLabel: ({ focused, color, size }) => (
            <Text
              style={{ color: focused ? COLORS.success : color, fontSize: 10 }}
            >
              My Shop
            </Text>
          ),
        }}
      />
      <Tabs.Screen
        name="Account"
        component={Account}
        options={{
          tabBarIcon: ({ focused }) => (
            <TabIcon focused={focused} icon="user" />
          ),
          headerShown: false,
          tabBarLabel: ({ focused, color, size }) => (
            <Text
              style={{ color: focused ? COLORS.success : color, fontSize: 10 }}
            >
              Account
            </Text>
          ),
        }}
      />
    </Tabs.Navigator>
  );
}

export function AuthenticatedStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={TabStack}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Appointment Details"
        component={AppointmentDetails}
        options={{
          headerShown: true,
          headerTitle: "",
          // headerTransparent: true,
        }}
      />
    </Stack.Navigator>
  );
}
