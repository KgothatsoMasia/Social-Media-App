import {StyleSheet} from "react-native";

const globalStyle = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginLeft: 27,
    marginRight: 17,
    marginTop: 30,
  },
  messageIcon: {
    padding: 14,
    borderRadius: 100,
    backgroundColor: '#F9FAFB'
  },
  messageNumberContainer: {
    position: 'absolute',
    backgroundColor: '#F35BAC',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    right: 10,
    top: 12,
    width: 10,
    height: 10,
    borderRadius: 10,
  },
  messageNumber: {
    color: 'white',
    fontSize: 6,
    fontWeight: '600',
  },
  userStoryContainer: {
    marginTop: 20,
    marginHorizontal: 28,
  },
  userPostContainer: {
    marginHorizontal:24
  },
});

export default globalStyle;
