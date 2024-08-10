import { View, Text, Image } from "react-native";
import React from "react";
import Avatar from "../../assets/images/svg/avatar.png";
import { Entypo, Octicons } from "@expo/vector-icons";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

const Profile = () => {
  return (
    <>
      <Image
        source={Avatar}
        className="w-20 h-20 rounded-full mx-auto mt-20 relative"
        resizeMode="contain"
      />
      <Text className="text-center text-xl font-semibold">Amanuel</Text>
      <View className="mx-7 my-6 p-7 bg-white shadow-sm shadow-slate-300 rounded-md">
        {/* Phone Number */}
        <View className="flex flex-row gap-3 items-center">
          <FontAwesome name="phone" size={24} color="#ff914d" />
          <Text>0912345678</Text>
        </View>
        <View
          style={{
            borderBottomWidth: 1,
            borderColor: "#D5DDE0",
            marginVertical: 10,
          }}
        />

        {/* Address */}
        <View className="flex flex-row gap-3 items-center">
          <FontAwesome name="address-book" size={24} color="#ff914d" />
          <Text>Addis Ababa, Et</Text>
        </View>
        <View
          style={{
            borderBottomWidth: 1,
            borderColor: "#D5DDE0",
            marginVertical: 10,
          }}
        />

        {/* Medical History */}
        <View className="flex flex-row gap-3 items-center">
          <Octicons name="heart" size={24} color="#ff914d" />
          <Text>Medical History: No known conditions</Text>
        </View>
        <View
          style={{
            borderBottomWidth: 1,
            borderColor: "#D5DDE0",
            marginVertical: 10,
          }}
        />
        {/* Emergency Contact */}
        <View className="flex flex-row gap-3 items-center">
          <MaterialIcons name="contact-emergency" size={26} color="#ff914d" />
          <Text>Emergency Contact: 0912345679</Text>
        </View>
        <View
          style={{
            borderBottomWidth: 1,
            borderColor: "#D5DDE0",
            marginVertical: 10,
          }}
        />

        {/* Insurance Information */}
        <View className="flex flex-row gap-3 items-center">
          <FontAwesome name="shield" size={24} color="#ff914d" />
          <Text>Insurance: ABC Health Insurance</Text>
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

export default Profile;
