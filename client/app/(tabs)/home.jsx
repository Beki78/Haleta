import { View, Text, TextInput, ScrollView, FlatList, Image } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import "@expo/metro-runtime";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Ionicons } from "@expo/vector-icons";
import Filter from "../../components/Filter";
import { Entypo } from "@expo/vector-icons";
import Image1 from "../../assets/images/svg/jose-de-azpiazu-Fz4bjB8LdT4-unsplash.jpg"
import Image2 from "../../assets/images/svg/lalithmalhaar-gudi-T1C9zpFpky4-unsplash.jpg"
import Image3 from "../../assets/images/svg/mikita-yo-UC9s2TkvN1Y-unsplash.jpg"
import Image4 from "../../assets/images/svg/Modern_Green_Health_Care_Medical_Center_Logo-removebg-preview.png"

const DATA = [
  {
    id: 1,
    image: Image1,
    hospital: "Black Lion",
    phone: "0909890837",
    money: "234",
  },
  {
    id: 2,
    image: Image2,
    hospital: "Black Lion",
    phone: "0909890837",
    money: "234",
  },
  {
    id: 3,
    image: Image3,
    hospital: "Black Lion",
    phone: "0909890837",
    money: "234",
  },
  {
    id: 4,
    image: Image3,
    hospital: "Black Lion",
    phone: "0909890837",
    money: "234",
  },
  {
    id: 5,
    image: Image1,
    hospital: "Black Lion",
    phone: "0909890837",
    money: "234",
  },
  {
    id: 6,
    image: Image2,
    hospital: "Black Lion",
    phone: "0909890837",
    money: "234",
  },
  {
    id: 7,
    image: Image1,
    hospital: "Black Lion",
    phone: "0909890837",
    money: "234",
  },
];

const Item = ({hospital, phone, money, image}) => {
  return (
      <View >
        <Image
          source={image}
          style={{ width: 208, height: 208 }}
          resizeMode="contain"
        />
        <View>
          <View></View>
          <View>
            <Entypo name="location-pin" size={24} color="black" />
            <Text>{hospital}</Text>
          </View>
          <View>
            <FontAwesome name="phone" size={24} color="black" />
            <Text>{phone}</Text>
          </View>
          <View>
            <FontAwesome name="money" size={24} color="black" />
            <Text>{money} ETB</Text>
          </View>
        </View>
      </View>
  );
};

const Home = () => {
  return (
    <SafeAreaView className="mx-8">
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
        renderItem={({ item }) => (
          <Item
            hospital={item.hospital}
            phone={item.phone}
            money={item.money}
            image={item.image}
            className="bg-slate-300"
          />
        )}
        keyExtractor={(item) => item.id}
      />
    </SafeAreaView>
  );
};

export default Home;
