import React, { PropTypes, Component } from 'react';
import {
    Text,
    View,
} from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as homeActions from '../../actions/homeActions';
import { Button } from 'react-native-elements'
class Home extends Component {

    constructor(props) {
        super(props);

        this.goToForm = this.goToForm.bind(this);
    }

    goToForm() {
        this.props.navigator.push({
            screen: 'app.form'
        })
    }

    render() {
        return(
            <View>
                <Button 
                    style={styles.newDay} 
                    title= 'New Day'
                    onPress= {this.goToForm}
                    />     
                <Button 
                    style={styles.viewStats}
                    title= 'View Stats'
                    onPress= {console.log('hello')}
                />
            </View>
        )
    }
}

const styles = {
    container: {
        flex: 1,
        backgroundColor: 'white'

    },

    newDay: {
        margin: 20,
    },

    viewStats:{
        margin: 20,
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

export default connect(mapStateToProps, mapDispatchToProps)(Home);