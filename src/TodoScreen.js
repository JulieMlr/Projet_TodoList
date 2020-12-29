import React from "react";
import { useState } from "react";
import { View, StyleSheet, Alert } from "react-native";
import { getData } from "./Storage";
import { ListItem } from "./ListItem";
import { useFocusEffect } from "@react-navigation/native";

function TodoScreen() {
  const [list, setListTodo] = useState([]);
  //const [list_valid, setListDone] = useState([]);

  useFocusEffect(() => {
    getData("List").then((res_list) => {
      setListTodo(res_list);
    });
    /*getData("ListValid").then((res_list) => {
      setListDone(res_list);
    });*/
  });

  return (
    <View style={styles.fond}>
      {list.map((element, index) => {
        return (
           <ListItem
            key={index}
            element={element}
            list={list}
            list_valid={[]}
           /*list_valid={list_valid}
            setValidItem={(value) => {
              setListDone(value, () => {
                storeData("ListValid", JSON.stringify(list_valid));
              });
            }}
            setList={(value) => {
              setListTodo(value, () => {
                storeData("List", JSON.stringify(list));
              });
            }}*/
            setValidItem={() => Alert.alert("Se diriger sur la page All pour valider une tâche") }
            setList={() => Alert.alert("Se diriger sur la page All pour supprimer une tâche")}
          />
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  fond: {
    marginTop: "10%",
    marginLeft: 5,
    marginRight: 5,
    borderRadius: 5,
    marginBottom: 10,
  },
});

export default TodoScreen;
