import React, { useEffect, useState } from "react";
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
import { SafeAreaView } from "react-native-safe-area-context";
import { FontAwesome, Ionicons, Entypo } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import DATA from "../../lib/data";
import * as Location from "expo-location";
import Filter from "../../components/Filter";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { NavigationContainer } from "@react-navigation/native";
import NEMT from "./toptabs/Nonemergency"


const { width } = Dimensions.get("window");

const Item = ({ hospital, phone, money, image, handlePress }) => {
  return (
    <TouchableOpacity
      onPress={handlePress}
      activeOpacity={0.5}
      style={{
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        backgroundColor: "#fff",
        margin: 8,
        flex: 1,
        borderRadius: 8,
        overflow: "hidden",
      }}
    >
      <Image
        source={image}
        style={{
          width: "100%",
          height: 150,
          borderTopLeftRadius: 8,
          borderTopRightRadius: 8,
        }}
        resizeMode="cover"
      />
      <View style={{ padding: 10 }}>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Entypo name="location-pin" size={24} color="#72B4BE" />
          <Text numberOfLines={1} style={{ paddingRight: 10, color: "#666" }}>
            {hospital}
          </Text>
        </View>
        <View
          style={{ flexDirection: "row", alignItems: "center", marginTop: 5 }}
        >
          <FontAwesome name="phone" size={20} color="#72B4BE" />
          <Text style={{ marginLeft: 10, color: "#666" }}>{phone}</Text>
        </View>
        <View
          style={{ flexDirection: "row", alignItems: "center", marginTop: 5 }}
        >
          <FontAwesome name="money" size={18} color="#72B4BE" />
          <Text style={{ marginLeft: 10, color: "#666" }}>{money} ETB</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const HomeScreen = () => {
  const router = useRouter();
  const [filteredData, setFilteredData] = useState(DATA);
  const [isNearbyActive, setIsNearbyActive] = useState(false);
  const [isButtonActive, setIsButtonActive] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  

  useEffect(() => {
    if (searchQuery === "") {
      setFilteredData(DATA);
    } else {
      const filtered = DATA.filter((item) =>
        item.hospital.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilteredData(filtered);
    }
  }, [searchQuery]);

  const handlePress = (item) => {
    router.push({
      pathname: `/detail/More`,
      params: { item: JSON.stringify(item) },
    });
  };

  const lowcostHandle = () => {
    const filteredAndSorted = DATA.filter((item) => item.money < 2000).sort(
      (a, b) => parseInt(a.money, 10) - parseInt(b.money, 10)
    );
    setFilteredData(filteredAndSorted);
    setIsNearbyActive(true);
    setIsButtonActive("Low Cost");
  };

  const nearByHandle = () => {
    setIsButtonActive("Near by");
  };

  const allHandle = () => {
    setFilteredData(DATA);
    setIsNearbyActive(false);
    setIsButtonActive("All");
  };

  const renderItem = ({ item }) => {
    if (item.placeholder) {
      return <View style={{ flex: 1, margin: 8 }} />;
    }

    return (
      <Item
        hospital={item.hospital}
        phone={item.phone}
        money={item.money}
        image={item.image}
        handlePress={() => handlePress(item)}  
      />
    );
  };

  const dataToRender = [...filteredData];
  if (dataToRender.length % 2 !== 0) {
    dataToRender.push({ id: "placeholder", placeholder: true });
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ paddingHorizontal: 12 }}>
        <Text
          style={{
            
              fontSize: 24, 
              fontWeight: "bold",
              color: "#3E4958", 
              marginBottom:12
          }}
        >
          Welcome back, Amanuel!
        </Text>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginBottom: 12,
          }}
        >
          <View
            style={{
              borderColor: "#72B4BE",
              borderWidth: 1,
              flex: 1,
              flexDirection: "row",
              padding: 8,
              borderRadius: 8,
            }}
          >
            <FontAwesome
              name="search"
              size={24}
              color="#72B4BE"
              style={{ marginRight: 10 }}
            />
            <TextInput
              style={{ flex: 1 }}
              placeholder="Search ambulance"
              value={searchQuery}
              onChangeText={setSearchQuery}
            />
          </View>
        </View>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <Filter
            title="All"
            buttonHandle={allHandle}
            activeStyle={isButtonActive === "All"}
          />
          <Filter
            title="Low Cost"
            buttonHandle={lowcostHandle}
            activeStyle={isButtonActive === "Low Cost"}
          />
          {/* <Filter
            title="Near by"
            buttonHandle={nearByHandle}
            activeStyle={isButtonActive === "Near by"}
          /> */}
        </ScrollView>
      </View>
      <FlatList
        data={dataToRender}
        numColumns={2}
        contentContainerStyle={{ paddingBottom: 100 }}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
      />
    </SafeAreaView>
  );
};

const Tab = createMaterialTopTabNavigator();
const HomeTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarIndicatorStyle: { backgroundColor: "#77B4BE" }, 
      }}
    >
      <Tab.Screen name="Emergency" component={HomeScreen} />
      <Tab.Screen name="NEMT" component={NEMT} />
    </Tab.Navigator>
  );
};

export default HomeTabs;
