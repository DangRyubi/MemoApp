import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import firebase from 'firebase';
import MemoListScreen from './src/screens/MemoListScreen';
import MemoDetailScreen from './src/screens/MemoDetailScreen';
import MemoEditScreen from './src/screens/MemoEditScreen';
import LoginScreen from './src/screens/LoginScreen';
import SignupScreen from './src/screens/SignupScreen';
import MemoCreateScreen from './src/screens/MemoCreateScreen';

import ENV from './env.json';

// eslint-disable-next-line
require("firebase/firestore");

const firebaseConfig = {
  apiKey: ENV.FIREBASE_API_KEY,
  authDomain: ENV.FIREBASE_AUTH_DOMAIN,
  databaseURL: ENV.FIREBASE_DB_URL,
  projectId: ENV.FIREBASE_PRJ_ID,
  storageBucket: ENV.FIREBASE_STORAGE,
  messagingSenderId: ENV.FIREBASE_SENDER_ID,
  appId: ENV.FIREBASE_APPID,
  measurementId: ENV.FIREBASE_MEASUREMENT_ID,
};
if (firebase.apps.length === 0) {
  firebase.initializeApp(firebaseConfig);
}
const App = createStackNavigator({
  LoginScreen:      { screen: LoginScreen },
  SignupScreen:     { screen: SignupScreen },
  MemoCreateScreen:   { screen: MemoCreateScreen },
  Home:             { screen: MemoListScreen },
  MemoDetailScreen: { screen: MemoDetailScreen },
  MemoEditScreen:   { screen: MemoEditScreen },
},
{
  defaultNavigationOptions: {
    headerTitle: 'QuickRide',
    headerStyle: {
      backgroundColor: '#09086E',
    },
    headerTitleStyle: {
      color: '#FFF',
      fontSize: 24,
    },
    headerTitleAlign: 'center',
    headerBackTitle:  ' ',
    headerTintColor: '#FFF',
  },
});

export default createAppContainer(App);
