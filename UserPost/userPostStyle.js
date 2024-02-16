import {StyleSheet} from "react-native";
import getFontFamily from "../../android/app/src/main/assets/fonts/helper";

const userPostStyle = StyleSheet.create({
  userContainer: {flexDirection: 'row'},
  userTextContainer: {justifyContent: 'center', marginLeft: 10},
  user: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  username: {
    color: '#000',
    fontFamily: getFontFamily('bold'),
    fontWeight: '600',
    fontSize: 16,
  },
  location: {
    color: '#79869F',
    fontFamily: getFontFamily('bold'),
    fontWeight: '400',
    fontSize: 12,
    marginTop: 5,
  },
  postImage: {
    alignItems: 'center',
    marginVertical: 20,
  },
  userPostContainer: {
    marginTop: 35,
    paddingBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#EFF2F6'
  },
  userPostStats: {flexDirection: 'row', marginLeft: 10},
  heartIcon: {flexDirection: 'row'},
  commentIcon: {flexDirection: 'row', marginLeft: 27},
  bookmarkIcon: {flexDirection: 'row', marginLeft: 27},

  iconText: {marginLeft: 3, color: '#79869F'}
});

export default userPostStyle;