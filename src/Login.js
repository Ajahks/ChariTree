import React from 'react';
import { StyleSheet, Text, TextInput, View, Image, Button, Alert, TouchableOpacity } from 'react-native';
import { createStackNavigator,StackActions, NavigationActions } from 'react-navigation';

import styles from './styles.js'
import firebase from './firebase.js'


export default class LoginScreen extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
        email: "",
        password: ""
    };
  }

  render() {
    return (
	<View style={styles.container}>
	  {/* Spacer */}
      <View style={styles.spacing}>
      </View>

	  {/* Spacer */}
      <View style={styles.spacing}>
      </View>


	  <View style={styles.titlePnl}>
        <Text style={styles.title}>Welcome Back</Text>
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
		onChangeText={(email) => this.setState({email})}
		placeholder = 'email@example.com'
        value ={this.state.email}
	  />

      {/* Text Input */}
      <TextInput secureTextEntry={true}
        style = {{height: 75, width: 300, borderColor: 'gray', borderWidth: 0}}
      clearTextOnFocus
      onChangeText={(password) => this.setState({password})}
      placeholder = '*******'
      value ={this.state.password}
      />




	  {/* Spacer */}
	  <View style={styles.spacing}>
      </View>


	  {/* Spacer */}
	  <View style={styles.spacing}>
      </View>

	  <View>
	    <TouchableOpacity style={styles.btn}
            onPress={() => {
              this.props.navigation.navigate('MainPage');
            }}>
		    <Image style={styles.btnImgLong} source={require("../assets/BTN_TEMPLATE.png")}/>
			  <View style={styles.btnText}>
				  <Text style={styles.btnFont}>Login</Text>
			  </View>
		  </TouchableOpacity>
    </View>


	</View>
    );
  }


}
