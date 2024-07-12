import { View, Text, TextInput } from "react-native";
import React from "react";
import "@expo/metro-runtime";


const FormField = ({ heading, placeholder, autoComplete, phoneCode, phoneFieldStyle, state, value }) => {
  return (
    <View className="">
      <Text className="text-lg font-semibold text-[#3E4958]">{heading}</Text>
      <View
        className={`bg-[#F7F8F9] rounded-xl h-14 mb-6   ${phoneFieldStyle}`}
      >
        {phoneCode ? (
          <Text className=" pl-3 py-2 h-[70%] ">+251</Text>
        ) : null}
        <TextInput
          autoComplete={autoComplete}
          placeholder={placeholder}
          placeholderTextColor="#7b7b8b"
          autoCapitalize="word"
          cursorColor="#7b7b8b"
          className="flex-1 p-2 "
          onChange={state}
          value={value}
        />
      </View>
    </View>
  );
};

export default FormField;
