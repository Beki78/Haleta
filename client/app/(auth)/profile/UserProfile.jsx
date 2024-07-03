import { View, Text, Image } from "react-native";
import React from "react";
import Avatar from "../../../assets/images/svg/avatar.png";
import { Octicons } from "@expo/vector-icons";
import FontAwesome from "@expo/vector-icons/FontAwesome";

const UserProfile = () => {
  return (
    <>
      <Image
        source={Avatar}
        className="w-20 h-20 rounded-full mx-auto mt-20 relative"
        resizeMode="contain"
      />
      <Text className="text-center text-xl font-semibold">Amanuel</Text>
      <View className="mx-7 my-6 p-7  shadow-sm  shadow-slate-700 rounded-md">
        <View className="flex flex-row  gap-3">
          <FontAwesome name="phone" size={24} color="#72B4BE" />
          <Text>098765476</Text>
        </View>
        <View
          style={{
            borderBottomWidth: 1,
            borderColor: "#D5DDE0",
            marginVertical: 10,
          }}
        />
        <View className="flex flex-row gap-3 items-center">
          <FontAwesome name="phone" size={24} color="#72B4BE" />
          <Text>amanuel@gmail.com</Text>
        </View>
        <View
          style={{
            borderBottomWidth: 1,
            borderColor: "#D5DDE0",
            marginVertical: 10,
          }}
        />
      </View>
    </>
  );
};

export default UserProfile;
