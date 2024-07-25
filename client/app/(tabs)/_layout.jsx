import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { FontAwesome } from "@expo/vector-icons";
import HomeScreen from "./home";
import HistoryScreen from "./history";
import NewsScreen from "./News";
import ProfileScreen from "./profile"; 

const BottomTab = createBottomTabNavigator();

const TabsLayout = () => {
  return (
    <BottomTab.Navigator
      screenOptions={{
        tabBarActiveTintColor: "#000",
        tabBarActiveBackgroundColor: "#f4fffe",
        tabBarLabelStyle: { fontSize: 13 },
      }}
    >
      <BottomTab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerShown: false,
          title: "Home",
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="home" size={30} color="#72B4BE" />
          ),
        }}
      />
      <BottomTab.Screen
        name="History"
        component={HistoryScreen}
        options={{
          headerShown: false,
          title: "History",
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="history" size={24} color="#72B4BE" />
          ),
        }}
      />
      <BottomTab.Screen
        name="News"
        component={NewsScreen}
        options={{
          tabBarBadge: "9+",
          tabBarBadgeStyle: { backgroundColor: "red", fontSize: 9 },
          headerShown: false,
          title: "News",
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="newspaper-o" size={24} color="#72B4BE" />
          ),
        }}
      />
      <BottomTab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          headerShown: false,
          title: "Profile",
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="user-circle-o" size={24} color="#72B4BE" />
          ),
        }}
      />
    </BottomTab.Navigator>
  );
};

export default TabsLayout;
