import React from "react";
import {Text} from "react-native";
import style from "./style.";


const MyText = () => {

    handleTextClick = () => {
        alert('text clicked')
    }


    return(
        <Text onPress={() => {handleTextClick()}} style={style.text}>Hello kgothatso!</Text >
    );
}

export default MyText;