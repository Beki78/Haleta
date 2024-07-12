import { View, Text, ScrollView, Image } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Logo from "../../assets/images/svg/logo.png";
import FormField from "../../components/FormField";
import Button from "../../components/Button";
import { Link, router } from "expo-router";
import "@expo/metro-runtime";

const signin = () => {
  return (
    <SafeAreaView className="h-full mx-6 ">
      <View className="min-h-[100vh] justify-center">
        <Image source={Logo} className="w-20 h-20" resizeMode="contain" />
        <Text className="text-2xl text-[#3E4958] font-bold my-4">
          Sign In to Haleta
        </Text>
        <FormField
          heading={"Phone"}
          placeholder={"Phone Number"}
          autoComplete={"tel"}
          phoneCode={"yes"}
          phoneFieldStyle={"flex flex-row justify-center items-center"}
        />
        <FormField
          heading={"Password"}
          placeholder={"Password"}
          autoComplete={""}
        />
        <Button
          title={"Sign In"}
          style={"mb-0"}
          handlePress={() => router.push("/home")}
        />
        <View className="justify-center gap-2  flex-row">
          <Text className="text-lg text-[#7b7b8b]">Don't have an account?</Text>
          <Link href="/signup" className="text-lg text-[#3E4958]">
            Sign Up
          </Link>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default signin;
