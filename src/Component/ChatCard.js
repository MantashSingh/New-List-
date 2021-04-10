// import { TestScheduler } from '@jest/core';
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  Modal,
  TouchableOpacity,
  Alert,
  ScrollView,
} from 'react-native';
import ImagePath from '../constants/imagePath';
import colors from '../styles/colors';

function ChatCard(props) {
  const {data, _onNevigation} = props;
  const time = data.updatedAt.substring(16, 11);

  return (
    // styles.ChatCard
    <View>
      <TouchableOpacity onPress={() => _onNevigation(data)}>
        <View style={styles.flexCol}>
          <View style={styles.positionRelative}>
            <View style={styles.ChatCard}>
              <View style={styles.profileImage}>
                <Image
                  source={{uri: data.userInfo.profileImg[0].thumbnail}}
                  style={styles.profileImg}
                />
              </View>
              <View style={styles.container}>
                <View style={styles.fullNameView}>
                  <Text style={styles.fullNameText}>
                    {data.userInfo.fullName}
                  </Text>
                </View>
                <View style={styles.lastMessageView}>
                  <Text style={styles.lastMessageText}>
                    {data.lastMessage[0].text}
                  </Text>
                </View>
              </View>
              <View>
                <View style={styles.timeView}>
                  <Text style={styles.timeText}>{time}</Text>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.separator}></View>
        </View>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  flexCol: {flexDirection: 'column'},
  positionRelative: {position: 'relative'},
  container: {marginLeft: 10, width: '55%'},
  fullNameView: {marginTop: 15},
  fullNameText: {fontWeight: 'bold', fontSize: 20, color: colors.chatName},
  lastMessageView: {marginTop: 7},
  lastMessageText: {color: colors.messageText},
  timeView: {marginVertical: 15},
  timeText: {color: colors.messageText},
  separator: {
    width: '80%',
    height: 1,
    backgroundColor: colors.separator,
    marginLeft: 'auto',
  },

  profileImage: {
    marginLeft: 10,
    marginVertical: 10,
  },
  profileImg: {width: 70, height: 70, borderRadius: 50},
  ChatCard: {
    flexDirection: 'row',
    // position:'absolute'
  },
  unselect: {
    // backgroundColor:'red'
  },
});

export default ChatCard;
