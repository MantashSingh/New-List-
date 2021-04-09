import React, {Component} from 'react';
import {Text, StyleSheet, View, FlatList} from 'react-native';
import ChatCard from '../../Component/ChatCard';
import Header from '../../Component/Header';
import imagePath from '../../constants/imagePath';
import strings from '../../constants/lang';
import navigationStrings from '../../constants/navigationStrings';
import actions from '../../redux/actions';


export default class Messages extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: []
      
    };
  }

  componentDidMount(){
    actions.getAllConversations()
    .then(res=>{
      this.setState({data:res.data})
      console.log(res , "=================getAllConversations=========")
    })
    .catch(err=>{
      console.log(err)
    });
  }

  _openDrawer = () => {
    const {navigation} = this.props;
    navigation.openDrawer();
  };
  _onNevigation=(obj)=>{
    this.props.navigation.navigate( navigationStrings.CHAT, {
        data: obj , 
      });
      
  }




  render() {
      const{data} = this.state

    return (
      <View style={{flex:1}}>
        <Header
          textData={strings.MESSAGES}
          showDrawer={'true'}
          _openDrawer={this._openDrawer}
        />
        <FlatList
          data={data}
          showsVerticalScrollIndicator={false}
          numColumns={1}
          keyExtractor={item => item._id}
          //   ItemSeparatorComponent={() => <View style={{marginTop:10}} />}
          renderItem={({item}) => <ChatCard data={item} _onNevigation={this._onNevigation}/>}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({});
