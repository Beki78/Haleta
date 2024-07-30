import { View, Text, Image, Alert } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Logo from "../../assets/images/svg/logo.png";
import FormField from "../../components/FormField";
import Button from "../../components/Button";
import { Link, router } from "expo-router";
import "@expo/metro-runtime";

const superAdminPhone = "912345678";
const superAdminPassword = "haleta";

const Signin = () => {
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [isPasswordVisible, setPasswordVisible] = useState(false);

  const handleSignIn = () => {
    if (phone === superAdminPhone && password === superAdminPassword) {
      router.push("/home");
      setPhone(""); // Clear the phone input
      setPassword(""); // Clear the password input
    } else {
      Alert.alert("Error", "Invalid phone number or password");
    }
  };

  return (
    <SafeAreaView className="h-full mx-6">
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
          value={phone}
          state={setPhone}
        />
        <FormField
          heading={"Password"}
          placeholder={"Password"}
          autoComplete={""}
          secureTextEntry={!isPasswordVisible}
          value={password}
          state={setPassword}
          onEyePress={() => setPasswordVisible((prev) => !prev)}
        />
        <Button title={"Sign In"} style={"mb-0"} handlePress={handleSignIn} />
        <View className="justify-center gap-2 flex-row">
          <Text className="text-lg text-[#7b7b8b]">Don't have an account?</Text>
          <Link href="/signup" className="text-lg text-[#3E4958]">
            Sign Up
          </Link>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Signin;
