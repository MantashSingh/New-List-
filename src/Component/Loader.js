
import React, { Component } from "react";
import { ActivityIndicator, StyleSheet, Text, View } from "react-native";
export default function Loader({isvalid , loadColor , size}) {
    if (isvalid) {
        return (
            
                <View style={[styles.container, styles.horizontal]}>
                   
                    <ActivityIndicator size={!!size?size:"large"} color={!!loadColor?loadColor:"white"} />
                   
                </View>
        
        )
    }
    return(
        <View></View>
    )

}

const styles = StyleSheet.create({
    container: {
        
      flex: 1,
      justifyContent: "center",
      position:"absolute",
      
      flexDirection: "row",
      justifyContent: "space-around",
      
    width:"100%",
    height:"100%",
    
     
    //   bottom:400
      
    },
   
  });