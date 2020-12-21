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
import { FontAwesome } from "@expo/vector-icons";
import DoneScreen from "./DoneScreen";
import TodoScreen from "./TodoScreen";
import { Ionicons } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { observable, computed } from "mobx";

export default class All extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
      text: "",
      list_valid: [],
      description: "",
      listDescription: [],
    };
  }

storeData = async () => {
  await AsyncStorage.setItem("List", this.state.list);
}

getData = async () => {
  const value = await AsyncStorage.getItem("List");
  const value_bis = JSON.parse(value);
  return value_bis;
}

  ListItem = (index, text) => {
    return (
      <View key={index}>
        <View style={styles.item}>
          <TouchableOpacity onPress={() => this.ValidItem(index, text)}>
            <Ionicons name="checkmark-circle-outline" size={18} />
          </TouchableOpacity>
          <Text style={{ fontSize: 18 }}>{text}</Text>
          <TouchableOpacity onPress={() => this.deleteItem(index)}>
            <FontAwesome name="trash" size={18} />
          </TouchableOpacity>
        </View>
        <View style={styles.desc}>
          <Text style={styles.descText}> {this.state.listDescription[index]}</Text>
        </View>
      </View>
    );
  };


  ListValidItem = (index, text) => {
    return (
      <View style={styles.item} key={index}>
        <Ionicons name="checkmark-circle" size={18} color="grey" />
        <Text
          style={{
            fontSize: 18,
            textDecorationLine: "line-through",
            color: "grey",
          }}
        >
          {text}
        </Text>
        <TouchableOpacity onPress={() => this.deleteValidItem(index)}>
          <FontAwesome name="trash" size={18} color="grey" />
        </TouchableOpacity>
      </View>
    );
  };

  deleteItem = (index) => {
    const tmp = [...this.state.list];
    const tmp_des = [...this.state.listDescription];
    tmp.splice(index, 1);
    tmp_des.splice(index, 1);
    this.setState({ list: tmp, listDescription: tmp_des });
  };

  deleteValidItem = (index) => {
    const tmp = [...this.state.list_valid];
    tmp.splice(index, 1);
    this.setState({ list_valid: tmp });
  };

  addItem = () => {
    const tmp = [...this.state.list];
    const tmp_des = [...this.state.listDescription];
    tmp.push(this.state.text);
    tmp_des.push(this.state.description);
    this.setState({ list: tmp, text: "", listDescription: tmp_des });
  };

  ValidItem = (index, text) => {
    this.deleteItem(index);
    const tmp = [...this.state.list_valid];
    tmp.push(text);
    this.setState({ list_valid: tmp });
  };

  Done = () => {
    return (
      <View style={styles.fond}>
        {this.state.list_valid.map((element, index) => {
          return this.ListValidItem(index, element);
        })}
      </View>
    );
  };

  Todo = () => {
    return (
      <View style={styles.fond}>
        {this.state.list.map((element, index) => {
          return this.ListItem(index, element);
        })}
      </View>
    );
  };

  Bouton = () => {
    return (
      <View style={styles.button}>
        <TextInput
          placeholder="Ajouter une tâche"
          style={styles.input}
          value={this.text}
          onChangeText={(value) => {
            this.setState({ text: value });
          }}
        />
        <TextInput
          placeholder="Ajouter une description"
          style={styles.input}
          value={this.description}
          onChangeText={(value) => {
            this.setState({ description: value });
          }}
        />
        <TouchableOpacity onPress={this.addItem}>
          <Ionicons key="icon" name="add" size={30} color="purple" />
        </TouchableOpacity>
      </View>
    );
  };

  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
        <this.Todo key="todo" />
        <this.Done key="done" />
        {this.Bouton()}
        {/*<DoneScreen key="doneScreen" list_valid={this.state.list_valid} />
        <TodoScreen key="todoScreen" list={this.state.list} />*/}
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    height: "100%",
    marginTop: "10%",
    fontFamily: "Courier"
  },
  item: {
    marginLeft: 15,
    marginRight: 15,
    marginBottom: 2,
    borderRadius: 5,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  button: {
    padding: 12,
    flexDirection: "column",
    alignItems: "center",
    marginBottom: 5,
    marginRight: 20,
    marginLeft: 20,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: "purple",
  },
  input: {
    height: 30,
    marginHorizontal: 5,
    paddingHorizontal: 5,
    marginBottom: 5,
  },
  fond: {
    marginLeft: 5,
    marginRight: 5,
    borderRadius: 5,
    marginBottom: 10,
  },
  desc: {
    alignItems: "center",
    marginBottom:10,
    fontFamily: "Courier"
  },
  descText: {
    fontSize: 10,
    fontStyle: "italic"
  }
});
