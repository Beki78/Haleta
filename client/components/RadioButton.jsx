import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

const RadioButton = ({ label, icon, selected, onPress }) => {
  const [isChecked, setIsChecked] = useState(selected); // Track button state

  const handlePress = () => {
    setIsChecked(!isChecked); // Toggle state on press
    onPress(!isChecked); // Optional: Pass the updated state to parent
  };

  return (
    <TouchableOpacity style={styles.radioButtonContainer} onPress={handlePress}>
      {icon && <View style={styles.icon}>{icon}</View>}
      <Text style={styles.radioButtonLabel}>{label}</Text>
      {isChecked && <View style={styles.radioButtonSelected} />}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  radioButtonContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  icon: {
    marginRight: 10,
  },
  radioButtonLabel: {
    fontSize: 16,
  },
  radioButtonSelected: {
    marginLeft: "auto", // Place selected indicator at the end
    width: 16,
    height: 16,
    borderRadius: 8,
    backgroundColor: "blue", // Adjust color as needed
  },
});

export default RadioButton;
