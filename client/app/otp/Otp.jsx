import { View, Text, TouchableOpacity } from "react-native";
import { OtpInput } from "react-native-otp-entry";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

const Otp = () => {
  return (
    <SafeAreaView>
      <View className="h-full mt-[20%] mx-3">
        <Text className="text-center text-2xl font-bold">
          Enter Verification Code
        </Text>
        <Text className="text-center mb-3">
          We are automatically detecting SMS to send to your mobile number
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
          />
        </View>
        <View className="flex flex-row gap-2 justify-center mt-1">
          <Text>Don't have an account?</Text>
          <TouchableOpacity>
            <Text className="font-bold text-[#72B4BE]">Resend</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Otp;
