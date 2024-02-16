import React from 'react';
import {Text} from 'react-native';
import PropTypes from 'prop-types';

const Title = props => {
  return <Text style={
      {fontFamily: 'Inter-Black',fontSize: 25,color:'#022150'}}>
      {props.title}
    </Text>;
};
Title.propTypes = {
    title: PropTypes.string.isRequired,
}

export default Title;