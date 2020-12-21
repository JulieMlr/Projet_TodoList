import React, { Component } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  ScrollView,
  TextComponent,
  Button,
  TouchableWithoutFeedbackBase,
} from "react-native";

function TodoScreen(props) {
  const list = props.list;

  const ListItem = (index, text) => {
    return (
      <View style={styles.item}>
        <Text style={{ fontSize: 15 }}>{text}</Text>
        
      </View>
    );
  };
  const Todo = () => {
    return (
      <View style={styles.fond}>
        <Text> En cours </Text>
        {list.map((element, index) => {
          return ListItem(index, element);
        })}
      </View>
    );
  };

  return (
      <View> 
          <Todo key="Todo"/>
      </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#efefef",
    width: "100%",
    height: "100%",
    marginTop: "10%",
    justifyContent: "center",
  },
  item: {
    backgroundColor: "white",
    marginLeft: 15,
    marginRight: 15,
    marginBottom: 2,
    borderRadius: 5,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  button: {
    padding: 12,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FF7C5F",
    marginBottom: 5,
    marginRight: 20,
    marginLeft: 20,
    borderRadius: 5,
  },
  input: {
    height: 30,
    marginHorizontal: 5,
    paddingHorizontal: 5,
    marginBottom: 5,
    borderColor: "lightgrey",
  },
  fond: {
    marginLeft: 5,
    marginRight: 5,
    borderRadius: 5,
    backgroundColor: "#DCDCDC",
    marginBottom: 10,
  },
});

export default TodoScreen;