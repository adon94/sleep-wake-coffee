import React, { PropTypes, Component } from 'react';
import {
    Text,
    View,
    TextInput,
    Button,
    TouchableOpacity
} from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import DateTimePicker from 'react-native-modal-datetime-picker';

import * as homeActions from '../../actions/homeAction';
import styles from './styles/FirstScreenStyles';


class FirstScreen extends Component {

    state = {
    isDateTimePickerVisible: false,
    
  };

  _showBedTimePicker = () => this.setState({ isDateTimePickerVisible: true });

  _hideBedTimePicker = () => this.setState({ isDateTimePickerVisible: false });

  _handleBedTimePicked = (time) => {
    console.log('A date has been picked: ', time);
    this._hideBedTimePicker();
    this._goToWakePage();
  };

  _goToWakePage = () => {
      
  }

    render() {
        return(
            <View>
            {/* <View style={styles.container}>
                <TextInput placeholder="What time did you go to sleep up at?"
                 style={{borderColor: 'gray', borderWidth: 0, marginHorizontal: 20}}></TextInput>
            </View>
            <View style={styles.container}>
                <TextInput placeholder="What time did you wake up at?"
                 style={{borderColor: 'gray', borderWidth: 0, marginHorizontal: 20}}></TextInput>
            </View> */}
            
            <View style={styles.container}>
                <TouchableOpacity onPress={this._showBedTimePicker}>
                    <Text style={{height: 50, marginTop:20, textAlign: 'center'}}>Select bed time</Text>
                </TouchableOpacity>
                <DateTimePicker 
                mode="time" 
                isVisible={this.state.isDateTimePickerVisible}
                onConfirm={this._handleBedTimePicked}
                onCancel={this._hideBedTimePicker}/>
            </View>

            {/* <View style={styles.container}>
                <TouchableOpacity onPress={this._showDateTimePicker}>
                    <Text style={{height: 50, marginTop:20, textAlign: 'center'}}>Select wake time</Text>
                </TouchableOpacity>
                <DateTimePicker 
                mode="time" 
                isVisible={this.state.isDateTimePickerVisible}
                onConfirm={this._handleWakeTimePicked}
                onCancel={this._hideWakeTimePicker}/>
            </View> */}
            </View>
        )
    }
}

function mapStateToProps(state, ownProps) {
	return {
        courseData:state
	};
}

function mapDispatchToProps(dispatch) {
	return {
		actions: bindActionCreators(homeActions, dispatch)
	};
}

FirstScreen.navigatorStyle = {
	statusBarColor: 'black',
	statusBarTextColorScheme: 'light',
	navBarBackgroundColor: '#0a0a0a',
	navBarTextColor: 'white',
	navBarButtonColor: 'white'
};


export default connect(mapStateToProps, mapDispatchToProps)(FirstScreen);