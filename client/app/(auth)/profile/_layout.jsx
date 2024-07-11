import { View, Text } from "react-native";
import React from "react";
import { Stack } from "expo-router";
import "@expo/metro-runtime";

const ProfileLayout = () => {
  return (
    <Stack>
      <Stack.Screen name="UserProfile" options={{ headerShown: false }} />
    </Stack>
  );
};

export default ProfileLayout;
