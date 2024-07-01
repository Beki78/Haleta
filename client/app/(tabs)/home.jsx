import { View, Text, TextInput } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import "@expo/metro-runtime";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Ionicons } from "@expo/vector-icons";


const Home = () => {
  return (
    <SafeAreaView className="mx-8">
      <View>
        <View className="flex flex-row gap-12 items-center">
          <View className="border-[1px]  border-[#72B4BE] flex-[10]  flex flex-row p-2 rounded-md">
            <FontAwesome name="search" size={24} color="#72B4BE" className="mx-3"/>
            <TextInput className="flex-1 ml-3" placeholder="Search ambulance"/>
          </View>
          <View className="flex-[]">
            <Ionicons name="options" size={35} color="#72B4BE" />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Home;
