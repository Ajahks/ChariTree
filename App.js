import React from 'react';
import { StyleSheet, Text, View, Image, Button, Alert, TouchableOpacity } from 'react-native';
import { createStackNavigator,StackActions, NavigationActions } from 'react-navigation';
import CreateEmailScreen from './src/CreateEmail.js'
import PasswordScreen from './src/Password.js'
import PhoneNumberScreen from './src/PhoneNumber.js'
import DateOfBirthScreen from './src/DateOfBirth.js'
import LinkBankAccountScreen from './src/LinkBankAccount.js'
import LegalNameEntryScreen from './src/LegalNameEntry.js'
import MainPageScreen from './src/MainPage.js'
import PhilProfileScreen from './src/PhilProfile.js'

import styles from './src/styles.js'
import firebase from './src/firebase.js'


class CreateAccountScreen extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      user: {
        email: "",
        password: "", /* Store this value only until user account is created, then delete */
        name: "",
        phone: "",
        totalDonations: 0,
        interests: [],
        favoriteCharity: "",
        accountCreationDate: 0
      }
    }
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
	    <Image
		  style={styles.logo}
          source={require('./assets/ICN_LOGO.png')}
        />
        <Text style={styles.title}>Welcome to ChariTree.</Text>
        <Text style={styles.subtitle}>Create an account.</Text>
      </View>

      {/* Spacer */}
      <View style={styles.spacing}>
      </View>

	  {/* Spacer */}
	  <View style={styles.spacing}>
      </View>

	  <View>
	    <TouchableOpacity style={styles.btn}>
		    <Image style={styles.btnImgLong} source={require("./assets/BTN_TEMPLATE.png")}/>
			<View style={styles.btnText}>
				<Text style={styles.btnFont}>Nonprofit Organization</Text>
			</View>
		</TouchableOpacity>
      </View>

	  {/* Spacer */}
	  <View style={styles.spacing}>
      </View>

	  <Text style={styles.title}>Or</Text>

	  {/* Spacer */}
	  <View style={styles.spacing}>
      </View>

	  <View>
	    <TouchableOpacity style={styles.btn}
            onPress={() => {
              this.props.navigation.navigate('CreateEmail', {user: this.state.user});
            }}>
		    <Image style={styles.btnImgLong} source={require("./assets/BTN_TEMPLATE.png")}/>
			  <View style={styles.btnText}>
				  <Text style={styles.btnFont}>Philanthropist</Text>
			  </View>
		  </TouchableOpacity>
    </View>


	</View>
    );
  }


}

export default createStackNavigator({
  CreateAccount: {
    screen: CreateAccountScreen,
  },
  CreateEmail: {
    screen: CreateEmailScreen,
  },
  Password: {
    screen: PasswordScreen,
  },
  LegalNameEntry: {
    screen: LegalNameEntryScreen,
  },
  PhoneNumber: {
    screen: PhoneNumberScreen,
  },
  DateOfBirth: {
    screen: DateOfBirthScreen,
  },
  LinkBankAccount: {
    screen: LinkBankAccountScreen,
  },
  MainPage: {
    screen: MainPageScreen,
  },
  PhilProfile: {
	screen: PhilProfileScreen,
  }
}, {
    initialRouteName: 'CreateAccount',
});

