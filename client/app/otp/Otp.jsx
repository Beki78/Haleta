import { View, Text, TouchableOpacity, Alert } from "react-native";
import { OtpInput } from "react-native-otp-entry";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { verifyCode } from "../../lib/appwrite"; // Import the function for OTP verification
import { Link, router } from "expo-router";

const Otp = () => {
  const [otp, setOtp] = useState("");

  // Handle OTP input change
  const handleOtpChange = (value) => {
    console.log("OTP input value:", value); // Log value to check if the input is received
    setOtp(value);
  };

  // Handle verification on button press
  const handleVerify = async () => {
    console.log("Entered OTP:", otp); // Log the OTP value

    if (otp.length === 6) {
      try {
        await verifyCode(otp); // Verify the OTP
        router.push("/home"); // Redirect to home page after successful verification
      } catch (error) {
        Alert.alert(
          "Error",
          "Verification failed. Please check your OTP and try again."
        );
      }
    } else {
      Alert.alert("Error", "Please enter a valid 6-digit OTP.");
    }
  };

  return (
    <SafeAreaView>
      <View className="h-full mt-[20%] mx-3">
        <Text className="text-center text-2xl font-bold">
          Enter Verification Code
        </Text>
        <Text className="text-center text-base mb-3">
          We are automatically detecting SMS sent to your mobile number
        </Text>
        <View className="mx-3">
          <OtpInput
            numberOfDigits={6}
            focusColor={"#72B4BE"}
            focusStickBlinkingDuration={400}
            theme={{
              pinCodeContainerStyle: {
                backgroundColor: "#fff",
                width: 58,
                height: 58,
                borderRadius: 12,
              },
            }}
            onCodeFilled={handleOtpChange} // Ensure this is correctly updating the state
          />
        </View>
        <TouchableOpacity
          onPress={handleVerify}
          className="bg-[#72B4BE] py-3 mt-4 rounded"
        >
          <Text className="text-center text-white font-bold">Verify</Text>
        </TouchableOpacity>
        <View className="flex flex-row gap-2 justify-center mt-1">
          <Text>Didn't receive the code?</Text>
          <TouchableOpacity>
            <Text className="font-bold text-[#72B4BE]">Resend</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Otp;
