import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

const Filter = ({title}) => {
  return (
    <TouchableOpacity activeOpacity={0.8} className="mx-2">
      <Text className="bg-[#72B4BE] text-gray-600 px-5 py-2 rounded-xl  my-3 shadow-lg shadow-slate-400">{title}</Text>
    </TouchableOpacity>
  );
}

export default Filter