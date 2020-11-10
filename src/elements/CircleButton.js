import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

class CircleButton extends React.Component {
  render() {
    const { style, color } = this.props;

    let bgColor = '#D74B4B';
    let textColor = '#FFF';

    if (color === 'white') {
      bgColor = '#FFF';
      textColor = '#D74B4B';
    }

    return ( // 左、右順で上書き
      <View style={[styles.circleButton, style, { backgroundColor: bgColor }]}>
        <Text style={[styles.circleButtonTitle, { color: textColor }]}>
          {this.props.children}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  circleButton: {
    position: 'absolute',
    bottom: 32,
    right: 32,
    width: 56,
    height: 56,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 28,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  circleButtonTitle: {
    fontSize: 35,
    color: '#FFF',
  },
});
export default CircleButton;
