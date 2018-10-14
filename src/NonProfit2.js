import React from 'react';
import { StyleSheet, Text, View, WebView, Image, Button, Alert, TouchableOpacity, TextInput, Keyboard, TouchableWithoutFeedback, FlatList, ScrollView } from 'react-native';
import { createStackNavigator, } from 'react-navigation';
import styles from './styles.js'
import { Video } from 'expo';

export default class NonProfit2Screen extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = { text: '' };
  };

  /* vvv This disables the back button vvv */
  static navigationOptions = {
    headerLeft: null,
	title: 'CheriTree',
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
    
    <Text style={styles.title}>'American Red Cross'</Text>
    
    {/*Panel for account info*/}
    <View style={styles.profilePanel}>
      <Video
        source={require("../assets/americanRedCross.mp4")}
        shouldPlay
        resizeMode ="cover"
        style={{width:320, height:180}}
      />
    
      <View style = {{flex: 0.08}}></View>
      <Text style ={styles.mission}>Mission Statement: The American Red Cross prevents and alleviates human 
      suffering in the face of emergencies by mobilizing the power of volunteers and 
      the generosity of donors.​</Text>
	  <View style = {{flex: 0.08}}></View>
      <View style={styles.panelInfo}>
        <ScrollView>
          <Text style = {styles.list}>Title of Accomplishments</Text>
          <Text style ={styles.list}>1927: Provided relief for victims of the Mississippi River floods.</Text>
          <Text style ={styles.list}>1940: Developed first nationwide civilian blood program.</Text>
          <Text style ={styles.list}>1940: Provided relief for victims of severe drought and the Depression.</Text>
        </ScrollView>
      </View>
      <View style = {{flex: .1}}></View>

    <View style={styles.containerRow}>
      <TouchableOpacity style={styles.btn}
            onPress={() => {
            user.password = this.state.text;
            this.props.navigation.setParams({user: user});
            this.props.navigation.navigate('NonProfit2', {user});
          }}>
      <Image style={styles.btnImgMed} source={require("../assets/BTN_TEMPLATE_RED.png")}/>
            <View style={styles.btnTextSmaller}>
              <Text style={styles.btnFont}>Donate</Text>
            </View>
          </TouchableOpacity>

      <TouchableOpacity style={styles.btn}
            onPress={() => {
            user.password = this.state.text;
            this.props.navigation.setParams({user: user});
            this.props.navigation.navigate('NonProfit2', {user});
          }}>
      <Image style={styles.btnImgMed} source={require("../assets/BTN_TEMPLATE_RED.png")}/>
            <View style={styles.btnTextSmaller}>
              <Text style={styles.btnFont}>Subscribe</Text>
            </View>
          </TouchableOpacity>
    </View>

    </View>
    <Text style = {styles.description}>Account Created:</Text>
    <Text style = {styles.description}>10/14/2018</Text>

    </View>
    );
  }
  
  
}