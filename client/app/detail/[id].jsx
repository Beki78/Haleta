import { View, Text, Image } from "react-native";
import React, { useEffect, useRef, useState } from "react";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Entypo } from "@expo/vector-icons";
import Button from "../../components/Button";
import ActionSheet from "../../components/ActionSheet";
import { useRouter, useLocalSearchParams } from "expo-router";
import Doctor  from "../../assets/images/svg/undraw_medicine_b-1-ol.png"



const More = () => {
  const bottomSheetRef = useRef();
  const { item } = useLocalSearchParams();
  const parsedItem = JSON.parse(item);


 

  const openModal = () => {
    bottomSheetRef.current?.expand();
  };

  return (
    <>
      <Image source={Doctor} className="w-96 h-40 mt-4  flex-1 justify-center items-center"/>
      <View>
        <View className="flex flex-row gap-4 ml-4 mt-10">
          <FontAwesome name="phone" size={32} color="#72B4BE" />
          <Text className="text-lg">{parsedItem.phone}</Text>
        </View>
        <View
          style={{
            borderBottomWidth: 1,
            borderColor: "#D5DDE0",
            marginVertical: 10,
          }}
        />
        <View className="flex flex-row gap-4 ml-4 mt-4">
          <Entypo name="location-pin" size={37} color="#72B4BE" />
          <Text
            className="text-lg flex-1 flex-shrink"
            style={{ flexShrink: 1 }}
          >
            {parsedItem.hospital}
          </Text>
        </View>

        <View
          style={{
            borderBottomWidth: 1,
            borderColor: "#D5DDE0",
            marginVertical: 10,
          }}
        />
        <View className="flex flex-row gap-4 ml-4 mt-4">
          <FontAwesome className="" name="money" size={29} color="#72B4BE" />
          <Text className="text-lg">{parsedItem.money} ETB</Text>
        </View>
      </View>

      <Button title={"Book Now"} handlePress={openModal} />
      <ActionSheet bottomSheetRef={bottomSheetRef} />
    </>
  );
};

export default More;
