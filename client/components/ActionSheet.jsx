import {
  View,
  Text,
  TouchableOpacity,
  Linking,
  Button,
  StyleSheet,
} from "react-native";
import BottomSheet, {
  BottomSheetBackdrop,
  BottomSheetView,
} from "@gorhom/bottom-sheet";
import { useCallback, useEffect, useMemo, useState } from "react";

const ActionSheet = ({ bottomSheetRef }) => {
  const [isOpen, setIsOpen] = useState(false); // Track bottom sheet state

  const snapPoints = useMemo(() => ["70%"], []);

  const openModal = () => {
    setIsOpen(false); // Close the bottom sheet
  };

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
        <Text>Hello there!</Text>
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
