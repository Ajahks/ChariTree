import React from 'react';
import { StyleSheet, Text, View, Image, Button, Alert, TouchableOpacity } from 'react-native';
import { createStackNavigator,StackActions, NavigationActions } from 'react-navigation';
import CreateEmailScreen from './src/CreateEmail.js'


class CreateAccountScreen extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      user: {
        name: "",
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
}, {
    initialRouteName: 'CreateAccount',
});

const styles = StyleSheet.create({
  container: {
	flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
	flexDirection: 'column'

  },
  titlePnl: {
	alignItems: 'center',

  },
  spacing: {
	flex: 0.1,
  },
  logo: {
    width: 256,
	height: 256
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
  btnFont: {
	fontWeight: 'bold',
	fontSize: 17,
	color: 'white',
  }
});
