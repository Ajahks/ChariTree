import React from 'react';
import { StyleSheet, Text, View, Image, Button, Alert, TouchableOpacity, TextInput } from 'react-native';
import { createStackNavigator, } from 'react-navigation';
import styles from './styles.js'
import firebase from './firebase.js';


export default class DateOfBirthScreen extends React.Component {

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
        <Text style={styles.title}>Enter your date of birth</Text>
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
		placeholder = 'MM/DD/YYYY'
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
              user.dob = this.state.text;
              this.props.navigation.setParams({user: user});

              firebase.auth().createUserWithEmailAndPassword(user.email, user.password).catch(()=>{});

              this.props.navigation.navigate('MainPage', {user});

              let response = sendEmail(user.name, user.email);
              //console.log("the user input email")
              //console.log(user.email)
            }}>
		    <Image style={styles.btnImgLong} source={require("../assets/BTN_TEMPLATE.png")}/>
			  <View style={styles.btnText}>
				  <Text style={styles.btnFont}>Finish</Text>
			  </View>
		</TouchableOpacity>
    </View>


	</View>
    );
  }

}

//let data =

function sendEmail(name, email){
    //data.recipients.signers.name = name;
    //data.recipients.signers.email = email;
    //console.log("the signer email should be")
    //console.log(data.recipients.signers.email)
    //console.log(email)
    //console.log(data)
    return fetch("https://demo.docusign.net/restapi/v2/accounts/6807327" + "/envelopes",
      {
          method: 'POST',
          headers: {
                  "X-DocuSign-Authentication": JSON.stringify({"Username":"biz003@ucsd.edu","Password":"123456",
                                              "IntegratorKey": "147a797d-6fc1-4d80-96fb-6dcb7d6a6bad"}),
                  "Content-Type": "application/json"
              },
          body: JSON.stringify({
            "recipients": {
              "signers": [
                {
                  "email": email,
                  "name": name,
                  "recipientId": 1,
                  "tabs": {
                    "signHereTabs": [
                      {
                        "xPosition": "100",
                        "yPosition": "100",
                        "documentId": "1",
                        "pageNumber": "1"
                      }
                    ]
                  }
                }
              ]
            },
            "emailSubject": "DocuSign API - Signature Request on Document Call",
            "documents": [
              {
                "documentId": "1",
                "name": "blank1.pdf",
                "documentBase64": "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FQiOVrXRk2VnZmdjZuVg1zB3UvLOcVW6xS4oKyomK8TBISQrJioryP73Nivfr0+sfL+dWXJ+T2Fms46xV2GewcXBxMLGtkNOQlLLWtEzjF9YgIVbWEBQjINdSJBHwyXmb5uoDMgMGVFRiFl/fUH+ZWQQgoYVGwMwhPxcvEJ8/LWdE3Myk4oyAaddbKAKZW5kc3RyZWFtCmVuZG9iagoxNyAwIG9iago1MjMKZW5kb2JqCjE4IDAgb2JqCihNaWNyb3NvZnQgV29yZCAtIERvY3VtZW50MSkKZW5kb2JqCjE5IDAgb2JqCihNYWMgT1MgWCAxMC4xMC41IFF1YXJ0eiBQREZDb250ZXh0KQplbmRvYmoKMjAgMCBvYmoKKFdvcmQpCmVuZG9iagoyMSAwIG9iagooRDoyMDE2MDQxOTAxMjAzOFowMCcwMCcpCmVuZG9iagoyMiAwIG9iagooKQplbmRvYmoKMjMgMCBvYmoKWyBdCmVuZG9iagoxIDAgb2JqCjw8IC9UaXRsZSAxOCAwIFIgL1Byb2R1Y2VyIDE5IDAgUiAvQ3JlYXRvciAyMCAwIFIgL0NyZWF0aW9uRGF0ZSAyMSAwIFIgL01vZERhdGUKMjEgMCBSIC9LZXl3b3JkcyAyMiAwIFIgL0FBUEw6S2V5d29yZHMgMjMgMCBSID4+CmVuZG9iagp4cmVmCjAgMjQKMDAwMDAwMDAwMCA2NTUzNSBmIAowMDAwMDA0ODgwIDAwMDAwIG4gCjAwMDAwMDAyMTMgMDAwMDAgbiAKMDAwMDAwMzE4NiAwMDAwMCBuIAowMDAwMDAwMDIyIDAwMDAwIG4gCjAwMDAwMDAxOTUgMDAwMDAgbiAKMDAwMDAwMDMxNyAwMDAwMCBuIAowMDAwMDAzMTUwIDAwMDAwIG4gCjAwMDAwMDAwMDAgMDAwMDAgbiAKMDAwMDAwMzMxOSAwMDAwMCBuIAowMDAwMDAwNDE0IDAwMDAwIG4gCjAwMDAwMDMxMjkgMDAwMDAgbiAKMDAwMDAwMzI2OSAwMDAwMCBuIAowMDAwMDAzODEwIDAwMDAwIG4gCjAwMDAwMDM0ODEgMDAwMDAgbiAKMDAwMDAwMzc5MCAwMDAwMCBuIAowMDAwMDA0MDQ2IDAwMDAwIG4gCjAwMDAwMDQ2NTggMDAwMDAgbiAKMDAwMDAwNDY3OCAwMDAwMCBuIAowMDAwMDA0NzIzIDAwMDAwIG4gCjAwMDAwMDQ3NzYgMDAwMDAgbiAKMDAwMDAwNDc5OSAwMDAwMCBuIAowMDAwMDA0ODQxIDAwMDAwIG4gCjAwMDAwMDQ4NjAgMDAwMDAgbiAKdHJhaWxlcgo8PCAvU2l6ZSAyNCAvUm9vdCAxMiAwIFIgL0luZm8gMSAwIFIgL0lEIFsgPDk4MTI2MjUwMWJiZDNmNTgwOTQ3YjU4NGZlMjAyNTBjPgo8OTgxMjYyNTAxYmJkM2Y1ODA5NDdiNTg0ZmUyMDI1MGM+IF0gPj4Kc3RhcnR4cmVmCjUwMjQKJSVFT0YK"
              }
            ],
            "status": "sent"
          })
      }).then((response) => {
          //console.log('yess', JSON.stringify(response.json()));
         // console.log(response.body);
         // console.log(response);
      }).catch(e =>{
         // console.log('bad step', e);
      });
    //console.log(response.json())
}
