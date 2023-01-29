/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React, { ReactNode } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import { Provider } from 'react-redux';
import AdminScreen from './src/screens/AdminScreen';
import ClientScreen from './src/screens/ClientScreen';
import HomeScreen from './src/screens/HomeScreen';
import store from './src/store/store';

/* $FlowFixMe[missing-local-annot] The type annotation(s) required by Flow's
 * LTI update could not be added via codemod */

export type StackParams = {
  HomeScreen: undefined,
  AdminScreen: undefined,
  ClientScreen: undefined,
};

const Stack = createStackNavigator<StackParams>()

const App: () => ReactNode = () => {

  return (
    <Provider store={store}>
      <NavigationContainer>
        <StatusBar barStyle='dark-content'/>
        <Stack.Navigator initialRouteName ='HomeScreen' screenOptions={{headerShown: false}}>
          <Stack.Screen name="HomeScreen" component={HomeScreen} />
          <Stack.Screen name="AdminScreen" component={AdminScreen} options={{headerShown: true}}/>
          <Stack.Screen name="ClientScreen" component={ClientScreen} />
        </Stack.Navigator>
      </NavigationContainer>

    </Provider>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
