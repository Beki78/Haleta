import {
  View,
  Text,
  TouchableOpacity,
  Image,
  FlatList,
  Dimensions,
} from "react-native";
import React, { useRef, useState } from "react";
import { Link, router } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import Logo from "../assets/images/svg/undraw_reminders_re_gtyb.png";
import Logo1 from "../assets/images/svg/undraw_booking_re_gw4j.png";
import Logo2 from "../assets/images/svg/undraw_my_location_re_r52x.png";
import Button from "../components/Button"
import "@expo/metro-runtime";

const onboardingData = [
  {
    id: 1,
    title: "Track Ambulances in Real-Time",
    description:
      "With our app, you can track the location of your ambulance in real-time and stay updated on its arrival.",
    image: Logo2,
  },
  {
    id: 2,
    title: "Easy Ambulance Booking",
    description:
      "Book an ambulance with just a few taps and get immediate assistance in case of emergencies.",
    image: Logo1,
  },
  {
    id: 3,
    title: "Manage Subscriptions and Alerts",
    description:
      "Keep track of your subscription status and receive timely alerts for renewals and updates.",
    image: Logo,
  },
];

const { width, height } = Dimensions.get("window");
const Slide = ({ item }) => {
  return (
    <View className=" h-[70vh] flex justify-center ">
      <Image
        source={item.image}
        resizeMode="contain"
        className=""
        style={{ width, height: "35%" }}
      />
      <Text className="text-[#3E4958] text-center font-bold text-xl mt-7">
        {item.title}
      </Text>
      <Text className="text-[#3E4958] text-center px-4" style={{ width }}>
        {item.description}
      </Text>
    </View>
  );
};

const Footer = ({ currentIndex }) => {
  return (
    <View
      style={{
        justifyContent: "space-between",
        paddingHorizontal: 20,
      }}
    >
      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
        }}
      >
        {onboardingData.map((data, index) => (
          <View
            key={data.id}
            className={`p-1 rounded-full ml-2 ${
              currentIndex === index ? "bg-[#72B4BE]" : "bg-[#3E4958]"
            }`}
          />
        ))}
      </View>
    </View>
  );
};

const Main = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const flatListRef = useRef(null);

  const onViewableItemsChanged = useRef(({ viewableItems }) => {
    if (viewableItems.length > 0) {
      setCurrentIndex(viewableItems[0].index);
    }
  }).current;

  return (
    <SafeAreaView className="h-[98%]">
      <TouchableOpacity
        className="items-end p-7"
        onPress={() => {
          setCurrentIndex(onboardingData.length - 1);
          flatListRef.current.scrollToIndex({
            index: onboardingData.length - 1,
          });
        }}
      >
        <Text className="text-[#3E4958]">Skip</Text>
      </TouchableOpacity>
      <FlatList
        ref={flatListRef}
        className=""
        data={onboardingData}
        showsHorizontalScrollIndicator={false}
        horizontal
        pagingEnabled
        renderItem={({ item }) => <Slide item={item} />}
        onViewableItemsChanged={onViewableItemsChanged}
        viewabilityConfig={{ viewAreaCoveragePercentThreshold: 50 }}
      />
      <Footer currentIndex={currentIndex} />
      <Button
        title={"Continue"}
        style={"mb-32"}
        handlePress={() => router.push("signin")}
      />
    </SafeAreaView>
  );
};

export default Main;
