import React from 'react';
import { StyleSheet, Text, View, Image, Button, Alert, TouchableOpacity, TextInput, Keyboard, TouchableWithoutFeedback, FlatList } from 'react-native';
import { createStackNavigator, } from 'react-navigation';
import styles from './styles.js'

export default class MainPageScreen extends React.Component {
  
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
			  this.props.navigation.navigate('PhilProfile');
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
    
	    {/* Flatlist */}
		<FlatList
		    directionalLockEnabled={true}
		    ItemSeparatorComponent={ () => <View style={ { height: 10,} } /> }
          data={[
		    {key: 'American Heart Association',desc: 'From humble beginnings, the AHA has grown into the nation’s oldest and largest voluntary organization dedicated to fighting heart disease and stroke.', nav: 'NonProfit2'},
			{key: 'American Red Cross',desc: 'Our network of generous donors, volunteers and employees share a mission of preventing and relieving suffering, here at home and around the world.', nav: 'NonProfit2'},
            {key: 'Do Something',desc: 'Global organization with the goal of motivating young people to make positive change both online and offline through campaigns that make an impact.', nav: 'NonProfit2'},
            {key: 'Donors Choose',desc: 'Teachers and students all over the U.S. need your help to bring their classroom dreams to life. Get crayons, books, telescopes, field trips, and more for a classroom today.', nav: 'NonProfit2'}, 
            {key: 'Habitat for Humanity',desc: 'Habitat for Humanity is an organization that helps families build and improve places to call home. We believe affordable housing plays a critical role in strong and stable communities.',nav: 'NonProfit2'},
            {key: 'Make-A-Wish-Foundation',desc: 'Tens of thousands of volunteers, donors and supporters advance the Make-A-Wish® vision to grant the wish of every child diagnosed with a critical illness.', nav: 'NonProfit2'},
            {key: 'St. Judes Hospital',desc: 'The mission of St. Jude Children’s Research Hospital is to advance cures, and means of prevention, for pediatric catastrophic diseases through research and treatment.', nav: 'NonProfit2'},
			{key: 'Teach for America',desc: 'Teach For America is a diverse network of leaders who confront educational inequity by teaching for at least two years and then working with unwavering commitment from every sector of society to create a nation free from this injustice.', nav: 'NonProfit2'},
            
            
          ]}
		  
          renderItem={({item}) => <View>
		    <TouchableOpacity style={styles.containerBtn}
			  onPress={() => {
              this.props.navigation.navigate(item.nav, {user});
			}}>
			  <View>
				<Text style={styles.titleSmall}>{item.key}</Text>
				<Text style={styles.description}>{item.desc}</Text>
			  </View>
			</TouchableOpacity>
		      
			  
		  </View>
		  }
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