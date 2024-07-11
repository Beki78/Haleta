import {
  View,
  Text,
  TouchableOpacity,
  Linking,

  StyleSheet,
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

  const snapPoints = useMemo(() => ["70%"], []);

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

  const [selectedId, setSelectedId] = useState();
  const [emergency, setEmergency] = useState();
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
        <Text>Emergency Information</Text>
      </View>
      <View>
        <View>
          <Text>Are you pregnant?</Text>
          <View>
            <RadioGroup
              radioButtons={radioButtons}
              onPress={setSelectedId}
              selectedId={selectedId}
              layout="row"
            />
          </View>
        </View>
        <View>
          <Text>Are you pregnant?</Text>
          <View>
            <RadioGroup
              radioButtons={emergencybutton}
              onPress={setEmergency}
              selectedId={emergency}
              layout="row"
            />
          </View>
        </View>
        <Button title={"Book"}/>
      </View>
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
