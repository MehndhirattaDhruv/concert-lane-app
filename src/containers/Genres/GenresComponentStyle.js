import { StyleSheet, Dimensions } from 'react-native';
import themeStyles from '../../styles/themeStyles'
import { scale, verticalScale, moderateScale } from '../../utilities/Sizes';

const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;

const styles = StyleSheet.create({
    ViewBadges:{
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    title:{
        fontSize: verticalScale(16),
        textAlign:"center",
        fontWeight: themeStyles.FONT_WEIGHT_MEDIUM,
        color:"#000",
        padding:10
    },
    gridSystem:{
        width: width/2.3,
        height:100,
        backgroundColor:"#06d9ff",
        alignItems: 'center',
        justifyContent:"center",
        margin:10,
        borderRadius: 10,
    },
    textGenres:{
        color:"#fff",
        fontSize: verticalScale(16),
        fontWeight: themeStyles.FONT_WEIGHT_MEDIUM,
        textAlign:"center"

    }
});

export default styles;