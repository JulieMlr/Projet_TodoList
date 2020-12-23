import React from "react";
import { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  Alert,
  Button
} from "react-native";
import { useFocusEffect} from "@react-navigation/native";
import { getData, storeData } from "./Storage";
import { ListValidItem } from "./ListItem";

function DoneScreen() {
  const [list_valid, setList] = useState([]);

  useFocusEffect(() => {
    getData("ListValid").then((res_list) => {
      setList(res_list);
    });
  });

  useEffect(() => {
    storeData("ListValid", JSON.stringify(list_valid));
  }, []);

  return (
    <View style={styles.fond}>
        {list_valid.map((element, index) => {
          return (
            <ListValidItem
              key={index}
              element={element}
              list_valid={list_valid}
              setListValid={(value) => {
                setList(value , () => {
                  storeData("ListValid", JSON.stringify(list_valid));
                });
              }}
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
