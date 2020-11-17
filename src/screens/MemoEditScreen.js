import React from 'react';
import {
  StyleSheet, KeyboardAvoidingView, TextInput, Platform,
} from 'react-native';
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
  }

  async handlePress() {
    const { currentUser } = firebase.auth();
    const newDate = firebase.firestore.Timestamp.now();
    if (currentUser !== null && currentUser !== undefined) {
      const db = firebase.firestore();
      const memoRef = db.collection(`users/${currentUser.uid}/memos`).doc(this.state.key);
      // eslint-disable-next-line
      const res = await memoRef
        .update({
          body: this.state.body,
          createdOn: newDate,
        })
        .then(() => {
          const { navigation } = this.props;
          navigation.state.params.returnMemo({
            body: this.state.body,
            key: this.state.key,
            createdOn: newDate,
          });
          navigation.goBack();
        })
        .catch(() => {
        });
    }
  }

  render() {
    if (this.state == null) { return null; }

    return (
      <KeyboardAvoidingView style={styles.container} behavior={Platform.OS === 'ios' ? 'padding' : 'height'} keyboardVerticalOffset={80} boolean="true">
        <TextInput
          style={styles.memoEditInput}
          multiline
          value={this.state.body}
          onChangeText={(text) => { this.setState({ body: text }); }}
          underlineColorAndroid="transparent"
          textAlignVertical="top"
        />
        <CircleButton name="check" onPress={this.handlePress.bind(this)} />
      </KeyboardAvoidingView>
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
