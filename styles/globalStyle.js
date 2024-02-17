import {StyleSheet} from "react-native";
import {horizontalScale, scaleFonSize, verticalScale} from '../scaling';

const globalStyle = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginLeft: horizontalScale(27),
    marginRight: horizontalScale(17),
    marginTop: verticalScale(30),
  },
  messageIcon: {
    padding: horizontalScale(14),
    borderRadius: horizontalScale(100),
    backgroundColor: '#F9FAFB'
  },
  messageNumberContainer: {
    position: 'absolute',
    backgroundColor: '#F35BAC',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    right: horizontalScale(10),
    top: verticalScale(12),
    width: horizontalScale(10),
    height: horizontalScale(10),
    borderRadius: horizontalScale(10),
  },
  messageNumber: {
    color: 'white',
    fontSize: scaleFonSize(6),
    fontWeight: '600',
  },
  userStoryContainer: {
    marginTop: verticalScale(20),
    marginHorizontal: horizontalScale(28),
  },
  userPostContainer: {
    marginHorizontal: horizontalScale(24)
  },
});

export default globalStyle;
