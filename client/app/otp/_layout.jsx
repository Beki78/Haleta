import { View, Text } from "react-native";
import React from "react";
import { Stack } from "expo-router";
import "@expo/metro-runtime";

const OtpLayout = () => {
  return (
    <Stack>
      <Stack.Screen name="Otp" options={{ headerShown: false }} />
    </Stack>
  );
};

export default OtpLayout;
