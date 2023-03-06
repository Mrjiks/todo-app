import { StyleSheet, View, Text } from "react-native";

const SingleItem = ({ title, done }) => {
  return (
    <View style={styles.item}>
      <Text style={[done ? [styles.done, styles.title] : styles.title]}>{title}</Text>
    </View>
  );
};
export default SingleItem;
const styles = StyleSheet.create({
  item: {
    padding: 20,
    marginRight: 1,
  },
  title: {
    color: "#168cff",
  },

  done: {
    textDecorationLine: "line-through",
    backgroundColor: "#b9dcfe",
    opacity: 0.5,
  },
});
