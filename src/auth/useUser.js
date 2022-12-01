import { axiosInstance, getJWTHeader } from "../axiosInstance";
import { queryKeys } from "../react-query/constants";
import { clearStoredUser, getStoredUser, setStoredUser } from "../storage";
import { useQueryClient, useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../context";
import { useNavigation } from "@react-navigation/native";

async function getUser(user) {
  console.log("get user loading", user);
  if (!user) return null;
  const { data } = await axiosInstance.get(`/auth/me`, {
    headers: getJWTHeader(user.token),
  });
  console.log("data");
  return data;
}

export function useUser() {
  const authCtx = useContext(AuthContext);

  const queryClient = useQueryClient();
  // TODO: call useQuery to update user data from server
  const { data: user } = useQuery({
    queryKey: [queryKeys.user],
    queryFn: () => getUser(user),
    initialData: authCtx.user,
    onSuccess: (received) => {
      if (!received) {
        clearStoredUser();
      } else {
        setStoredUser(received);
      }
    },
  });

  // meant to be called from useAuth
  function updateUser(newUser) {
    // console.log("auth", newUser);
    queryClient.setQueryData([queryKeys.user], newUser);
  }

  // meant to be called from useAuth
  function pendingVerification(newUser) {
    // console.log("auth", newUser);
    console.log(newUser, "verification");
    queryClient.setQueryData([queryKeys.verification], newUser);
  }

  // meant to be called from useAuth
  function clearUser() {
    queryClient.setQueryData([queryKeys.user], null);
  }

  return { user, updateUser, pendingVerification, clearUser };
}
