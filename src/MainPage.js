import React from 'react';
import { StyleSheet, Text, View, Image, Button, Alert, TouchableOpacity, TextInput } from 'react-native';
import { createStackNavigator, } from 'react-navigation';

export default class MainPageScreen extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = { text: '' };
  } 
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
		  
		  {/* Text Input */}
		  <TextInput
		    style = {{height: 50, width: 300, borderColor: 'gray', borderWidth: 0}}
		    clearTextOnFocus
		    onChangeText={(text) => this.setState({text})}
		    placeholder = 'Username, Companyname, ...'
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
    
        {/* Spacer */}
        <View style={styles.spacing}>
        </View>
    
      </View> 
    );
  }
  
  
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
    flexDirection: 'column'
  
  },
  containerRow: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row'
  },
  
  titlePnl: {
  alignItems: 'center',
  
  },
  spacing: {
  flex: 0.1,
  },
  logo: {
    width: 225,
  height: 225
  },
  
  btn: {
    shadowColor: '#303838',
    shadowOffset: { width: 0, height: 5 },
    shadowRadius: 10,
    shadowOpacity: 0.35,
  },
  btnImgLong: {
    height: 75,
    width: 225  
  },
  btnSmall: {
    height: 50,
    width: 50	
  },
  btnText: {
  position: 'absolute',
  height: 75,
  width: 225,
  alignItems: 'center',
  justifyContent: 'center',
  },
  
  //text
  title: {
  fontWeight: 'bold',
  fontSize: 30,
  },
  subtitle: {
  fontWeight: 'normal',
  fontSize: 20,
  },
  btnFont: {
  fontWeight: 'bold',
  fontSize: 17,
  color: 'white',
  }
});
