import { View, Text } from "react-native";
import React from "react";
import { Stack } from "expo-router";
import "@expo/metro-runtime";

const MoreLayout = () => {
  return (
    <Stack>
      <Stack.Screen name="More" options={{ headerShown: false }} />
    </Stack>
  );
};

export default MoreLayout;
