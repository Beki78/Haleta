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
import Image1 from "../../assets/images/svg/jose-de-azpiazu-Fz4bjB8LdT4-unsplash.jpg";
import Image2 from "../../assets/images/svg/lalithmalhaar-gudi-T1C9zpFpky4-unsplash.jpg";
import Image3 from "../../assets/images/svg/mikita-yo-UC9s2TkvN1Y-unsplash.jpg";

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
    hospital: "Kadisco General Hospital",
    phone: "0911223344",
    money: "300",
  },
  {
    id: 3,
    image: Image3,
    hospital: "Hamlin Fistula Hospital",
    phone: "0911334455",
    money: "320",
  },
  {
    id: 4,
    image: Image1,
    hospital: "St. Peter’s Specialized Hospital",
    phone: "0912445566",
    money: "280",
  },
  {
    id: 5,
    image: Image2,
    hospital: "Alert Hospital",
    phone: "0912556677",
    money: "290",
  },
  {
    id: 6,
    image: Image3,
    hospital: "Amin General Hospital",
    phone: "0912667788",
    money: "310",
  },
  {
    id: 7,
    image: Image1,
    hospital: "Addis General Hospital",
    phone: "0912778899",
    money: "270",
  },
  {
    id: 8,
    image: Image2,
    hospital: "Addis Hiwot General Hospital",
    phone: "0912889900",
    money: "260",
  },
  {
    id: 9,
    image: Image3,
    hospital: "Nordic Medical Centre",
    phone: "0912990011",
    money: "320",
  },
  {
    id: 10,
    image: Image1,
    hospital: "Anania Mothers & Children Specialized Medical Center",
    phone: "0913001122",
    money: "330",
  },
  {
    id: 11,
    image: Image2,
    hospital: "Betsegah Hospital",
    phone: "0913112233",
    money: "310",
  },
  {
    id: 12,
    image: Image3,
    hospital: "Landmark General Hospital",
    phone: "0913223344",
    money: "300",
  },
  {
    id: 13,
    image: Image1,
    hospital: "Menelik Hospital",
    phone: "0913334455",
    money: "270",
  },
  {
    id: 14,
    image: Image2,
    hospital: "Balcha Hospital",
    phone: "0913445566",
    money: "290",
  },
  {
    id: 15,
    image: Image3,
    hospital: "Ethio Tebib General Hospital",
    phone: "0913556677",
    money: "280",
  },
  {
    id: 16,
    image: Image1,
    hospital: "Girum Hospital",
    phone: "0913667788",
    money: "300",
  },
  {
    id: 17,
    image: Image2,
    hospital: "Alatyon Primary Hospital",
    phone: "0913778899",
    money: "310",
  },
  {
    id: 18,
    image: Image3,
    hospital: "Hayat Hospital",
    phone: "0913889900",
    money: "320",
  },
  {
    id: 19,
    image: Image1,
    hospital: "Hallelujah General Hospital",
    phone: "0913990011",
    money: "330",
  },
  {
    id: 20,
    image: Image2,
    hospital: "iCMC General Hospital",
    phone: "0914001122",
    money: "300",
  },
  {
    id: 21,
    image: Image3,
    hospital: "Myung Sung Christian Medical Center",
    phone: "0914112233",
    money: "310",
  },
  {
    id: 22,
    image: Image1,
    hospital: "Saint Gabriel General Hospital",
    phone: "0914223344",
    money: "320",
  },
  {
    id: 23,
    image: Image2,
    hospital: "St. Paul’s Hospital Millennium Medical College",
    phone: "0914334455",
    money: "290",
  },
  {
    id: 24,
    image: Image3,
    hospital: "American Medical Center",
    phone: "0914445566",
    money: "280",
  },
  {
    id: 25,
    image: Image1,
    hospital: "Tikur Anbessa Specialized Hospital (TASH)",
    phone: "0914556677",
    money: "310",
  },
  {
    id: 26,
    image: Image2,
    hospital: "Tirunesh Beijing General Hospital",
    phone: "0914667788",
    money: "320",
  },
  {
    id: 27,
    image: Image3,
    hospital: "TZNA General Hospital",
    phone: "0914778899",
    money: "300",
  },
  {
    id: 28,
    image: Image1,
    hospital: "Zewditu Memorial Hospital",
    phone: "0914889900",
    money: "310",
  },
  {
    id: 29,
    image: Image2,
    hospital: "Bethzatha General Hospital",
    phone: "0914990011",
    money: "330",
  },
  {
    id: 30,
    image: Image3,
    hospital: "International Clinical Laboratories – ICL",
    phone: "0915001122",
    money: "290",
  },
  {
    id: 31,
    image: Image1,
    hospital: "Pioneer Diagnostic Center",
    phone: "0915112233",
    money: "280",
  },
  {
    id: 32,
    image: Image2,
    hospital: "Washington Medical Center Addis Ababa",
    phone: "0915223344",
    money: "300",
  },
];


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
            handlePress={() => router.push("detail/more")}
          />
        )}
        keyExtractor={(item) => item.id}
      />
    </SafeAreaView>
  );
};

export default Home;
