import {
  View,
  Text,
  TouchableOpacity,
  Linking,
  StyleSheet,
  ToastAndroid,
} from "react-native";
import BottomSheet, {
  BottomSheetBackdrop,
  BottomSheetView,
} from "@gorhom/bottom-sheet";
import { useCallback, useEffect, useMemo, useState } from "react";

import RadioGroup from "react-native-radio-buttons-group";
import Button from "./Button";

const ActionSheet = ({ bottomSheetRef }) => {
  const [isOpen, setIsOpen] = useState(false); // Track bottom sheet state

  const snapPoints = useMemo(() => ["55%"], []);

  const openModal = () => {
    setIsOpen(false); // Close the bottom sheet
  };

  const [isPregnant, setIsPregnant] = useState(false); // Yes/No for pregnancy
  const [needsAmbulance, setNeedsAmbulance] = useState(false); // Yes/No for ambulance
  const [damageLevel, setDamageLevel] = useState(""); // Hard, Medium, Low
  const [paymentMethod, setPaymentMethod] = useState(""); // Payment method selection

  const handlePregnancySelection = (value) => setIsPregnant(value);
  const handleAmbulanceSelection = (value) => setNeedsAmbulance(value);
  const handleDamageSelection = (value) => setDamageLevel(value);
  const handlePaymentSelection = (value) => setPaymentMethod(value);

  const renderBackdrop = useCallback(
    (props) => (
      <BottomSheetBackdrop
        {...props}
        disappearsOnIndex={-1}
        appearsOnIndex={0}
        onPress={openModal}
      />
    ),
    []
  );

  useEffect(() => {
    if (isOpen) {
      setIsOpen(false); // Close the bottom sheet on initial mount
    }
  }, []); // Empty dependency array to run only once
  const radioButtons = useMemo(
    () => [
      {
        id: "1", // acts as primary key, should be unique and non-empty string
        label: "Yes",
        value: "yes",
      },
      {
        id: "2",
        label: "No",
        value: "no",
      },
    ],
    []
  );
  const damagelevel = useMemo(
    () => [
      {
        id: "1", // acts as primary key, should be unique and non-empty string
        label: "Samll",
        value: "small",
      },
      {
        id: "2",
        label: "Medium",
        value: "medium",
      },
      {
        id: "3",
        label: "Hard",
        value: "hard",
      },
    ],
    []
  );
   const emergencybutton = useMemo(
     () => [
       {
         id: "1", // acts as primary key, should be unique and non-empty string
         label: "Yes",
         value: "yes",
       },
       {
         id: "2",
         label: "No",
         value: "no",
       },
     ],
     []
   );

   const exitBotomSheet = () => {
    bottomSheetRef.current?.close()
    ToastAndroid.show("Request sent successfully! The ambulance will arrive soon.", ToastAndroid.SHORT);
   }

  const [selectedId, setSelectedId] = useState();
  const [emergency, setEmergency] = useState();
  const [damage, setdamege] = useState();
  return (
    <BottomSheet
      style={styles.container}
      ref={bottomSheetRef}
      enablePanDownToClose={true}
      snapPoints={snapPoints}
      index={isOpen ? 0 : -1} // Set index to -1 to close initially
      backdropComponent={renderBackdrop}
    >
      <View>
        <Text className="text-center text-2xl font-bold underline">Emergency Information</Text>
      </View>
      <View className="flex flex-col justify-between px-4 gap-y-3 mt-4">
        <View>
          <Text className="text-base">Are you pregnant lady?</Text>

          <RadioGroup
            radioButtons={radioButtons}
            onPress={setSelectedId}
            selectedId={selectedId}
            layout="row"
          />
        </View>
        <View>
          <Text className="text-base">Is it emergency?</Text>

          <RadioGroup
            radioButtons={emergencybutton}
            onPress={setEmergency}
            selectedId={emergency}
            layout="row"
          />
        </View>
        <View>
          <Text className="text-base">What is the damage level?</Text>

          <RadioGroup
            radioButtons={damagelevel}
            onPress={setdamege}
            selectedId={damage}
            layout="row"
          />
        </View>
      </View>

  <Button title={"Done"} handlePress={exitBotomSheet}/>
    </BottomSheet>
  );
};

export default ActionSheet;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: "grey",
  },
  contentContainer: {
    flex: 1,
    alignItems: "center",
  },
});
