import React from "react";
import { StyleSheet, Image } from "react-native";
const Header = (props:any) => {
  
    return (
        <Image
        resizeMode="cover"
        style = {styles.logo}
        source={props.logo} />
    );
  };
  const styles = StyleSheet.create({
    logo: {
      margin: 16,
      marginLeft: 'auto',
      marginRight: 'auto',
      height: 100,
      width: 100,
      flex: 1,
    },
  });

  export default Header;