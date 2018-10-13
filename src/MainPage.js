import React from 'react';
import { StyleSheet, Text, View, Image, Button, Alert, TouchableOpacity, TextInput, Keyboard, TouchableWithoutFeedback } from 'react-native';
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
		  
		  {/* Spacer */}
		  <View style={{flex: 0.05}}>
		  </View>
		  
		  {/* Text Input */}
		  <TextInput 
		    style = {{flex: 0.85, height: 50, width: 350, borderColor: 'gray', borderWidth: 0}}
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
    height: 30,
    width: 30	
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
