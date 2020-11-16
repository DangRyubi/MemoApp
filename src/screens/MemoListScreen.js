import React from 'react';
import { StyleSheet, View } from 'react-native';
import firebase from 'firebase';
import MemoList from '../components/MemoList';
import CircleButton from '../elements/CircleButton';

class MemoListScreen extends React.Component {
  state = {
    memoList: [],
  }

  componentDidMount() {
    const { currentUser } = firebase.auth();
    const db = firebase.firestore();
    db.collection(`users/${currentUser.uid}/memos`)
      .onSnapshot((snapshot) => {
        const tempList = [];
        snapshot.forEach((doc) => {
          tempList.push({ ...doc.data(), key: doc.id }); // object 合体
        });
        this.setState({ memoList: tempList });
      });
    firebase.firestore().collection(`users/${currentUser.uid}/memos`);
  }

  // eslint-disable-next-line
  handlePress() {
    this.props.navigation.navigate('MemoCreateScreen');
  }

  render() {
    return (
      <View style={styles.container}>
        <MemoList memoList={this.state.memoList} navigation={this.props.navigation} />
        <CircleButton name="plus" onPress={this.handlePress.bind(this)} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
  },
});

export default MemoListScreen;
