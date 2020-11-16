import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

import CircleButton from '../elements/CircleButton';

const dateString = (date) => {
  if (date == null) { return ''; }
  const dateObject = date.toDate();
  return dateObject.toISOString().split('T')[0];
};

class MemoDetailScreen extends React.Component {
  state = {
    memo: {},
  }

  componentDidMount() {
    const { params } = this.props.navigation.state;
    this.setState({ memo: params.memo });
  }

  returnMemo(memo) {
    this.setState({ memo });
  }

  render() {
    const { memo } = this.state;
    return (
      <View style={styles.container}>
        <View>
          <View style={styles.memoHeader}>
            <View>
              <Text style={styles.memoHeaderTitle}>{String(memo.body).substring(0, 10)}</Text>
              <Text style={styles.memoHeaderDate}>{dateString(memo.createdOn)}</Text>
            </View>
          </View>
        </View>

        <View style={styles.memoContent}>
          <Text style={styles.memoBody}>
            {memo.body}
          </Text>
        </View>

        <CircleButton
          name="pencil"
          color="white"
          style={styles.editButton}
          onPress={() => { this.props.navigation.navigate('MemoEditScreen', { ...memo, returnMemo: this.returnMemo.bind(this) }); }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  editButton: {
    position:'absolute',
    top:48,
    height:56,
    width:56,
  },
  container: {
    flex: 1,
    width: '100%',
  },
  memoHeader: {
    height: 130,
    backgroundColor: '#095314',
    justifyContent: 'center',
    paddingLeft: 15,
  },
  memoHeaderTitle: {
    fontSize: 25,
    color: '#FFF',
    fontWeight: 'bold',
    marginBottom: 4,
  },
  memoHeaderDate: {
    fontSize: 12,
    color: '#fff',
  },
  memoContent: {
    paddingTop: 30,
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 20,
    backgroundColor: '#fff',
    flex: 1,
  },
  memoBody: {
    lineHeight:22,
    fontSize:15,
  },
});

export default MemoDetailScreen;
