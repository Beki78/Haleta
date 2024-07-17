import {
  View,
  Text,
  TextInput,
  ScrollView,
  FlatList,
  Image,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import "@expo/metro-runtime";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Ionicons } from "@expo/vector-icons";
import Filter from "../../components/Filter";
import { Entypo } from "@expo/vector-icons";
import {router} from "expo-router"
import DATA from "../../lib/data"




const { width, height } = Dimensions.get("window");
const Item = ({ hospital, phone, money, image, handlePress }) => {
  return (
    <TouchableOpacity onPress={handlePress}
      activeOpacity={0.9}
      className="shadow-sm shadow-slate-200 bg-white m-1 flex-1 rounded-md "
    >
      <Image
        source={image}
        className="w-full h-52 rounded-t-md"
        resizeMode="cover"
      />
      <View className="">
        <View className="bg-green-500 w-2 h-2 rounded-full absolute right-3 top-2 animation"></View>
        <View className="p-2 py-4 pr-4 flex justify-start items-start ">
          <View className="flex flex-row  items-center">
            <Entypo name="location-pin" size={24} color="#72B4BE" />
            <Text
              numberOfLines={1}
              ellipsize={"tail"}
              className="ml-3 text-gray-600  "
            >
              {hospital}
            </Text>
          </View>
          <View className="flex flex-row items-center ">
            <FontAwesome name="phone" size={20} color="#72B4BE" />
            <Text className="ml-5  text-gray-600">{phone}</Text>
          </View>
          <View className="flex flex-row items-center ">
            <FontAwesome className="" name="money" size={18} color="#72B4BE" />
            <Text className="ml-4 text-gray-600">{money} ETB</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const Home = () => {
  return (
    <SafeAreaView className="mx-3">
      <View>
        <View className="flex flex-row gap-12 items-center">
          <View className="border-[1px]  border-[#72B4BE] flex-[10]  flex flex-row p-2 rounded-md">
            <FontAwesome
              name="search"
              size={24}
              color="#72B4BE"
              className="mx-3"
            />
            <TextInput className="flex-1 ml-3" placeholder="Search ambulance" />
          </View>
          <View className="flex-[]">
            <Ionicons name="options" size={35} color="#72B4BE" />
          </View>
        </View>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <Filter title="Near by" />
          <Filter title="All" />
          <Filter title="Available" />
        </ScrollView>
      </View>
      <FlatList
        data={DATA}
        numColumns={2}
        className="h-[86%]"
        renderItem={({ item }) => (
          <Item
            hospital={item.hospital}
            phone={item.phone}
            money={item.money}
            image={item.image}
            handlePress={() => router.push("detail/More")}
          />
        )}
        keyExtractor={(item) => item.id}
      />
    </SafeAreaView>
  );
};

export default Home;
