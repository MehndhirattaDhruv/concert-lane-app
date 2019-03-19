import { StyleSheet, Dimensions } from 'react-native';
import themeStyles from '../../styles/themeStyles'
import { scale, verticalScale, moderateScale } from '../../utilities/Sizes';

const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;

const styles = StyleSheet.create({
    subHeadingsView:{
        marginLeft: 10,
        margin: 10,
        flexDirection: 'row',
        justifyContent:"space-between"
    },
    subHeading:{
        fontSize: verticalScale(15),
        color:"#000",
        marginTop:5,
        fontWeight: themeStyles.FONT_WEIGHT_MEDIUM,
    },
    scrollViewHorizontal: {
        margin: 10,
       
    },
    scrollViewSmallHorizontal: {
        margin: 10,
       
    },
    cardStyle: {
        height: 0.20 * height,
        width: 0.50 * width,
        marginRight: 20,
        borderRadius: 10,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
        elevation: 5,
    },
    horizontalImageStyle: {
        height: 0.20 * height,
        width: 0.50 * width,
        borderRadius: 10,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
        position: 'absolute'
    },
    horizontalImageTextStyle: {
        backgroundColor: 'rgba(52, 52, 52, 0.5)',
        color: 'white',
        fontSize: verticalScale(12),
        padding: 5,
        borderColor: 'transparent',
        borderBottomLeftRadius: 9,
        fontFamily: 'Roboto',
        borderBottomRightRadius: 8,
    },
});

export default styles;