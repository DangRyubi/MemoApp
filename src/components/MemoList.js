import React from 'react';
import {
  StyleSheet, View, Text, TouchableHighlight,
} from 'react-native';

class MemoList extends React.Component {
  renderMemo(memo) {
    return (
      <TouchableHighlight onPress={() => { this.props.navigation.navigate('MemoDetailScreen'); }}>
        <View style={styles.memoListItem}>
          <Text style={styles.memoTitle}>{memo.body}</Text>
          <Text style={styles.memoDate}>2020/11/12</Text>
        </View>
      </TouchableHighlight>
    );
  }

  render() {
    const list = [];
    this.props.memoList.forEach((memo) => {
      list.push(this.renderMemo(memo));
    });

    console.log(this.props.memoList);
    return (
      <View style={styles.memoList}>
        {list}
      </View>
    );
  }
}
const styles = StyleSheet.create({
  memoList: {
    width: '100%',
    flex: 1, // 画面いっぱいにします
  },
  memoListItem: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    backgroundColor: '#FFF',
  },
  memoTitle: {
    fontSize: 18,
    marginBottom: 4,
  },
  memoDate: {
    fontSize: 12,
    color: '#a2a2a2',
  },
});
export default MemoList;
