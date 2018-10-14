import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  //Containers
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
    flexDirection: 'column'
  
  },
  containerLeftAdj: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    flexDirection: 'column',
	padding: 15,
  
  },
  containerRow: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row'
  },
  containerBtn: {
	flex: 1.0,
	width: 400,
	height: 200,
	alignItems: 'flex-start',
	justifyContent: 'flex-start',
	borderWidth: 4,
	borderRadius: 15,
	padding: 12,
	backgroundColor: '#dcf7f8',
	borderColor: '#989898',
	shadowColor: '#303838',
    shadowOffset: { width: 0, height: 5 },
    shadowRadius: 10,
    shadowOpacity: 0.35,
	
  },
  titlePnl: {
  alignItems: 'center',
  },
  //Spacing
  spacing: {
  flex: 0.1,
  },
  
  //Objects
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

  titleSmall: {
	width: 400,
	height: 50,
    fontWeight: 'bold',
	//alignItems: 'flex-start',
    //justifyContent: 'flex-start',
    fontSize: 25,
  },
  subtitle: {
    fontWeight: 'normal',
    fontSize: 20,
  },
  description: {
	width: 365,
    fontWeight: 'normal',
    fontSize: 15,
  },
  btnFont: {
    fontWeight: 'bold',
    fontSize: 17,
    color: 'white',
  }
});