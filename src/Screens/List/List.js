import React, {Component} from 'react';
import {Text,ActivityIndicator, StyleSheet, View, FlatList, RefreshControl} from 'react-native';
import actions from '../../redux/actions';
import {showMessage, hideMessage} from 'react-native-flash-message';
import InfiniteListCard from '../../Component/InfiniteListCard'
import Header from '../../Component/Header';
import strings from '../../constants/lang';
import Loader from '../../Component/Loader';
import { connect } from 'react-redux';
import colors from '../../styles/colors';


class Cart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userArray: [],
      incressSkip: 0,
      isvalid:false,
       loading: false, // user list loading
      isRefreshing: false, //for pull to refresh
      isListEnd:false,
      isNoMoreData: false,
      isLoading: false,
      isLoadingMore: false,
      refreshing: false,
      searchText:""
    };
  }

  componentDidMount() {
    this.hitApiForUserData();
  }
  hitApiForUserData = (onEndReachCall = false) => {
    const {userArray, incressSkip , isvalid} = this.state;
    let calcSkip = onEndReachCall ?  userArray.length : 0;

    
    actions
      .UserData({ 
        searchType: 'LEADERBOARD',
        limit: '8',
        skip: calcSkip.toString(),
      })
      .then(res => {
        let updatedStateVar = {};
        if (res.data.length > 0) {
          let profilesData = onEndReachCall
            ? [...userArray, ...res.data]
            : res.data;

          updatedStateVar = {
            userArray: profilesData,
          };
        }else {
          updatedStateVar = {
            isListEnd: true,
            isNoMoreData: true,
          };
        }
        this.setState({
          ...updatedStateVar,
          
          isvalid:true,
          isRefreshing:false,
          isLoading: false,
          isLoadingMore: false,
          refreshing: false,
          
        });
        console.log(userArray.length)

        
      })
      .catch(error => {
        showMessage({
          type: 'danger',
          message: 'Login failed ',
        });
        this.setState({
          
          isRefreshing:false,
          isLoading: false, 
          isLoadingMore: false
          
        });

        console.log(error);
      });
  };

  _onLoading=()=>{
    
    const{isvalid} =this.state
    const{themeColor} = this.props
    return(
    <View style={{height:50}}>
      <Loader isvalid={true} loadColor={!!themeColor ? themeColor : colors.themeColor}/>
      
      </View>)    
  }

  onRefresh() {
    this.setState({ isRefreshing: true }); // true isRefreshing flag for enable pull to refresh indicator
    this.hitApiForUserData();
  }
  onEndReached = () => {
    const {isLoadingMore, isNoMoreData} = this.state;

    if (isLoadingMore || isNoMoreData) {
      return;
    }
    this.setState({isLoadingMore: true});
    this.hitApiForUserData(true);
  };
  _openDrawer=()=>{
    const{navigation} = this.props
    navigation.openDrawer()
  }

  render() {
    const {userArray , searchText} = this.state;
    const{themeColor} = this.props
    return (
      <View>
        {/* <Text onPress={this.hitApiForUserData}> hit</Text> */}
        <Header textData={strings.INFINITE_LIST} showDrawer={true}  _openDrawer={this._openDrawer}/>


        <FlatList
          data={userArray}
          // showsVerticalScrollIndicator={false}
          numColumns={2}
          keyExtractor={item => item._id}
          // ItemSeparatorComponent={() =>  />}
          renderItem={({item}) => <InfiniteListCard data={item} />}
          refreshControl={
            <RefreshControl
              refreshing={this.state.isRefreshing}
              onRefresh={this.onRefresh.bind(this)}
            />
          }
          
          onEndReached={this.onEndReached}
          ListFooterComponent={()=>this._onLoading()}
          onEndReachedThreshold={1}
         
        />
        
      </View>
    );
  }
}const mapStateToProps = state => {
  return {
    themeColor: state.auth.themeColor,
  };
};

export default connect(mapStateToProps)(Cart);

const styles = StyleSheet.create({});
