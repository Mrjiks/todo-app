import { View, Text, StyleSheet, FlatList, SafeAreaView } from "react-native";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectAlertType } from "../features/notification/alertSlice";
import ReUseableBtn from "../components/ReUseableBtn";
import CheckBox from "../components/CheckBox";

export default function SettingsMenu() {
  const alerts = useSelector((state) => state.alerts.alerts);

  const [isChecked, setChecked] = useState([]);
  const dispatch = useDispatch();

  const selectedAlert = (item) => {
    // create new and filter duplicate enteries
    let newArr = [...isChecked];
    const objIndex = newArr.findIndex((obj) => obj.label === item.label);
    if (objIndex !== -1) {
      newArr.splice(objIndex, 1);
      newArr.push(item);
    } else {
      newArr.push(item);
    }
    setChecked(newArr);
  };
  const submitSelection = () => {
    // Only send value where is not false to store.
    const selectedAlert = isChecked.filter((val) => val.value);
    dispatch(selectAlertType(selectedAlert));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>How do you like to be notified?</Text>
      <SafeAreaView>
        <FlatList
          data={alerts}
          renderItem={({ item }) => (
            <View style={styles.listContainer}>
              <View style={styles.checkboxContainer}>
                <CheckBox label={item} updateParentValue={selectedAlert} />
              </View>
              <View style={styles.titleContainer}>
                <Text style={styles.title}>{item.label}</Text>
              </View>
            </View>
          )}
          keyExtractor={(item) => item.id}
        />
        <View style={styles.buttonContainer}>
          <ReUseableBtn title='confirm selections' color='#005A9C' onPress={submitSelection} />
        </View>
      </SafeAreaView>
    </View>
  );
}
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
