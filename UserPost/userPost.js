import React from "react";
import PropTypes from "prop-types"
import {Image, Text, View} from "react-native";
import UserProfileImage from "../UserProfileImage/userprofileImage";
import {FontAwesomeIcon} from "@fortawesome/react-native-fontawesome";
import {faEllipsisH} from "@fortawesome/free-solid-svg-icons";
import userPostStyle from "./userPostStyle";
import {faBookmark, faHeart, faMessage} from "@fortawesome/free-regular-svg-icons";

const UserPost = props => {
  return (
    <View style={userPostStyle.userPostContainer}>
      <View style={userPostStyle.user}>
        <View style={userPostStyle.userContainer}>
          <UserProfileImage
            profileImage={props.profileImage}
            imageDimensions={48}
          />
          <View style={userPostStyle.userTextContainer}>
            <Text style={userPostStyle.username}>{props.firstName} {props.lastName}</Text>
            {props.location && <Text style={userPostStyle.location}>{props.location}</Text>}
          </View>
        </View>
        <FontAwesomeIcon icon={faEllipsisH} size={24} color={'#79869F'} />
      </View>
      <View style={userPostStyle.postImage}>
        <Image source={props.image} />
      </View>
      <View style={userPostStyle.userPostStats}>
        <View style={userPostStyle.heartIcon}>
          <FontAwesomeIcon icon={faHeart} color={'#79869F'} />
          <Text style={userPostStyle.iconText}>{props.likes}</Text>
        </View>
        <View style={userPostStyle.commentIcon}>
          <FontAwesomeIcon icon={faMessage} color={'#79869F'} />
          <Text style={userPostStyle.iconText}>{props.comments}</Text>
        </View>
        <View style={userPostStyle.bookmarkIcon}>
          <FontAwesomeIcon icon={faBookmark} color={'#79869F'} />
          <Text style={userPostStyle.iconText}>{props.bookmarks}</Text>
        </View>
      </View>
    </View>
 );
};

UserPost.propTypes = {
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  location: PropTypes.string,
  image: PropTypes.any.isRequired,
  profileImage: PropTypes.any.isRequired,
  likes: PropTypes.number.isRequired,
  comments: PropTypes.number.isRequired,
  bookmarks: PropTypes.number.isRequired,
}

export default UserPost;