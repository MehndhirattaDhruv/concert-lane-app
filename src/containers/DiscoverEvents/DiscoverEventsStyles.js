import { StyleSheet, Dimensions } from 'react-native';
import themeStyles from '../../styles/themeStyles'
import { scale, verticalScale, moderateScale } from '../../utilities/Sizes';

const height =  Dimensions.get('window').height;
const width = Dimensions.get('window').width;

const styles =  StyleSheet.create({
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