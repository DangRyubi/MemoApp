import React from 'react';
import {
  StyleSheet, View, TextInput, TouchableHighlight, Text,
} from 'react-native';

class LoginScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>
          ログイン
        </Text>
        <TextInput style={styles.input} value="Email" />
        <TextInput style={styles.input} value="Password" />
        <TouchableHighlight style={styles.button} onPress={() => {}}>
          <Text style={styles.buttonTitle}>ログインする</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    padding: 24,
    backgroundColor: '#FFF',
  },
  title: {
    fontSize: 28,
    alignSelf: 'center',
    marginBottom: 24,
  },
  input: {
    backgroundColor: '#eee',
    height: 48,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: '#ddd',
    fontSize: 16,
    padding: 8,
  },
  button: {
    backgroundColor: '#09086E',
    height: 50,
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
    width: '70%',
    alignSelf: 'center',
  },
  buttonTitle: {
    color: '#FFF',
    fontSize: 18,
  },
});

export default LoginScreen;
