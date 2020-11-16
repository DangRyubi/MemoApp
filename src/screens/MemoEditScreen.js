import React from 'react';
import { StyleSheet, View, TextInput } from 'react-native';
import firebase from 'firebase';
import CircleButton from '../elements/CircleButton';

class MemoEditScreen extends React.Component {
  state = {
    body: '',
    key: '',
  }

  async componentDidMount() {
    const { params } = this.props.navigation.state;
    await this.setState({
      body: params.body,
      key: params.key,
    });
    console.log(this.state.body);
  }

  async handlePress() {
    console.log('pressed');
    const { currentUser } = firebase.auth();
    if (currentUser !== null && currentUser !== undefined) {
      const db = firebase.firestore();
      console.log(currentUser.uid);
      console.log(this.state.key);
      const memoRef = db.collection(`users/${currentUser.uid}/memos`).doc(this.state.key);
      const res = await memoRef
        .update({
          body: this.state.body,
        })
        .then(() => {
          console.log('success!');
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }

  render() {
    if (this.state == null) { return null; }

    return (
      <View style={styles.container}>
        <TextInput
          style={styles.memoEditInput}
          multiline
          value={this.state.body}
          onChangeText={(text) => { this.setState({ body: text }); }}
        />
        <CircleButton name="check" onPress={this.handlePress.bind(this)} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
  },
  memoEditInput: {
    backgroundColor: '#ddd',
    flex: 1,
    paddingTop: 32,
    paddingLeft: 16,
    paddingRight: 16,
    paddingBottom: 16,
  },
});

export default MemoEditScreen;
