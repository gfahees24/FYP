import * as React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import LoadingScreen from './screens/LoadingScreen';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import HomeScreen from './screens/HomeScreen';
import * as firebase from 'firebase';

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: 'AIzaSyB-FXSAhmUkIysEEMiiY87l1GB1zBsOfm4',
  authDomain: 'brandor-494b0.firebaseapp.com',
  databaseURL: 'https://brandor-494b0.firebaseio.com',
  projectId: 'brandor-494b0',
  storageBucket: 'brandor-494b0.appspot.com',
  messagingSenderId: '415850213394',
  appId: '1:415850213394:web:84ecaefc30a266f6c7a8cb',
};
// Initialize Firebase

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}
const AuthStack = createStackNavigator({
  Register: RegisterScreen,
  Login: LoginScreen,
});

const AppStack = createStackNavigator({
  Home: HomeScreen,
});

export default createAppContainer(
  createSwitchNavigator(
    {
      Loading: LoadingScreen,
      App: AppStack,
      Auth: AuthStack,
    },
    {
      initialRouteName: 'Loading',
    }
  )
);
