import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";
import React, { useEffect, useRef, useState } from "react";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Ionicons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";
import Button from "../../components/Button";
import ActionSheet from "../../components/ActionSheet";
import RBSheet from "react-native-raw-bottom-sheet";
import { useRouter, useLocalSearchParams } from "expo-router";

const INITIAL_REGION = {
  latitude: 8.99561,
  longitude: 38.8140149,
  latitudeDelta: 0,
  longitudeDelta: 0.001,
  
};

const More = () => {
  const bottomSheetRef = useRef();
  const { item } = useLocalSearchParams();
  const parsedItem = JSON.parse(item);
  const [region, setRegion] = useState(INITIAL_REGION);
  const [parsedItems, setParsedItems] = useState(null);

  useEffect(() => {
    if (item) {
      const parsed = JSON.parse(item);
      setParsedItems(parsed);

      setRegion({
        latitude: parsed.latitude || INITIAL_REGION.latitude,
        longitude: parsed.longitude || INITIAL_REGION.longitude,
        latitudeDelta: INITIAL_REGION.latitudeDelta,
        longitudeDelta: INITIAL_REGION.longitudeDelta,
      });
    }
  }, [item]);

  const openModal = () => {
    bottomSheetRef.current?.expand();
  };

  return (
    <>
      <MapView
        style={{ flex: 1 }}
        provider={PROVIDER_GOOGLE}
        region={region}
        showsUserLocation
        showsMyLocationButton
      >
        <Marker
          coordinate={{
            latitude: parsedItem.latitude || INITIAL_REGION.latitude,
            longitude: parsedItem.longitude || INITIAL_REGION.longitude,
          }}
          title={parsedItem.hospital}
          description={`Phone: ${parsedItem.phone}, Cost: ${parsedItem.money} ETB`}
        />
      </MapView>
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
