import { StyleSheet, Dimensions } from 'react-native';
import themeStyles from '../../styles/themeStyles'
import { scale, verticalScale, moderateScale } from '../../utilities/Sizes';

const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;

const styles = StyleSheet.create({
  content: {
    backgroundColor: "#f3f3f3"
  },
  coverView:{
      height:0.2*height,
      margin:10,
    backgroundColor:"#613ec1",
    
  },
  innerView:{
    marginTop:-40,
    backgroundColor:"#fff",
    marginRight:40,
    marginLeft:40,
    borderRadius:10,

  },
  coverImage:{
    height:100,
    width:100,
    marginTop:-50,
    borderRadius:50,
    marginLeft: 'auto',
    marginRight: 'auto',
    resizeMode:"contain"
  },
  artistName:{
    color:"#fff",
    fontSize:verticalScale(16),
    fontWeight: themeStyles.FONT_WEIGHT_MEDIUM,
    paddingHorizontal: 5,
    paddingTop:10
  },

  bio:{
    paddingHorizontal:10,
    color:"#2c2c46",
    fontSize: verticalScale(15),
    paddingBottom:10
  },
  subHeadingsView: {
    marginLeft: 10,
    margin: 10,
    flexDirection: 'row',
    justifyContent: "space-between"
  },
  subHeading: {
    fontSize: verticalScale(15),
    color: "#000",
    marginTop: 5,
    fontWeight: themeStyles.FONT_WEIGHT_MEDIUM,
  },
  scrollView:{
    margin: 10 
  }
});

export default styles;