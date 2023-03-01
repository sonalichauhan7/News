import { StyleSheet } from 'react-native';
import color from '../../theme/color';
import sizes from '../../theme/sizes';

const styles = StyleSheet.create({
    saConatiner: {
        backgroundColor: color.white,
        flex: 1
    },
    vContainer: {
        flex: 1,
        backgroundColor: color.white,
        marginHorizontal: sizes.smartWidthScale(20)
    },
    vLoader: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default styles; 