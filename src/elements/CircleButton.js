import React from 'react';
import { StyleSheet, View, TouchableHighlight } from 'react-native';
import { AppLoading } from 'expo';
import * as Font from 'expo-font';
import { createIconSet } from '@expo/vector-icons';
import fontAwsome from '../../assets/fonts/fa-solid-900.ttf';

const CustomIcon = createIconSet(
  {
    pencil: '\uf303',
    plus: '\uf067',
    check: '\uf00c',
  }, 'FontAwsome',
);

class CircleButton extends React.Component { // フォント読み込み
  constructor(props) {
    super(props);
    this.state = { fontsLoaded: false };
  }

  async componentDidMount() {
    await Font.loadAsync({
      FontAwsome: fontAwsome,
    });

    this.setState({ fontsLoaded: true });
  }

  render() {
    const {
      name, style, color, onPress,
    } = this.props;

    let bgColor = '#D74B4B';
    let textColor = '#FFF';

    if (color === 'white') {
      bgColor = '#FFF';
      textColor = '#D74B4B';
    }

    return ( // 左、右順で上書き
      <TouchableHighlight style={[styles.container, style]} onPress={onPress} underlayColor="transparent">
        <View style={[styles.circleButton, style, { backgroundColor: bgColor }]}>
          {
          this.state.fontsLoaded ? (
            <CustomIcon
              name={name}
              style={[styles.circleButtonTitle, { color: textColor }]}
            />
          ) : <AppLoading />
          }
        </View>
      </TouchableHighlight>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 32,
    right: 32,
    width:56,
    height:105,
  },
  circleButton: {
    width: 56,
    height: 56,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 28,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation:4,
  },
  circleButtonTitle: {
    fontFamily: 'FontAwsome',
    fontSize: 24,
    lineHeight: 32,
  },
});
export default CircleButton;
