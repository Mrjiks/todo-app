import Checkbox from "expo-checkbox";
import { View, TouchableOpacity, StyleSheet } from "react-native";
import React, { useState } from "react";

// Using the props from parent component
const CheckBox = ({ label, updateParentValue }) => {
  const [isChecked, setChecked] = useState({ value: false, label: label.label });

  const selectedAlert = (item) => {
    setChecked({ value: item, label: label.label });
    updateParentValue({ value: item, label: label.label });
  };

  return (
    <>
      <View style={styles.item}>
        <TouchableOpacity>
          <Checkbox
            value={isChecked.value}
            onValueChange={(item) => {
              selectedAlert(item);
            }}
            style={styles.checkbox}
            color='#005A9C'
          />
        </TouchableOpacity>
      </View>
    </>
  );
};

export default CheckBox;

const styles = StyleSheet.create({
  container: {
    alignItems: "flex-start",
    width: "100%",
    flex: 1,
  },
  listContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  checkboxContainer: {
    marginLeft: 10,
    padding: 10,
  },
  titleContainer: {
    marginLeft: 10,
  },
  title: {
    fontSize: 20,
    marginLeft: 15,
  },
  buttonContainer: {
    marginBottom: 30,
    marginHorizontal: 60,
  },
});
