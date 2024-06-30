import { View, Text } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'
import "@expo/metro-runtime"

const _layout = () => {
  return (
    <Stack>
      <Stack.Screen name="signin" options={{ headerShown: false }} />
      <Stack.Screen name="signup" options={{ headerShown: false }} />
    </Stack>
  );
}

export default _layout