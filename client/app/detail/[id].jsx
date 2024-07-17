import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";
import React, { useRef, useState } from "react";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Ionicons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import MapView, { PROVIDER_GOOGLE } from "react-native-maps";
import Button from "../../components/Button";
import ActionSheet from "../../components/ActionSheet";
import RBSheet from "react-native-raw-bottom-sheet";
import { useRouter, useLocalSearchParams } from "expo-router";

const INITIAL_REGION = {
  latitude: 9.0088,
  longitude: 38.7666,
  latitudeDelta: 0.0922,
  longitudeDelta: 0.0421,
};

const More = () => {
  const bottomSheetRef = useRef();
  const { item } = useLocalSearchParams();
  const parsedItem = JSON.parse(item);
  const [region, setRegion] = useState(INITIAL_REGION);

  const openModal = () => {
    bottomSheetRef.current?.expand();
  };

  return (
    <>
      <MapView className="h-80" provider={PROVIDER_GOOGLE} region={region} />
      <View>
        <View className="flex flex-row gap-4 ml-4 mt-4">
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
          <Text className="text-lg">{parsedItem.hospital}</Text>
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
