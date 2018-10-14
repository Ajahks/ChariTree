import React from 'react';
import { StyleSheet, Text, View, Image, Button, Alert, TouchableOpacity, TextInput, Keyboard, TouchableWithoutFeedback, FlatList } from 'react-native';
import { createStackNavigator, } from 'react-navigation';
import styles from './styles.js'

export default class PhilProfileScreen extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = { text: '' };
  };

  /* vvv This disables the back button vvv */
  static navigationOptions = {
    headerLeft: null
  };
  render() {
    user = this.props.navigation.getParam('user', 'Error')

    return (
	  <View style={styles.container}>
		  {/*search nav bar*/}
		<View style={styles.containerRow}>
		  {/*Profile button*/}
		  <TouchableOpacity style={styles.btn} 
			onPress={() => {
			  this.props.navigation.navigate('MainPage');
			}}>
			<Image style={styles.btnSmall} source={require("../assets/ICN_PROFILE.png")}/>
		  </TouchableOpacity>
		  
		  {/* Spacer */}
		  <View style={{flex: 0.05}}>
		  </View>
		  
		  {/* Text Input */}
		  <TextInput 
		    style = {{flex: 0.85, height: 50, width: 350, borderColor: 'gray', borderWidth: 0,alignItems: 'center'}}
			keyboardShouldPersistTaps={'never'}
		    clearTextOnFocus
		    onChangeText={(text) => this.setState({text})}
		    placeholder = 'Search companies'
		    value ={this.state.text}
		  />
		
		  {/*Search Button*/}
		  <TouchableOpacity style={styles.btn} 
			onPress={() => {
			  this.props.navigation.navigate('MainPage');
			}}>
			<Image style={styles.btnSmall} source={require("../assets/ICN_SEARCH.png")}/>
		  </TouchableOpacity>
		</View>
		<Text style={styles.title}>USER'S NAME</Text>
		
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
    
        {/* Spacer */}
        <View style={styles.spacing}>
        </View>
    
        {/* Spacer */}
        <View style={styles.spacing}>
        </View>
    
        {/* Spacer */}
        <View style={styles.spacing}>
        </View>
		
      </View> 
    );
  }
  
  
}