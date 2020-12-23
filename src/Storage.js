import AsyncStorage from "@react-native-async-storage/async-storage";

const storeData = async (key, text) => {
    await AsyncStorage.setItem(key, text);
};

const getData = async (key) => {
  const value = await AsyncStorage.getItem(key);
  if (!value) {
    return [];
  }
  const value_bis = JSON.parse(value);
  return value_bis;
};

export {getData, storeData};