import React from "react";
import {Image, View} from "react-native";
import PropTypes from "prop-types";
import profileStyle from "./style";

const UserProfileImage = props => {
  return (
    <View
      style={[profileStyle.userImageContainer,
        {borderRadius: props.imageDimensions}]}>
      <Image
        source={props.profileImage} 
        style={{width: props.imageDimensions,
        height: props.imageDimensions}}/>
    </View>
    );
}
UserProfileImage.propType = {
  profileImage: PropTypes.any.isRequired,
  imageDimensions: PropTypes.number.isRequired,
 };


export default UserProfileImage;
