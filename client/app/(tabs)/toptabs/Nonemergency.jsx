import React, {
  useState,
  useRef,
  useMemo,
  useCallback,
  useEffect,
} from "react";
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
import BottomSheet, {
  BottomSheetBackdrop,
  BottomSheetScrollView,
} from "@gorhom/bottom-sheet";
import { AntDesign } from "@expo/vector-icons"; // Import icon for arrows
import Button from "../../../components/Button";
import regularAuto from "../../../assets/images/svg/regular_automobile-removebg-preview.png";
import vipAuto from "../../../assets/images/svg/vip_automobile-removebg-preview.png";
import basicAmbu from "../../../assets/images/svg/basic_ambulance-removebg-preview.png";
import advanceAmbu from "../../../assets/images/svg/advanced_ambulance-removebg-preview.png";
import EmergencySer from "../../../assets/images/svg/emergencyservice.jpg";
import DisabilitySer from "../../../assets/images/svg/disabilityservice.jpg";
import DiyalsisSer from "../../../assets/images/svg/diyalisisservice.jpg";

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
      <Image
        resizeMode="cover"
        style={styles.image}
        className="w-full h-52"
        source={image}
      />
    </View>
    <Text className="my-4 text-slate-700">{description}</Text>
  </TouchableOpacity>
);

const Nonemergency = () => {
  const [selectedService, setSelectedService] = useState(null); // Separate state for service type
  const [selectedVehicle, setSelectedVehicle] = useState(VEHICLES[0]); // Set default selected vehicle to the first one
  const [departureArea, setDepartureArea] = useState("");
  const [hospitalArea, setHospitalArea] = useState("");
  const [error, setError] = useState(null);

  const flatListRef = useRef(null); // Ref for FlatList
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
    setSelectedVehicle(VEHICLES[0]); // Reset to default vehicle after submission
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

  const scrollToNext = () => {
    flatListRef.current.scrollToOffset({
      offset: 100 * (selectedVehicle.id % VEHICLES.length),
      animated: true,
    });
  };

  const scrollToPrevious = () => {
    flatListRef.current.scrollToOffset({
      offset:
        (100 * (selectedVehicle.id - 2 + VEHICLES.length)) % VEHICLES.length,
      animated: true,
    });
  };

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
              setSelectedVehicle(VEHICLES[0]);
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
                  {/* Scrollable Vehicle Options with Arrows */}
                  <View style={styles.vehicleScrollContainer}>
                    <TouchableOpacity
                      onPress={scrollToPrevious}
                      style={styles.arrowButton}
                    >
                      <AntDesign name="left" size={24} color="#5e17eb" />
                    </TouchableOpacity>

                    <FlatList
                      ref={flatListRef}
                      data={VEHICLES}
                      horizontal={true}
                      renderItem={({ item }) => (
                        <TouchableOpacity
                          className="h-40 p-4 rounded-md shadow-md shadow-[#c1bbce]"
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
                          <Text className="text-center">{item.name}</Text>
                        </TouchableOpacity>
                      )}
                      keyExtractor={(item) => item.id}
                      showsHorizontalScrollIndicator={false}
                    />

                    <TouchableOpacity
                      onPress={scrollToNext}
                      style={styles.arrowButton}
                    >
                      <AntDesign name="right" size={24} color="#5e17eb" />
                    </TouchableOpacity>
                  </View>
                  {/* Selected Vehicle Description */}
                  <Text style={styles.selectedVehicleDescription}>
                    {selectedVehicle?.description}
                  </Text>
                </>
              )}

              <Button
                title="Submit"
                handlePress={handleSubmit}
                containerStyle={{ marginTop: 20 }}
              />
            </View>
          </BottomSheetScrollView>
        </BottomSheet>
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#fff",
  },
  descriptionContainer: {
    marginBottom: 8,
  },
  descriptionText: {
    fontSize: 16,
    color: "#333",
  },
  headerText: {
    fontSize: 18,
    fontWeight: "bold",
    marginVertical: 10,
  },
  itemContainer: {
    marginBottom: 20,
    padding: 12,
    borderRadius: 8,
    backgroundColor: "#f8f8f8",
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
  },
  itemContent: {
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: "100%",
    height: 200,
    marginBottom: 10,
  },
  contentContainer: {
    paddingHorizontal: 16,
  },
  sheetContent: {
    marginTop: 16,
  },
  input: {
    height: 50,
    borderColor: "#ddd",
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 16,
    marginBottom: 12,
  },
  errorText: {
    color: "red",
    marginBottom: 8,
  },
  vehicleScrollContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 12,
  },
  arrowButton: {
    padding: 3,

  },
  vehicleOption: {
    padding: 10,
    backgroundColor: "#fff",
    marginRight: 10,
    borderRadius: 8,
    borderWidth: 2,
    borderColor: "transparent",
  },
  selectedVehicle: {
    borderColor: "#3498db",
  },
  vehicleImage: {
    width: 100,
    height: 100,
    marginBottom: 5,
  },
  selectedVehicleDescription: {
    marginVertical: 10,
    fontSize: 16,
    color: "#555",
    textAlign: "center",
  },
});

export default Nonemergency;
