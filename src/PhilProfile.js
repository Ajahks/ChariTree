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
		
		{/*Header text with name*/}
		
		<Text style={styles.title}>user.name </Text>
		
		{/*Panel for account info*/}
		<View style={styles.profilePanel}>
		  <View style={styles.containerRow}>
		    <Image
		      style={{height: 128, width: 128}}
              source={require('../assets/ICN_USER.png')}
            />
			<View style = {{width: 20}}></View>
			<View style={styles.bioPanel}>
			  <Text style = {styles.bio}>Hello!  Welcome to my profile!  Please make yourself at home!</Text>
			</View>
		  </View>
		  
		  <View style = {{height: 20}}></View>
		  
		  <View style={styles.panelInfo}>
		    <Text style = {styles.titleSmall}>Contributed Value: $0.00</Text>
			<Text style = {styles.subtitle}>Favorite Charity: ...</Text>
			<View style = {{height: 20}}></View>
			<Text style = {styles.subtitle}>Interests: </Text>
			<Text style = {styles.subtitle}>#interest1 #interest2 #interest3</Text>
			<Text style = {styles.subtitle}>#interest4 #interest5 #interest6</Text>
			
			<View style = {{height: 20}}></View>
			<Text style = {styles.subtitle}>Account Created: MM/DD/YYYY</Text>
		  </View>
		  <View style = {{height: 30}}></View>
		  <TouchableOpacity style={styles.btn}
            onPress={() => {
            user.password = this.state.text;
            this.props.navigation.setParams({user: user});
            this.props.navigation.navigate('CreateAccount', {user});
          }}>
			<Image style={styles.btnImgLong} source={require("../assets/BTN_TEMPLATE_RED.png")}/>
            <View style={styles.btnText}>
              <Text style={styles.btnFont}>Log Out</Text>
            </View>
          </TouchableOpacity>
		</View>
	  </View>
    );
  }
  
  
}