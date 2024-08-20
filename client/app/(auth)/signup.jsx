import { View, Text, Image, StatusBar, Alert } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Logo from "../../assets/images/svg/logo.png";
import FormField from "../../components/FormField";
import Button from "../../components/Button";
import { Link, router } from "expo-router";
import { createUser } from "../../lib/appwrite"; // Import the function

const Signup = () => {
  const [userPhone, setUserPhone] = useState("");
  const [password, setPassword] = useState("");

  const handlePhoneChange = (value) => {
    setUserPhone(value);
  };

  const handlePasswordChange = (value) => {
    setPassword(value);
  };

  const handleSubmit = async () => {
    try {
      await createUser(userPhone, password);
      // Redirect to SignIn page after successful signup
      router.push("/otp");
    } catch (error) {
      Alert.alert("Error", "Failed to create user. Please try again.");
    }
  };

  return (
    <SafeAreaView className="h-full mx-6">
      <View className="min-h-[100vh] justify-center">
        <Image source={Logo} className="w-20 h-20" resizeMode="contain" />
        <Text className="text-2xl text-[#3E4958] font-bold my-4">
          Sign Up to Haleta
        </Text>
        <FormField
          heading={"Name"}
          placeholder={"Full Name"}
          autoComplete={"name"}
        />
        <FormField
          heading={"Phone"}
          placeholder={"Phone Number"}
          autoComplete={"tel"}
          phoneCode={"yes"}
          phoneFieldStyle={"flex flex-row justify-center items-center"}
          state={handlePhoneChange}
          value={userPhone}
        />
        <FormField
          heading={"Password"}
          placeholder={"Password"}
          autoComplete={""}
          secureTextEntry={true}
          state={handlePasswordChange}
          value={password}
        />
        <Button title={"Sign Up"} style={"mb-0"} handlePress={handleSubmit} />
        <View className="justify-center gap-2 flex-row">
          <Text className="text-lg text-[#7b7b8b]">
            Already have an account?
          </Text>
          <Link href="/signin" className="text-lg text-[#3E4958]">
            Sign In
          </Link>
        </View>
      </View>
      <StatusBar barStyle="dark-content" />
    </SafeAreaView>
  );
};

export default Signup;
