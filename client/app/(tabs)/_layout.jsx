import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { Tabs } from "expo-router";
import "@expo/metro-runtime";
import { FontAwesome } from "@expo/vector-icons";

const TabsLayout = () => {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "#000",
        tabBarLabelStyle: { fontSize: 13 },
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          headerShown: false,
          title: "Home",
          tabBarIcon: () => (
            <FontAwesome name="home" size={30} color="#72B4BE" />
          ),
        }}
      />
      <Tabs.Screen
        name="history"
        options={{
          headerShown: false,
          title: "History",
          tabBarIcon: () => (
            <FontAwesome name="history" size={24} color="#72B4BE" />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          headerShown: false,
          title: "Profile",
          tabBarIcon: () => (
            <FontAwesome name="user-circle-o" size={24} color="#72B4BE" />
          ),
        }}
      />
    </Tabs>
  );
};

export default TabsLayout;
