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
  ToastAndroid,
} from "react-native";
import BottomSheet, { BottomSheetBackdrop, BottomSheetScrollView } from "@gorhom/bottom-sheet";
import Button from "../../../components/Button";
import regularAuto from "../../../assets/images/svg/regular_automobile-removebg-preview.png";
import vipAuto from "../../../assets/images/svg/vip_automobile-removebg-preview.png";
import basicAmbu from "../../../assets/images/svg/basic_ambulance-removebg-preview.png";
import advanceAmbu from "../../../assets/images/svg/advanced_ambulance-removebg-preview.png";
import EmergencySer from "../../../assets/images/svg/emergencyservice.jpg"
import DisabilitySer from "../../../assets/images/svg/disabilityservice.jpg"
import DiyalsisSer from "../../../assets/images/svg/diyalisisservice.jpg"

const VEHICLES = [
  {
    id: "1",
    name: "Regular Auto",
    image: regularAuto,
    description: "A standard vehicle suitable for regular transport needs.",
  },
  {
    id: "2",
    name: "VIP Auto",
    image: vipAuto,
    description:
      "A premium vehicle offering VIP transport services with added comfort.",
  },
  {
    id: "3",
    name: "Basic Ambulance",
    image: basicAmbu,
    description:
      "A basic ambulance equipped with essential medical equipment for emergencies.",
  },
  {
    id: "4",
    name: "Advanced Ambulance",
    image: advanceAmbu,
    description:
      "An advanced ambulance equipped with state-of-the-art medical equipment and staff.",
  },
];


const DATA = [
  {
    id: "1",
    type: "Emergency transportation service",
    image: EmergencySer,
    description:
      "Emergency transportation service is a service given to individuals who are in severe and life-threatening condition. Our company provides the necessary medical assistance using the lifesaving equipment, well-skilled paramedic and driver to avoid death or further deterioration until the client reaches to the medical site.",
  },
  {
    id: "2",
    type: "Disability Transportation",
    image: DisabilitySer,
    description:
      "People having physical, cognitive, mental issues and developmental limitation can comfortably use our vehicles. Our vans are well-fitted with wheelchair, seats and paramedic/nurse to attend the clients to their destinations.",
  },
  {
    id: "3",
    type: "Transportation to Dialysis centers",
    image: DiyalsisSer,
    description:
      "Clients having doctors’ appointment or dialysis treatment can assess our company’s transportation service. Our vans are wheelchair mounted that can assist clients while moving to and from their treatment centers.",
  },
];


const Item = ({ title, image, description, onPress }) => (
  <TouchableOpacity onPress={onPress} style={styles.itemContainer}>
    <Text className="text-lg my-3 text-center font-bold">{title}</Text>
    <View style={styles.itemContent}>
      <Image resizeMode="cover" style={styles.image} className="w-full h-52" source={image} />
    </View>
    <Text className="my-4 text-slate-700">{description}</Text>
  </TouchableOpacity>
);

const Nonemergency = () => {
  const [selectedService, setSelectedService] = useState(null); // Separate state for service type
  const [selectedVehicle, setSelectedVehicle] = useState(null); // Separate state for vehicle
  const [departureArea, setDepartureArea] = useState("");
  const [hospitalArea, setHospitalArea] = useState("");
  const [error, setError] = useState(null);

  const bottomSheetRef = useRef(null);
  const snapPoints = useMemo(() => ["80%"], []);

  const handleSubmit = () => {
    if (!departureArea || !hospitalArea || !selectedVehicle) {
      setError("Please fill in all fields and select a vehicle.");
      return;
    }
    setError(null);

    Alert.alert(
      "Submission Successful",
      `Service: ${selectedService?.type || ""}\nVehicle: ${
        selectedVehicle?.name || ""
      }\nDeparture Area: ${departureArea}\nHospital Area: ${hospitalArea}`,
      [
        {
          text: "OK",
          onPress: () =>
            ToastAndroid.show(
              "Your ambulance will arrive soon!",
              ToastAndroid.SHORT
            ),
        },
      ]
    );

    setDepartureArea("");
    setHospitalArea("");
    setSelectedVehicle(null); // Clear the selected vehicle after submission
    bottomSheetRef.current.close();
  };


  const handleOpenBottomSheet = (service) => {
    setSelectedService(service); // Set the selected service
    bottomSheetRef.current.expand();
  };

  const handleVehicleSelect = (vehicle) => {
    setSelectedVehicle(vehicle); // Set the selected vehicle
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
              setSelectedService(null);
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

              {selectedService && (
                <>

                  {/* Vehicle Options */}
                  <FlatList
                    data={VEHICLES}
                    horizontal={true}
                    renderItem={({ item }) => (
                      <TouchableOpacity
                        className="h-52 p-4 rounded-md shadow-md shadow-[#c1bbce]"
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
                      <Text className="text-[15px] text-slate-700">
                        {selectedVehicle?.description}
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

  itemContent: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
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
