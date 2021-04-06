import React, {Component} from 'react';
import {
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
  Modal,
  FlatList,
} from 'react-native';
import actions from '../../redux/actions';
import CustomButton from '../../Component/CustomButton';
import Header from '../../Component/Header';
import strings from '../../constants/lang/index';
import ColorsModal from '../../Component/ColorsModal';





export default class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isMenuModalVisible: false,
      selected: '',
      colors: [
        {
          id: 0,
          name: 'Blue',
          colorId: '#a0c4ff',
        },
        {
          id: 1,
          name: 'Yellow',
          colorId: '#ffc300',
        },
        {
          id: 2,
          name: 'Pink',
          colorId: '#ff006e',
        },
        {
          id: 3,
          name: 'Black',
          colorId: '#212529',
        },
        {
          id: 4,
          name: 'Green',
          colorId: '#007f5f',
        },
        {
          id: 5,
          name: 'Orange',
          colorId: '#ff9100',
        },
      ],
    };
    
  }
 
  _onSelect = id => {
    this.setState({selected: id});
  };

  _openModal = () => {
    this.setState({isMenuModalVisible: true});
  };

  _closeModal = () => {
    this.setState({isMenuModalVisible: false});
  };


  _openDrawer=()=>{
    const{navigation} = this.props
    navigation.openDrawer()
  }
  render() {
    const {isMenuModalVisible, colors, selected} = this.state;

    return (
      <View style={{flex: 1}}>
        <Header
          textData={strings.PROFILE}
          showDrawer={true}  _openDrawer={this._openDrawer}/>
        <View style={styles.wraper}>
          <CustomButton
            buttonText={strings.LOG_OUT}
            onButtonCLick={() => actions.onLogout()}
          />
          <CustomButton
            buttonText={strings.CHANGE_THEME}
            onButtonCLick={() => this._openModal()}
          />
        </View>

        <Modal
          transparent
          onRequestClose={() => this._closeModal()}
          visible={isMenuModalVisible}>
          <View style={{flex: 1, backgroundColor: 'rgba(0,0,0,0.5)'}}>
            <FlatList
              data={colors}
              showsVerticalScrollIndicator={false}
              numColumns={2}
              keyExtractor={item => item.id}
              //   ItemSeparatorComponent={() => <View style={{marginTop:10}} />}
              renderItem={({item}) => (
                <ColorsModal
                  data={item}
                  onSelect={this._onSelect}
                  selected={selected}
                />
              )}
            />
          </View>
        </Modal>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  wraper: {
    marginTop: 'auto',
    marginBottom: 'auto',
  },
});
