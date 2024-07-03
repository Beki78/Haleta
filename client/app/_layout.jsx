import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { Stack, router } from "expo-router";
import "@expo/metro-runtime";
import Logo from "../assets/images/svg/logo.png";

import FontAwesome from "@expo/vector-icons/FontAwesome";

const Button = () => {
  <TouchableOpacity>
    <FontAwesome name="user-circle-o" size={24} color="black" />
  </TouchableOpacity>;
};

function LogoTitle() {
  return <Image className="w-14 h-14 " source={Logo} />;
}

const RootLayout = () => {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="(auth)" options={{ headerShown: false }} />
      <Stack.Screen
        name="(tabs)"
        options={{
          headerBackVisible: false,
          headerTitle: (props) => <LogoTitle {...props} />,
          headerRight: () => (
            <View className="flex gap-4 flex-row">
              <TouchableOpacity>
                <FontAwesome name="bell-o" size={24} color="#72B4BE" />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => router.push("profile/UserProfile")}
              >
                <FontAwesome name="user-circle-o" size={24} color="#72B4BE" />
              </TouchableOpacity>
            </View>
          ),
        }}
      />
    </Stack>
  );
};

export default RootLayout;
