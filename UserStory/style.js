import {StyleSheet} from "react-native";
import getFontFamily from "../../android/app/src/main/assets/fonts/helper";
import {horizontalScale, scaleFonSize, verticalScale} from "../../assets/scaling";

const userStyle = StyleSheet.create({
  storyContainer: {
    marginRight: horizontalScale(20),
  },
  firstName: {
    textAlign: 'center',
    marginTop: verticalScale(8),
    fontFamily: getFontFamily('Bold'),
    fontWeight: '500',
    fontSize: scaleFonSize(14),
    color: '#022150'
  },

});

export default userStyle;
