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

import DoneScreen from "./DoneScreen";
import TodoScreen from "./TodoScreen";

export default class All extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
      text: "",
      list_valid: [],
    };
  }

  ListItem = (index, text) => {
    return (
      <View style={styles.item}>
        <Text style={{ fontSize: 15 }}>{text}</Text>
        <TouchableOpacity onPress={() => this.deleteItem(index)}>
          <Text style={{ color: "red" }}>X Supprimer </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => this.ValidItem(index, text)}>
          <Text style={{ color: "blue" }}>X Valider </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => this.Detail(chat)}>
          <Text style={{ color: "blue" }}>X Detail </Text>
        </TouchableOpacity>
      </View>
    );
  };

  ListValidItem = (index, text) => {
    return (
      <View style={styles.item}>
        <Text style={{ fontSize: 15, marginLeft: 20 }}>{text}</Text>
      </View>
    );
  };

  Detail = (chat) => {
    const { text, index } = chat;
    alert("Description");
  };

  deleteItem = (index) => {
    const tmp = [...this.state.list];
    tmp.splice(index, 1);
    this.setState({ list: tmp });
  };

  addItem = () => {
    const tmp = [...this.state.list];
    tmp.push(this.state.text);
    this.setState({ list: tmp, text: "" });
  };

  ValidItem = (index, text) => {
    this.deleteItem(index);
    const tmp = [...this.state.list_valid];
    tmp.push(text);
    this.setState({ list_valid: tmp });
  };

  Done = () => {
    console.log("Done " + this.state.list.length);
    return (
      <View style={styles.fond}>
        <Text> Terminé </Text>
        {this.state.list_valid.map((element, index) => {
          return this.ListValidItem(index, element);
        })}
      </View>
    );
  };

  Todo = () => {
    console.log("Todo " + this.state.list.length);
    return (
      <View style={styles.fond}>
        <Text> En cours </Text>
        {this.state.list.map((element, index) => {
          return this.ListItem(index, element);
        })}
        {this.Bouton()}
      </View>
    );
  };

  Bouton = () => {
    return (
      <View>
        <TextInput
          placeholder="Ajouter une tâche"
          onFocus={() => this.setState({ placeholder: "Ajouter" })}
          style={styles.input}
          onChangeText={(value) => {
            this.setState({ text: value });
          }}
        />
        <TouchableOpacity
          style={styles.button}
          disabled={!this.state.text}
          onPress={this.addItem}
        >
          <Text style={{ color: "#4D4D4D", fontWeight: "bold", fontSize: 15 }}>
            Ajouter
          </Text>
        </TouchableOpacity>
      </View>
    );
  };

  render() {
    return (
      <View style={styles.container}>
        <this.Todo key="todo" />
        <this.Done key="done" />
        <DoneScreen key="doneScreen" list_valid={this.state.list_valid} />
        <TodoScreen key="todoScreen" list={this.state.list} list_valid={this.state.list_valid} />
      </View>
    );
  }
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
