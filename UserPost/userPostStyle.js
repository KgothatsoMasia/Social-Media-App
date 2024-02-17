import {StyleSheet} from 'react-native';
import getFontFamily from '../../android/app/src/main/assets/fonts/helper';
import {
  horizontalScale,
  scaleFonSize,
  verticalScale} from '../../assets/scaling';

const userPostStyle = StyleSheet.create({
  userContainer: {flexDirection: 'row'},
  userTextContainer: {
    justifyContent: 'center',
    marginLeft: horizontalScale(10)},
  user: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  username: {
    color: '#000',
    fontFamily: getFontFamily('bold'),
    fontWeight: '600',
    fontSize: scaleFonSize(16),
  },
  location: {
    color: '#79869F',
    fontFamily: getFontFamily('bold'),
    fontWeight: '400',
    fontSize: scaleFonSize(12),
    marginTop: verticalScale(5),
  },
  postImage: {
    alignItems: 'center',
    marginVertical: verticalScale(20),
  },
  userPostContainer: {
    marginTop: verticalScale(35),
    paddingBottom: verticalScale(20),
    borderBottomWidth: 1,
    borderBottomColor: '#EFF2F6'
  },
  userPostStats: {flexDirection: 'row', marginLeft: horizontalScale(10)},
  heartIcon: {flexDirection: 'row'},
  commentIcon: {flexDirection: 'row', marginLeft: horizontalScale(27)},
  bookmarkIcon: {flexDirection: 'row', marginLeft: horizontalScale(27)},

  iconText: {marginLeft: horizontalScale(3), color: '#79869F'}
});

export default userPostStyle;
