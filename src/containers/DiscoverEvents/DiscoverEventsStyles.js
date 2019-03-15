import { StyleSheet, Dimensions } from 'react-native';
import themeStyles from '../../styles/themeStyles'
import { scale, verticalScale, moderateScale } from '../../utils/Sizes';

const height =  Dimensions.get('window').height;
const width = Dimensions.get('window').width;

const styles =  StyleSheet.create({
    title: {
        color: themeStyles.TITLE_COLOR, 
        fontWeight: themeStyles.FONT_WEIGHT_HEAVY,
        fontSize: verticalScale(25),
        textAlign:"left",
        width:"100%",
        marginLeft: 10,
    },
    searchBar:{
        marginLeft: 10,
        margin:10
    },
    cardElementImage:{
        height:0.16 * height,
        width: null,
        flex: 1,
        resizeMode:"cover"
    },
    buttonBook:{
        backgroundColor:'#2c2c46',
        paddingHorizontal: 10,
        borderRadius: 8,
    }
});

export default styles;