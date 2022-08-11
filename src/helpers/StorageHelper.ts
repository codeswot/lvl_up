import AsyncStorage from '@react-native-async-storage/async-storage';

interface KEYS {
  USER: string;
  accessToken: string;
}

const StorageKeys: KEYS = {
  USER: 'user',
  accessToken: 'persist:auth',
};

async function saveItem(key: string, value: any): Promise<boolean> {
  try {
    await AsyncStorage.setItem(key, JSON.stringify(value)).then();
    return true;
  } catch (error) {
    console.log('Error');
    return false;
  }
}

async function removeItem(key: string): Promise<boolean> {
  try {
    await AsyncStorage.removeItem(key);
    return true;
  } catch (exception) {
    return false;
  }
}

async function getItem(key: string): Promise<any> {
  try {
    const value = await AsyncStorage.getItem(key);
    if (value !== null) {
      return JSON.parse(value);
    } else {
      return false;
    }
  } catch (error) {
    console.log(error);
    return false;
  }
}
const clearStorage = async (): Promise<void> => {
  AsyncStorage.clear();
};

export default {
  removeItem,
  StorageKeys,
  getItem,
  saveItem,
  clearStorage,
};
