// import { TestScheduler } from '@jest/core';
import React from 'react';
import {View, Text, StyleSheet, Image,Modal, TouchableOpacity, Alert, ScrollView} from 'react-native';
import ImagePath from '../constants/imagePath'
function ChatCard(props) {
  const {data,_onNevigation} = props;
  return (
    // styles.ChatCard
   <View>
       
       <TouchableOpacity  onPress={()=>_onNevigation(data)}>
       <View style={{flexDirection:'column'}}>
           <View style={{position:'relative'}}>
       
       
        <View style={styles.ChatCard}>
           
       <View style={styles.profileImage}>
           <Image source={data.profilePic} style={{width:70,height:70,borderRadius:50}}/>
       </View>
       <View style={{marginLeft:10,width:"55%"}}>
           <View style={{marginTop:15}}>
           <Text style={{fontWeight:'bold',fontSize:20,color:'#171717'}}>{data.profileName}</Text>
           </View>
           <View style={{marginTop:7}}>
           <Text style={{color:'#818181'}}>{data.ProfileDesc}</Text>
           </View>
       </View>
       <View>
           <View style={{marginVertical:15,}}>
               <Text style={{color:'#818181'}}>{data.profileTime}</Text>
           </View>
       </View>
       </View>
     


       </View>
       <View style={{width:'80%',height:1,backgroundColor:'#e8e8e8',marginLeft:'auto'}}></View>
       </View>
       </TouchableOpacity>
   </View>
        
       
  );
}
const styles=StyleSheet.create(
    {
        profileImage:
        {
           marginLeft:10,
           marginVertical:10
           
        },
        ChatCard:
        {
            flexDirection:'row',
            // position:'absolute'
        },
        unselect:
        {
            // backgroundColor:'red'
        }

    }
)




export default ChatCard;