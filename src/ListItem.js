import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Alert } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
 

const ListItem = ({ element, list, list_valid, setList, setValidItem }) => {
  const deleteItem = () => {
    const index = list.findIndex((e) => e === element);
    const tmp = [...list];
    tmp.splice(index, 1);
    setList(tmp);
  };
  const ValidItem = () => {
    const index = list.findIndex((e) => e === element);
    const tmp = [...list_valid, list[index]];
    setValidItem(tmp);
    deleteItem(index);
  };
  return (
    <View>
      <View style={styles.item}>
        <TouchableOpacity onPress={() => ValidItem()}>
          <Ionicons name="checkmark-circle-outline" size={18} />
        </TouchableOpacity>
        <Text style={styles.text}>{element.text}</Text>
        <TouchableOpacity onPress={() => deleteItem()}>
          <FontAwesome name="trash" size={18} />
        </TouchableOpacity>
      </View>
      <View style={styles.desc}>
        <Text style={styles.descText}>{element.description}</Text>
      </View>
    </View>
  );
};

const ListValidItem = ({ element, list_valid, list, setListValid, setNoListValid }) => {
  const deleteValidItem = () => {
    const index = list_valid.findIndex((e) => e === element);
    const tmp = [...list_valid];
    tmp.splice(index, 1);
    setListValid(tmp);
  };
  const NoValidItem = () => {
    const index = list_valid.findIndex((e) => e === element);
    const tmp = [...list, list_valid[index]];
    setNoListValid(tmp);
    deleteValidItem(index);
  };
  return (
    <View>
      <View style={styles.item}>
        <TouchableOpacity onPress={() => NoValidItem()}>
          <Ionicons name="checkmark-circle" size={18} />
        </TouchableOpacity>
        <Text style={styles.textValid}>{element.text}</Text>
        <TouchableOpacity onPress={() => deleteValidItem()}>
          <FontAwesome name="trash" size={18} />
        </TouchableOpacity>
      </View>
      <View style={styles.desc}>
        <Text style={styles.descTextValid}>{element.description}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    marginLeft: 15,
    marginRight: 15,
    marginBottom: 2,
    borderRadius: 5,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  item_bis: {
    marginLeft: 15,
    marginRight: 15,
    marginBottom: 2,
    flexDirection: "row",
  },
  text: {
    fontSize: 18,
    fontFamily: "sans-serif-light",
  },
  textValid: {
    fontSize: 18,
    textDecorationLine: "line-through",
    color: "grey",
    fontFamily: "sans-serif-light",
  },
  desc: {
    alignItems: "center",
    marginBottom: 10,
    fontFamily: "Courier",
  },
  descText: {
    fontSize: 10,
    fontStyle: "italic",
    fontFamily: "sans-serif-light",
  },
  descTextValid: {
    fontSize: 10,
    fontStyle: "italic",
    textDecorationLine: "line-through",
    color: "grey",
    fontFamily: "sans-serif-light",
  },
});

export { ListItem, ListValidItem };
