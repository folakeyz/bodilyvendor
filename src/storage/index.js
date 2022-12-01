import AsyncStorage from "@react-native-async-storage/async-storage";
const USER_KEY = "user";

// helper to get user from localstorage
export async function getStoredUser() {
  const storedUser = await AsyncStorage.getItem(USER_KEY);
  return storedUser ? JSON.parse(storedUser) : null;
}

export function setStoredUser(user) {
  AsyncStorage.setItem(USER_KEY, JSON.stringify(user));
}

export async function clearStoredUser() {
  AsyncStorage.removeItem(USER_KEY);
}
