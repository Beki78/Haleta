import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { Tabs } from "expo-router";
import "@expo/metro-runtime";
import { FontAwesome } from "@expo/vector-icons";

const TabsLayout = () => {
  return (
    <Tabs screenOptions={{ tabBarActiveTintColor: "blue" }}>
      <Tabs.Screen
        name="home"
        options={{
          headerShown: false,
          tabBarIcon: () => (
            <FontAwesome name="home" size={24} color="#72B4BE" />
          ),
        }}
      />
      <Tabs.Screen
        name="history"
        options={{
          headerShown: false,
          tabBarIcon: () => (
            <FontAwesome name="history" size={24} color="#72B4BE" />
          ),
        }}
      />
      <Tabs.Screen
        name="setting"
        options={{
          headerShown: false,
          tabBarIcon: () => (
            <FontAwesome name="gear" size={24} color="#72B4BE" />
          ),
        }}
      />
    </Tabs>
  );
};

export default TabsLayout;
