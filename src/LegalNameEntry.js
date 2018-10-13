import React from 'react';
import { StyleSheet, Text, View, Image, Button, Alert, TouchableOpacity, TextInput } from 'react-native';
import { createStackNavigator, } from 'react-navigation';
import styles from './styles.js'

export default class LegalNameEntryScreen extends React.Component {

  constructor(props) {
    super(props);
    this.state = { text: '' };
  }

  render() {
    user = this.props.navigation.getParam('user', 'Error')

    return (
	<View style={styles.container}>

	  {/* Spacer */}
      <View style={styles.spacing}>
      </View>

	  {/* Spacer */}
      <View style={styles.spacing}>
      </View>

	  {/* Prompt */}
	  <View style={styles.titlePnl}>
        <Text style={styles.title}>What is your legal name</Text>
      </View>

      {/* Spacer */}
      <View style={styles.spacing}>
      </View>

	  {/* Spacer */}
	  <View style={styles.spacing}>
      </View>

	  {/* Text Input */}
	  <TextInput
	    style = {{height: 75, width: 300, borderColor: 'gray', borderWidth: 0}}
		clearTextOnFocus
		onChangeText={(text) => this.setState({text})}
		placeholder = 'John Smith'
		value ={this.state.text}
	  />


	  {/* Spacer */}
	  <View style={styles.spacing}>
      </View>

	  {/* Spacer */}
	  <View style={styles.spacing}>
      </View>

	  {/* Spacer */}
	  <View style={styles.spacing}>
      </View>

	  {/* Spacer */}
	  <View style={styles.spacing}>
      </View>


	  <View>
	    <TouchableOpacity style={styles.btn}
            onPress={() => {
              user.name = this.state.text;
              this.props.navigation.setParams({user: user});
              this.props.navigation.navigate('PhoneNumber', {user});
            }}>
		    <Image style={styles.btnImgLong} source={require("../assets/BTN_TEMPLATE.png")}/>
			  <View style={styles.btnText}>
				  <Text style={styles.btnFont}>Continue</Text>
			  </View>
		  </TouchableOpacity>
    </View>


	</View>
    );
  }

}

