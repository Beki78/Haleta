// import React, { useEffect, useRef } from "react";
// import { View, Text } from "react-native";
// import LottieView from "lottie-react-native";

// const SplashScreen = ({ navigation }) => {
//   const animationRef = useRef(null);

//   useEffect(() => {
//     const timeout = setTimeout(() => {
//       navigation.replace("Main"); // Replace with 'Main' for your main screen name
//     }, 2000); // Adjust timeout duration as needed (in milliseconds)

//     return () => clearTimeout(timeout);
//   }, [navigation]);

//   return (
//     <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
//       <LottieView
//         ref={animationRef}
//         source={require("../../assets/Animation/Animation - 1720111013868.json")}
//         autoPlay
//         loop
//         style={{ width: 400, height: 400 }}
//       />
//     </View>
//   );
// };

// export default SplashScreen;
