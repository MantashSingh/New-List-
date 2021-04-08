import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'


import { GiftedChat } from 'react-native-gifted-chat';
import Header from '../../Component/Header';
import navigationStrings from '../../constants/navigationStrings';


export default class Chat extends Component {
    
    constructor(props) {
        super(props);
        this.state = {messages: []};
        this.onSend = this.onSend.bind(this);
      }
      componentDidMount() {
        const{data} = this.props.route.params;
        this.setState({
          messages: [
            {
              _id: 1,
              text: 'Hello developer',
              createdAt: new Date(Date.UTC(2021, 7, 30, 17, 20, 0)),
              user: {
                _id: 2,
                name: 'React Native',
                avatar: data.profilePic,
              },
            },
          ],
        });
      }
      onSend(messages = []) {
        this.setState((previousState) => {
          return {
            messages: GiftedChat.append(previousState.messages, messages),
          };
        });
      }
   
    render() {
        const{data} = this.props.route.params;
        return (
            <>
            <Header textData={data.profileName}  _openDrawer={()=>{
                this.props.navigation.navigate( navigationStrings.MESSAGES)
            }}/>
                

                <GiftedChat
        messages={this.state.messages}
        onSend={this.onSend}
        user={{
          _id: 1,
        }}
      />
            </>
        )
    }
}

const styles = StyleSheet.create({})
