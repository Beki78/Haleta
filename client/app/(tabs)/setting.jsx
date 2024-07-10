import { View, Text, TouchableOpacity, Linking } from "react-native";
import React from "react";
import "@expo/metro-runtime";

// myURL =
//   "https://www.google.com/maps/dir/9.0065508,38.838833/Figa+traffic+lights,+Addis+Ababa/@9.0087104,38.8350992,16.25z/data=!4m9!4m8!1m1!4e1!1m5!1m1!1s0x164b9b6bb694e687:0xbf157fcbf89cf4e0!2m2!1d38.8369874!2d9.0124642?entry=ttu";

// const map = () => {
//   console.log("asd");
//   Linking.openURL(myURL);
// };

const Settings = () => {
  return (
    <View>
      <Text>setting</Text>
      {/* <TouchableOpacity onPress={map}>
        <Text>redirect</Text>
      </TouchableOpacity> */}
    </View>
  );
};

export default Settings;
