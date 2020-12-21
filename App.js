import React, { Component } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import Ionicons from "react-native-vector-icons/Ionicons";
import { View, Text, StyleSheet, TextInput, Button } from "react-native";
import All from "./src/All";
import DoneScreenBis from "./src/DoneScreen";
import TodoScreenBis from "./src/TodoScreen";

const Tab = createBottomTabNavigator();
const HomeStack = createStackNavigator();
const SettingsStack = createStackNavigator();

function AllScreen() {
  return (
    <View style={{ flex: 1}}>
      <All/>
    </View>
  );
}

function DoneScreen() {
  return (
    <View
      style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
    >
      {/*<DoneScreenBis key="doneScreen" list_valid={this.state.list_valid} />*/}
    </View>
  );
}

function TodoScreen() {
  return (
    <View
      style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
    >
      {/*<TodoScreenBis key="todoScreen" list={this.state.list} />*/}
    </View>
  );
}

function AllStackScreen() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="All" component={AllScreen} />
    </HomeStack.Navigator>
  );
}

function DoneStackScreen() {
  return (
    <SettingsStack.Navigator>
      <SettingsStack.Screen name="Done" component={DoneScreen}/>
    </SettingsStack.Navigator>
  );
}

function TodoStackScreen() {
  return (
    <SettingsStack.Navigator>
      <SettingsStack.Screen name="Todo " component={TodoScreen} />
    </SettingsStack.Navigator>
  );
}


export default class App extends Component {

  render() {
    return (
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;

              if (route.name === "All") {
                iconName = focused ? "list" : "list";
              } else if (route.name == "Done") {
                iconName = focused ? "checkbox" : "checkbox";
              } else {
                iconName = focused ? "checkbox-outline" : "checkbox-outline";
              }
              return <Ionicons name={iconName} size={size} color={color} />;
            },
          })}
          tabBarOptions={{
            activeTintColor: "purple",
            inactiveTintColor: "black",
          }}
        >
          <Tab.Screen
            name="All"
            component={AllStackScreen}
            options={{ title: "All" }}
          />
          <Tab.Screen name="Done" component={DoneStackScreen}/>
          <Tab.Screen name="Todo" component={TodoStackScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    );
  }
}
