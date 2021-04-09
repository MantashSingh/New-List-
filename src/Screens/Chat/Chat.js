import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'

import {connect} from 'react-redux';
import { GiftedChat } from 'react-native-gifted-chat';
import Header from '../../Component/Header';
import navigationStrings from '../../constants/navigationStrings';
import socketServices from '../../utils/socketService';
import actions from '../../redux/actions';
import { SOCKET_STRINGS } from '../../constants/socketStrings';
import imagePath from '../../constants/imagePath';

class Chat extends Component {
    
    constructor(props) {
        super(props);
        this.state = {messages: []};
        this.onSend = this.onSend.bind(this);
      }
      componentDidMount() {
        this.getChatListing();

        socketServices.on(SOCKET_STRINGS.RECEIVED_MESSAGE, this.onReceiveMessage);
        
      }
      // onSend(messages = []) {
      //   this.setState((previousState) => {
      //     return {
      //       messages: GiftedChat.append(previousState.messages, messages),
      //     };
      //   });
      // }
   

      onReceiveMessage = data => {
        const {
          commonConversationId,
          firstName,
          profileImg,
        } = this.props.route.params;
        const message = {
          _id: data._id,
          text: data.text,
          createdAt: data.createdAt,
          user: {
            _id: data.senderId,
            name: firstName,
            avatar: profileImg && profileImg[0].thumbnail,
          },
        };
        // console.log(data,"----------data")
        // console.log(commonConversationId,'the commonejoijoj');
        //To make sure that all the messages are seen if new message comes
    
        if (data.commonConversationId === commonConversationId) {
          socketServices.emit(SOCKET_STRINGS.SEEN_ALL_MESSAGES, {
            senderId: data.senderId,
            isRead: true,
            recieverId: data.recieverId,
          });
    
          this.setState(previousState => ({
            messages: GiftedChat.append(previousState.messages, message),
          }));
        }
      };
    

      onSend(messages = []) {
        if (String(messages[0].text).trim().length < 1) {
          return;
        }
        // const {_id, commonConversationId} = this.props.route.params;
        const {_id , commonConversationId} = this.props.route.params.data;

        const {userData} = this.props;
        // To send new message
        socketServices.emit(SOCKET_STRINGS.SEND_MESSAGE, {
          senderId: userData._id,
          recieverId: _id,
          commonConversationId,
          messageType: 'Text',
          text: messages[0].text,
        });
        this.setState(previousState => ({
          messages: GiftedChat.append(previousState.messages, messages),
        }));
      }
    

      getChatListing = () => {
        const{data} = this.props.route.params;


        actions.getConversationMessages(data.commonConversationId)
        .then(res => {
          const {userInfo} = this.props.route.params.data;
          //To send back response that all the messages have been seen;
          socketServices.emit(SOCKET_STRINGS.SEEN_ALL_MESSAGES, {
            senderId: data._id,
            isRead: true,
            recieverId: (this.props.userData && this.props.userData._id) || '',
          });

          //Initalizing the chat history
          const messages = res.data.map((data, index) => {
            let message = {
              _id: data._id,
              text: data.text,
              createdAt: data.createdAt,
              user: {
                _id: data.senderId._id,
                name: data.senderId.firstName,
                avatar: userInfo.profileImg[0].thumbnail,
              },
            };
            if (!!data.repliedToText) {
              message.replyText = data.repliedToText;
            }
            return message;
          });
          this.setState({isLoading: false, messages});
        })
        .catch(err=>{
          console.log(err , "CDM CHAT+++++++++++")
        })
      };


      goBack=()=>{
        this.props.navigation.navigate( navigationStrings.MESSAGES )
      }



    render() {
        const{data} = this.props.route.params;
        const{userData} = this.props
        return (
            <>
            <Header textData={data.userInfo.fullName}  _openDrawer={this.goBack}/>
                

                <GiftedChat
        messages={this.state.messages}
        onSend={this.onSend}
        user={{
          _id: userData._id,
        }}
      />
            </>
        )
    }
}

const styles = StyleSheet.create({})

const mapStateToProps = state => {
  return {
    userData: state.auth.userData,
  };
};

export default connect(mapStateToProps)(Chat);
