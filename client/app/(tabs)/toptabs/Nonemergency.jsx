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
import BottomSheet, { BottomSheetBackdrop, BottomSheetScrollView } from "@gorhom/bottom-sheet";
import Button from "../../../components/Button";
import regularAuto from "../../../assets/images/svg/regular_automobile-removebg-preview.png";
import vipAuto from "../../../assets/images/svg/vip_automobile-removebg-preview.png";
import basicAmbu from "../../../assets/images/svg/basic_ambulance-removebg-preview.png";
import advanceAmbu from "../../../assets/images/svg/advanced_ambulance-removebg-preview.png";

const VEHICLES = [
  { id: "1", name: "Regular Auto", image: regularAuto },
  { id: "2", name: "VIP Auto", image: vipAuto },
  { id: "3", name: "Basic Ambulance", image: basicAmbu },
  { id: "4", name: "Advanced Ambulance", image: advanceAmbu },
];

const DATA = [
  {
    id: "1",
    type: "Pregnant Lady Transportation",
    image: regularAuto,
    description: "Safe and reliable transport for antenatal care follow-ups.",
  },
  {
    id: "2",
    type: "Dialysis Transportation",
    image: vipAuto,
    description: "Timely and safe transport suited for dialysis appointments.",
  },
  {
    id: "3",
    type: "Disability Transportation",
    image: basicAmbu,
    description:
      "Transport for individuals with physical, cognitive equipped with wheelchairs and paramedics.",
  },
  {
    id: "4",
    type: "Seniors Transportation",
    image: advanceAmbu,
    description:
      "Comfortable transport for elderly individuals with chronic conditions.",
  },
];


const Item = ({ title, image, description, onPress }) => (
  <TouchableOpacity onPress={onPress} style={styles.itemContainer}>
    <Text style={styles.itemTitle}>{title}</Text>
    <View style={styles.itemContent}>
      <Image resizeMode="contain" style={styles.image} source={image} />
    </View>
    <Text style={styles.itemDescription}>{description}</Text>
  </TouchableOpacity>
);

const Nonemergency = () => {
  const [selectedVehicle, setSelectedVehicle] = useState(null);
  const [departureArea, setDepartureArea] = useState("");
  const [hospitalArea, setHospitalArea] = useState("");
  const [error, setError] = useState(null);

  const bottomSheetRef = useRef(null);
  const snapPoints = useMemo(() => ["80%"], []);

  const handleSubmit = () => {
    if (!departureArea || !hospitalArea) {
      setError("Please fill in both fields.");
      return;
    }
    setError(null);
    Alert.alert(
      "Submission Successful",
      `Vehicle: ${selectedVehicle.name}\nDeparture Area: ${departureArea}\nHospital Area: ${hospitalArea}`,
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

  const handleVehicleSelect = (vehicle) => {
    setSelectedVehicle(vehicle);
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
            NEMT—Our company offers non-Emergency medical transportation service
            for groups and individual clients travelling to Dialysis Centers,
            Health Care Facilities (Hospitals, Pharmacy, Diagnostic Centers),
            Day Cares, etc.
          </Text>
        </View>
        <View
          style={{
            borderBottomWidth: 1,
            borderColor: "#D5DDE0",
            marginVertical: 5,
          }}
        />
        <Text style={styles.headerText}>Choose a service: </Text>
        <View style={{ flex: 1 }}>
          <FlatList
            data={DATA}
            renderItem={({ item }) => (
              <Item
                title={item.type}
                image={item.image}
                description={item.description}
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
          activeOffsetX={[-999, 999]}
          activeOffsetY={[-5, 5]}
          onChange={(index) => {
            if (index === -1) {
              setSelectedVehicle(null);
              setDepartureArea("");
              setHospitalArea("");
            }
          }}
        >
          <BottomSheetScrollView style={styles.contentContainer}>
            <View style={styles.sheetContent}>
              {/* Input Fields */}
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
              {/* Error and Submit Button */}
              {error && <Text style={styles.errorText}>{error}</Text>}

              {selectedVehicle && (
                <>
                  {/* Vehicle Options */}
                  <FlatList
                    data={VEHICLES}
                    horizontal={true}
                    renderItem={({ item }) => (
                      <TouchableOpacity
                        className="h-52 p-4 rounded-md bg-[#f4f0fe]"
                        style={[
                          styles.vehicleOption,
                          selectedVehicle?.id === item.id &&
                            styles.selectedVehicle,
                        ]}
                        onPress={() => handleVehicleSelect(item)}
                      >
                        <Image
                          resizeMode="contain"
                          style={styles.vehicleImage}
                          source={item.image}
                        />
                        <Text>{item.name}</Text>
                      </TouchableOpacity>
                    )}
                    keyExtractor={(item) => item.id}
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={{ paddingHorizontal: 16 }}
                  />

                  {/* Description of the Selected Vehicle */}
                  {selectedVehicle && (
                    <>
                      <Text className="text-lg font-bold">
                        Vehicle Description
                      </Text>
                      <Text className="text-[15px]">
                        {
                          DATA.find(
                            (dataItem) => dataItem.id === selectedVehicle.id
                          ).description
                        }
                      </Text>
                    </>
                  )}

                  <Button title={"Book"} handlePress={handleSubmit} />
                </>
              )}
            </View>
          </BottomSheetScrollView>
        </BottomSheet>
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, paddingTop: 16, backgroundColor: "#fff" },
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
    marginHorizontal: 30,
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
  itemDescription: {
    fontSize: 14,
    color: "#666",
    marginTop: 8,
    textAlign: "justify",
  },
  sheetContent: {
    flex: 1,
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical:7,
  },
  inputLabel: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  vehicleOption: {
    marginHorizontal: 10,
    height: 150,
    alignItems: "center",
  },
  selectedVehicle: {
    borderColor: "#5e17eb",
    borderWidth: 2,
    borderRadius: 10,
    marginBottom: 30,
  },
  vehicleImage: {
    width: 100,
    height: 80,
    marginBottom: 15,
  },
  input: {
    width: "100%",
    height: 50,
    paddingHorizontal: 10,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 10,
    fontSize: 16,
  },
  errorText: {
    color: "red",
    marginBottom: 10,
  },
});

export default Nonemergency;
