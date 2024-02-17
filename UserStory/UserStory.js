import React from "react";
import PropTypes from "prop-types"
import {Text, View} from "react-native";
import userStyle from "./style";
import UserProfileImage from "../UserProfileImage/userprofileImage";
import {horizontalScale} from "../../assets/scaling";


const UserStory = props => {
  return (
    <View style={userStyle.storyContainer}>
      <UserProfileImage
        profileImage={props.profileImage}
        imageDimensions={horizontalScale(65)}
      />
      <Text style={userStyle.firstName}>{props.firstName}</Text>
    </View>
  );
};

UserStory.prototype = {
  firstName: PropTypes.string.isRequired,
  profileImage: PropTypes.any.isRequired
};

  export default UserStory;
