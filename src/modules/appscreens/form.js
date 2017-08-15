import React, { PropTypes, Component } from 'react';
import {
    Text,
    View,
    TextInput,
    Button
} from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as homeActions from '../../actions/homeActions';
import styles from './styles/firstscreenstyles';
class form extends Component {
    render() {
        return(
            <View style={styles.container}>
                <Text>First Screen Content</Text>
                <TextInput title="What time did you go to sleep at"></TextInput>
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

// FirstScreen.navigatorStyle = {
// 	statusBarColor: 'black',
// 	statusBarTextColorScheme: 'light',
// 	navBarBackgroundColor: '#0a0a0a',
// 	navBarTextColor: 'white',
// 	navBarButtonColor: 'white'
// };


export default connect(mapStateToProps, mapDispatchToProps)(form);