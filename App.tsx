import React, { FC } from 'react';
import { StatusBar, LogBox, Text } from 'react-native';
import { Provider } from 'react-redux';
import store, { persistor } from '@redux/store';
import { PersistGate } from 'redux-persist/integration/react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import RootNavigator from '@routes';
import { color } from '@theme';
import 'react-native-gesture-handler';
import SuperTokens from 'supertokens-react-native';

SuperTokens.init({
  apiDomain: 'https://api.dev.levelupfitness.me',
  apiBasePath: '/auth',
});

LogBox.ignoreLogs(['Require cycle:']);
const App: FC = () => (
  <Provider store={store}>
    <PersistGate loading={<Text>Loading</Text>} persistor={persistor}>
      <SafeAreaProvider>
        <StatusBar barStyle="light-content" backgroundColor={color.primary} />
        <RootNavigator />
      </SafeAreaProvider>
    </PersistGate>
  </Provider>
);

export default App;
