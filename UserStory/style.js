import {StyleSheet} from "react-native";
import getFontFamily from "../../android/app/src/main/assets/fonts/helper";

const userStyle = StyleSheet.create({
  storyContainer: {
    marginRight: 20,
  },
  firstName: {
    textAlign: 'center',
    marginTop: 8,
    fontFamily: getFontFamily('Bold'),
    fontWeight: '500',
    fontSize: 14,
    color: '#022150'
  },

});

export default userStyle;