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
  containerRow: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row'
  },
  containerList: {
	backgroundColor: '#fff',
	flex: 0.9,
	width: 400,
	height: 200,
	alignItems: 'flex-start',
	justifyContent: 'flex-start',
	borderWidth: 2,
	padding: 15,
	borderColor: '#989898'
	
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