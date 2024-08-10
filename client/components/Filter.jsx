import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

const Filter = ({ title, buttonHandle, activeStyle }) => {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      className="mx-2"
      onPress={buttonHandle}
    >
      <Text
        style={{
          backgroundColor: activeStyle ? "#5e17eb" : "white",
          color: activeStyle ? "white" : "black",
        }}
        className=" text-white px-5 py-2 rounded-xl  my-3 shadow-lg shadow-slate-400"
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default Filter