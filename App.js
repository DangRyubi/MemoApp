import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import MemoListScreen from './src/screens/MemoListScreen';
import MemoDetailScreen from './src/screens/MemoDetailScreen';
import MemoEditScreen from './src/screens/MemoEditScreen';
import LoginScreen from './src/screens/LoginScreen';
import SignupScreen from './src/screens/SignupScreen';

const App = createStackNavigator({
  Home:             { screen: MemoListScreen },
  MemoDetailScreen: { screen: MemoDetailScreen },
  MemoEditScreen:   { screen: MemoEditScreen },
  LoginScreen:      { screen: LoginScreen },
  SignupScreen:     { screen: SignupScreen },
},
{
  defaultNavigationOptions: {
    headerTitle: 'Memot',
    headerStyle: {
      backgroundColor: '#09086E',
    },
    headerTitleStyle: {
      color: '#FFF',
      fontSize: 24,
    },
    headerTitleAlign: 'center',
  },
});

export default createAppContainer(App);
