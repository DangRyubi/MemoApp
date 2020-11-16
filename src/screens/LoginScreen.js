import React from 'react';
// import firebase from 'firebase';
import {
  StyleSheet, View, TextInput, TouchableHighlight, Text, TouchableOpacity,
} from 'react-native';
import firebase from 'firebase';
// import { NavigationActions } from '@react-navigation/compat';

class LoginScreen extends React.Component {
  state = {
    email: 'user@example.com',
    password: 'hjd133',
  }
  // eslint-disable-next-line
handleSubmit() {
    firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
      .then(() => {
        this.props.navigation.navigate('Home');
        /*
        const resetAction = NavigationActions.reset({
          index: 0,
          actions: [
            NavigationActions.navigate({ routeName: 'Home' }),
          ],
        });
        this.props.navigation.dispatch(resetAction);
        */
      })
      .catch(() => {
      });
  }

  handlePress() {
    this.props.navigation.navigate('SignupScreen');
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>
          ログイン
        </Text>
        <TextInput
          style={styles.input}
          value={this.state.email}
          onChangeText={(text) => { this.setState({ email: text }); }}// state の値を変える方法（決まり）
          autoCapitalize="none"
          autoCorrect={false}
          placeholder="Email Address"
        />
        <TextInput
          style={styles.input}
          value={this.state.password}
          onChangeText={(text) => { this.setState({ password: text }); }}
          autoCapitalize="none"
          autoCorrect={false}
          placeholder="Password"
          secureTextEntry
        />

        <TouchableHighlight
          style={styles.button}
          onPress={this.handleSubmit.bind(this)}
        >
          <Text style={styles.buttonTitle}>ログインする</Text>
        </TouchableHighlight>

        <TouchableOpacity
          style={styles.signUp}
          onPress={this.handlePress.bind(this)}
        >
          <Text style={styles.signUpText}>メンバー登録</Text>
        </TouchableOpacity>
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
  signUp: {
    marginTop: 16,
    alignSelf: 'center',
  },
  signUpText: {
    fontSize: 16,
  },
});

export default LoginScreen;
