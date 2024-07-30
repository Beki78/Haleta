import React, { useState, useRef, useMemo, useCallback } from "react";
import {
  View,
  StyleSheet,
  FlatList,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  Alert,
  KeyboardAvoidingView,
} from "react-native";
import BottomSheet, { BottomSheetBackdrop } from "@gorhom/bottom-sheet";
import Marquee from "react-native-marquee";
import regularAuto from "../../../assets/images/svg/regular_automobile-removebg-preview.png";
import vipAuto from "../../../assets/images/svg/vip_automobile-removebg-preview.png";
import basicAmbu from "../../../assets/images/svg/basic_ambulance-removebg-preview.png";
import AdvanceAmbu from "../../../assets/images/svg/advanced_ambulance-removebg-preview.png";
import Button from "../../../components/Button"

const DATA = [
  {
    id: "1",
    type: "Regular Automobile",
    price: "1,000 ETB",
    image: regularAuto,
  },
  {
    id: "2",
    type: "VIP Transport Vehicle",
    price: "3,000 ETB",
    image: vipAuto,
  },
  {
    id: "3",
    type: "Basic Ambulance",
    price: "2,000 ETB",
    image: basicAmbu,
  },
  {
    id: "4",
    type: "Advanced Ambulance",
    price: "4,000 ETB",
    image: AdvanceAmbu,
  },
];

const Item = ({ title, price, image, onPress }) => (
  <TouchableOpacity onPress={onPress} style={styles.itemContainer}>
    <Text style={styles.itemTitle}>{title}</Text>
    <View style={styles.itemContent}>
      <Image resizeMode="contain" style={styles.image} source={image} />
      <Text style={{ color: "#666" }} className="font-light">
        {price}
      </Text>
    </View>
  </TouchableOpacity>
);

const Nonemergency = () => {
  const [selectedVehicle, setSelectedVehicle] = useState(null);
  const [departureArea, setDepartureArea] = useState("");
  const [hospitalArea, setHospitalArea] = useState("");
  const [error, setError] = useState(null);

  const bottomSheetRef = useRef(null);
  const snapPoints = useMemo(() => ["70%"], []);

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
    setDepartureArea("");
    setHospitalArea("");
    bottomSheetRef.current.close();
  };

  const handleOpenBottomSheet = (item) => {
    setSelectedVehicle(item);
    bottomSheetRef.current.expand();
  };

  const renderBackdrop = useCallback(
    (props) => (
      <BottomSheetBackdrop
        {...props}
        disappearsOnIndex={-1}
        appearsOnIndex={0}
        onPress={() => {
          setDepartureArea("");
          setHospitalArea("");
          bottomSheetRef.current.close();
        }}
        opacity={0.5}
      />
    ),
    []
  );

  return (
    <KeyboardAvoidingView style={{ flex: 1 }} behavior="padding">
      <View style={styles.container}>
        <View style={styles.descriptionContainer}>
          <Text style={styles.descriptionText}>
            Non-Emergency Medical Transportation (NEMT) provides transportation
            services for individuals who are not in an emergency situation but
            need more assistance than a regular taxi service. NEMT services
            include transportation for routine medical appointments, antenatal
            followups, dialysis, people with disability, elderly people with
            chronic medical illnesses, and more.
          </Text>
        </View>
        <View
          style={{
            borderBottomWidth: 1,
            borderColor: "#D5DDE0",
            marginVertical: 5,
          }}
        />
        <Text style={styles.headerText}>Select a vehicle: </Text>
        <View style={{ flex: 1 }}>
          <FlatList
            data={DATA}
            renderItem={({ item }) => (
              <Item
                title={item.type}
                price={item.price}
                image={item.image}
                onPress={() => handleOpenBottomSheet(item)}
              />
            )}
            keyExtractor={(item) => item.id}
          />
        </View>
        <BottomSheet
          ref={bottomSheetRef}
          index={-1}
          enablePanDownToClose={true}
          snapPoints={snapPoints}
          backdropComponent={renderBackdrop}
          onChange={(index) => {
            if (index === -1) {
              setSelectedVehicle(null);
              setDepartureArea("");
              setHospitalArea("");
            }
          }}
        >
          <View style={styles.sheetContent}>
            {selectedVehicle && (
              <>
                <Text
                  className="text-center text-2xl font-bold my-4"
                  style={styles.inputLabel}
                >
                  {selectedVehicle.type}
                </Text>
                <TextInput
                  style={styles.input}
                  placeholder="Enter area of departure"
                  value={departureArea}
                  onChangeText={setDepartureArea}
                />
                <TextInput
                  style={styles.input}
                  placeholder="Enter hospital name"
                  value={hospitalArea}
                  onChangeText={setHospitalArea}
                />
                {error && <Text style={styles.errorText}>{error}</Text>}
                <Button title={"Book"} handlePress={handleSubmit} />
              </>
            )}
          </View>
        </BottomSheet>
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, paddingTop: 16, backgroundColor: "#fff" },
  marquee: {
    backgroundColor: "#72B4BE",
    color: "#fff",
    fontSize: 20,
    padding: 10,
  },
  descriptionContainer: {
    paddingHorizontal: 10,
  },
  descriptionText: {
    fontSize: 15,
    color: "#666",
    marginBottom: 8,
    textAlign: "justify",
  },
  headerText: {
    fontSize: 25,
    fontWeight: "bold",
    marginVertical: 7,
    marginLeft: 10,
  },
  itemContainer: {
    marginVertical: 8,
    marginHorizontal: 10,
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
    fontWeight: "semibold",
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
  sheetContent: {
    flex: 1,
    alignItems: "center",
    padding: 16,
  },
  
  input: {
    borderColor: "#72B4BE",
    borderWidth: 1,
    padding: 8,
    borderRadius: 8,
    marginBottom: 16,
    width: "100%",
  },
  errorText: {
    color: "red",
    marginBottom: 8,
  },
});

export default Nonemergency;
