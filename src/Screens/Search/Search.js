import React, {Component} from 'react';
import {Text, StyleSheet, View, FlatList} from 'react-native';
import Header from '../../Component/Header';
import InfiniteListCard from '../../Component/InfiniteListCard';
import TextInputComponent from '../../Component/TextInputComponent';
import strings from '../../constants/lang';
import actions from '../../redux/actions';
import Loader from '../../Component/Loader';
import {getCurrentLocation} from '../../utils/healperFunctions';
import Geolocation from 'react-native-geolocation-service';
import {connect} from 'react-redux';
import { scale } from '../../styles/responsiveSize';

class Search extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchText: '',
      searchArray: [],
      isLoading: false,
      cord:[]
    };
  }
  

  _onSearchChangeText = value => {
    const {searchText , cord} = this.state;
    this.setState({searchText: value});

    getCurrentLocation()
      .then(res => {
        this.setState({cord:res})
        

      })
      .catch(err => {
        console.log(err, 'getCurrentLocation ...... error');
      });


    if (this.check) {
      clearTimeout(this.check);
    }

    this.check = setTimeout(() => {
      const {isLoading} = this.state;
      this.setState({isLoading: true});

        
     

      actions
        .search(searchText , cord)
        .then(res => {
          this.setState({searchArray: res.data, isLoading: false});
          console.log(this.state.searchArray, 'search class');
        })
        .catch(err => {
          console.log(err);
          this.setState({searchArray: [], isLoading: false});
        });
      // console.log(this.state.searchText)
    }, 600);
  };


  _openDrawer=()=>{
    const{navigation} = this.props
    navigation.openDrawer()
  }
  render() {
    const {themeColor} = this.props;
    const {searchArray, isLoading} = this.state;
    return (
      <View>
        <Header textData={strings.SEARCH} showDrawer={true}  _openDrawer={this._openDrawer}/>
        <View style={styles.searchWraper}>
          <TextInputComponent
            placeholder={strings.SEARCH}
            onChangeText={this._onSearchChangeText}
            marginHor={true}
          />
          <View style={styles.loader}>
            <Loader isvalid={isLoading} loadColor={'black'} size={"small"} />
          </View>
        </View>

        <FlatList
          data={searchArray}
          showsVerticalScrollIndicator={false}
          numColumns={2}
          keyExtractor={item => item._id}
          //   ItemSeparatorComponent={() => <View style={{marginTop:10}} />}
          renderItem={({item}) => <InfiniteListCard data={item} />}
        />
      </View>
    );
  }
}
const mapStateToProps = state => {
  return {
    themeColor: state.auth.themeColor,
  };
};

export default connect(mapStateToProps)(Search);

const styles = StyleSheet.create({
  searchWraper: {
    marginHorizontal:10
  },
  loader: {
    bottom: 25,
   left:scale(150)
  },
});
