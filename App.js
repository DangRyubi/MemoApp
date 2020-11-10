import React from 'react';
import { StyleSheet, View } from 'react-native';

import MemoEditScreen from './src/screens/MemoEditScreen';
import Appbar from './src/components/AppBar';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Appbar />
        <MemoEditScreen />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(3,15,101,0.05)',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 78,
  },

});
