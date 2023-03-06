import { StyleSheet, FlatList, SafeAreaView, View, TouchableOpacity } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { MaterialIcons } from "@expo/vector-icons";
import InputForm from "../components/InputForm";
import { deleteItem, markDone } from "../features/todo/todoSlice";
import ReUseableBtn from "../components/ReUseableBtn";
import { removeAllItems } from "../features/todo/todoSlice";
import SingleItem from "../components/SingleTodo";

export default function TodoList({ navigation }) {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  // Dispatches todoListSlice reducer deleteItem
  const onDelete = (id) => {
    dispatch(
      deleteItem({
        id: id,
      })
    );
  };
  // Dispatches todoListSlice reducer markDone
  const onDone = (id) => {
    dispatch(
      markDone({
        id: id,
      })
    );
  };
  // Dispatches todoListSlice reducer removeAllItems
  const removeAllTodos = () => {
    dispatch(removeAllItems([]));
  };
  return (
    <View style={{ flex: 1 }}>
      <SafeAreaView style={styles.container}>
        <InputForm />
        <FlatList
          data={todos}
          renderItem={({ item }) => (
            <View style={styles.listContainer}>
              <View style={styles.title}>
                <SingleItem title={item.title} done={item.done} />
              </View>

              <View style={styles.actionContainer}>
                <TouchableOpacity>
                  <MaterialIcons
                    style={styles.todoaction}
                    name='check'
                    size={23}
                    color='black'
                    onPress={() => onDone(item.id)}
                  />
                </TouchableOpacity>

                <TouchableOpacity style={styles.deleteButton} onPress={() => onDelete(item.id)}>
                  <MaterialIcons name='delete' size={23} color='#005A9C' />
                </TouchableOpacity>
              </View>
            </View>
          )}
          keyExtractor={(item) => item.id}
        />

        <ReUseableBtn
          color={"#005A9C"}
          title={"DELETE ALL TODOS"}
          onPress={() => removeAllTodos()}
          style={{ flexGrow: 0, justifyContent: "center" }}
        />
        <View style={styles.buttonContainer}>
          <ReUseableBtn
            title='Notification Settings'
            color='#005A9C'
            onPress={() => navigation.navigate("Settings")}
          />
        </View>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flex: 1,
  },
  listContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    flexGrow: 0,
  },
  title: {
    flexDirection: "row",
  },
  actionContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    width: 100,
  },

  todoaction: {
    marginRight: 5,
  },
  buttonContainer: {
    backgroundColor: "#005A9C",
  },
});
