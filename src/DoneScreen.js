import React from "react";
import { useState, useEffect } from "react";
import { View, StyleSheet, Alert, Button } from "react-native";
import { useFocusEffect } from "@react-navigation/native";
import { getData, storeData } from "./Storage";
import { ListValidItem} from "./ListItem";

function DoneScreen() {
  const [list_valid, setList] = useState([]);
  //const [list, setListBis] = useState([]);

  useFocusEffect(() => {
    getData("ListValid").then((res_list) => {
      setList(res_list);
    });
    /*getData("List").then((res_list) => {
      setListBis(res_list);
    });*/
  });

  return (
    <View style={styles.fond}>
      {list_valid.map((element, index) => {
        return (
          <ListValidItem
              key={index}
              element={element}
              list_valid={list_valid}
              list={[]}
              /*
              list={list}
              setListValid={(value) => {
                setList(value , () => {
                  storeData("ListValid", JSON.stringify(list_valid));
                });
              }}
              setNoListValid={(value) => {
                setListBis(value, () => {
                  storeData("List", JSON.stringify(list));
                })
              }}*/
              setListValid={() => Alert.alert("Se diriger sur la page All pour supprimer une tâche")}
              setNoListValid={() => Alert.alert("Se diriger sur la page All pour rendre la tâche Todo")}
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

export default DoneScreen;
