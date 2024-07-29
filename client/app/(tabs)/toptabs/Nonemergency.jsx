import React, { useState } from "react";
import {
  View,
  StyleSheet,
  FlatList,
  Text,
  Image,
  TextInput,
  Button,
  TouchableOpacity,
  Alert,
} from "react-native";
import Marquee from "react-native-marquee";
import Img from "../../../assets/images/svg/jose-de-azpiazu-Fz4bjB8LdT4-unsplash.jpg";

const DATA = [
  {
    id: "1",
    type: "Regular Automobile",
    // image: require("./path/to/regular_automobile.png"),
    price: "1,000 ETB",
  },
  {
    id: "2",
    type: "VIP Transport Vehicle",
    // image: require("./path/to/vip_transport.png"),
    price: "3,000 ETB",
  },
  {
    id: "3",
    type: "Basic Ambulance",
    // image: require("./path/to/basic_ambulance.png"),
    price: "2,000 ETB",
  },
  {
    id: "4",
    type: "Advanced Ambulance",
    // image: require("./path/to/advanced_ambulance.png"),
    price: "4,000 ETB",
  },
];

const Item = ({ title, price, onPress }) => (
  <TouchableOpacity onPress={onPress} style={styles.itemContainer}>
    <Text style={styles.itemTitle}>{title}</Text>
    <View style={styles.itemContent}>
      <Image style={styles.image} source={Img} />
      <Text>{price}</Text>
    </View>
  </TouchableOpacity>
);

const Nonemergency = () => {
  const [selectedVehicle, setSelectedVehicle] = useState(null);
  const [departureArea, setDepartureArea] = useState("");
  const [hospitalArea, setHospitalArea] = useState("");
  const [error, setError] = useState(null);

  const handleSubmit = () => {
    if (!departureArea || !hospitalArea) {
      setError("Please fill in both fields.");
      return;
    }
    setError(null);
    Alert.alert(
      "Submission Successful",
      `Vehicle: ${selectedVehicle.type}\nDeparture Area: ${departureArea}\nHospital Area: ${hospitalArea}`,
      [{ text: "OK" }]
    );
  };

  return (
    <View style={styles.container}>
      <Marquee
        className="px-6"
        style={styles.marquee}
        delay={1000}
        marqueeOnStart
        autoFill
        loop
      >
        Welcome to Non-Emergency Medical Transportation
      </Marquee>
      <View>
        <Text style={styles.headerText}>Select a vehicle</Text>
        <FlatList
          data={DATA}
          renderItem={({ item }) => (
            <Item
              title={item.type}
              price={item.price}
              onPress={() => setSelectedVehicle(item)}
            />
          )}
          keyExtractor={(item) => item.id}
          horizontal
        />
      </View>
      {selectedVehicle && (
        <View style={styles.inputContainer}>
          <Text style={styles.inputLabel}>
            Selected Vehicle: {selectedVehicle.type}
          </Text>
          <TextInput
            style={styles.input}
            placeholder="Enter area of departure"
            value={departureArea}
            onChangeText={setDepartureArea}
          />
          <TextInput
            style={styles.input}
            placeholder="Enter hospital name/area"
            value={hospitalArea}
            onChangeText={setHospitalArea}
          />
          {error && <Text style={styles.errorText}>{error}</Text>}
          <Button title="Submit" onPress={handleSubmit} />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, paddingTop: 16 },
  marquee: {
    backgroundColor: "#72B4BE",
    color: "#fff",
    fontSize: 20,
    padding: 10,
  },
  headerText: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    marginVertical: 16,
  },
  itemContainer: {
    marginVertical: 8,
    marginHorizontal: 4,
    backgroundColor: "#f9f9f9",
    borderRadius: 8,
    padding: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  itemTitle: {
    textAlign: "center",
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 8,
  },
  itemContent: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  image: {
    width: 80,
    height: 80,
    marginRight: 10,
  },
  inputContainer: {
    padding: 16,
    backgroundColor: "#fff",
    borderRadius: 8,
    marginTop: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  inputLabel: {
    fontSize: 16,
    marginBottom: 8,
  },
  input: {
    borderColor: "#72B4BE",
    borderWidth: 1,
    padding: 8,
    borderRadius: 8,
    marginBottom: 16,
  },
  errorText: {
    color: "red",
    marginBottom: 8,
  },
});

export default Nonemergency;
