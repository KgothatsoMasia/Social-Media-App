import {StyleSheet} from 'react-native';
import getFontFamily from '../../android/app/src/main/assets/fonts/helper';
import {scaleFonSize} from '../../assets/scaling';

const Style = StyleSheet.create({
  title: {
    color: '#022150',
    fontFamily: getFontFamily('bold'),
    fontWeight: '600',
    fontSize: scaleFonSize(24),
  },
});

export default Style;
