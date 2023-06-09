import React from "react";
import { View,Text } from "react-native";

//함수 컴포넌트
function Greeting(props){
  return (
  <>
    <View>
        <Text>안녕하세요 {props.name} ! </Text>
    </View>
    <Text>추가내용 입력하기!</Text>
  </>
  );
}
Greeting.defaultProps ={
  name : '리액트 네이티브',
};

export default Greeting;
