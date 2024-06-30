import { View, Text } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import "@expo/metro-runtime";



const home = () => {
  return (
    <SafeAreaView>
      <View>
        <Text>homeds</Text>
      </View>
    </SafeAreaView>
  );
}

export default home