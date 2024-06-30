import { View, Text } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'
import "@expo/metro-runtime";


const _layout = () => {
  return (
    <Tabs screenOptions={{ tabBarActiveTintColor: "blue" }}>
      <Tabs.Screen
        name="home"
        options={{
          title: "Home",
          
        }}
      />
      <Tabs.Screen
        name="history"
        options={{
          
        }}
      />
      <Tabs.Screen
        name="setting"
        options={{
          
        }}
      />
    </Tabs>
  );
}

export default _layout