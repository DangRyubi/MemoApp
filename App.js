import React from 'react';
import { StyleSheet, View } from 'react-native';

import Appbar from './src/components/AppBar';
import MemoList from './src/components/MemoList';
import CircleButton from './src/elements/CircleButton';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>

        <Appbar />
        <MemoList />
        <CircleButton>
          +
        </CircleButton>

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
