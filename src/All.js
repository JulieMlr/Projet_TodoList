import React, { Component } from "react";
import {
  View,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  ScrollView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { ListItem, ListValidItem } from "./ListItem";
import { storeData, getData } from "./Storage";

export default class All extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
      text: "",
      list_valid: [],
      description: "",
    };
  }

  componentDidMount() {
    getData("List").then((res_list) => {
      this.setState({ list: res_list });
    });
    getData("ListValid").then((res_list_valid) => {
      this.setState({ list_valid: res_list_valid });
    });
  }
  

  addItem = () => {
    const tmp = [...this.state.list];
    tmp.push({ text: this.state.text, description: this.state.description });
    this.setState({ list: tmp, text: "" }, () => {
      storeData("List", JSON.stringify(this.state.list));
    });
  };


  Done = () => {
    return (
      <View style={styles.fond}>
        {this.state.list_valid.map((element, index) => {
          return (
            <ListValidItem
              key={index}
              element={element}
              list_valid={this.state.list_valid}
              setListValid={(value) => {
                this.setState({ list_valid: value }, () => {
                  storeData("ListValid", JSON.stringify(this.state.list_valid));
                });
              }}
            />
          );
        })}
      </View>
    );
  };

  Todo = () => {
    return (
      <View style={styles.fond}>
        {this.state.list?.map((element, index) => {
          return (
            <ListItem
              key={index}
              element={element}
              list ={this.state.list}
              list_valid = {this.state.list_valid}
              setValidItem={(value) => {
                this.setState({ list_valid: value }, () => {
                  storeData("ListValid", JSON.stringify(this.state.list_valid));
                });
              }}
              setList={(value) => {
                this.setState({ list: value }, () => {
                  storeData("List", JSON.stringify(this.state.list));
                });
              }}
            />
          );
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
    fontFamily: "Courier",
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
});
