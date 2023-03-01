import { StyleSheet } from 'react-native';
import color from '../../../theme/color';
import sizes from '../../../theme/sizes';

const styles = StyleSheet.create({
    vContainer: {
        backgroundColor: color.white,
        flex: 1
    },
    iNewsItem: {
        width: '100%',
        height: sizes.smartScale(220)
    },
    vMainWrapper: {
        marginHorizontal: sizes.smartWidthScale(20),
        marginTop: sizes.smartScale(15)
    },
    tTitle: {
        color: color.grey,
        fontSize: sizes.countPixelRatio(20),
        fontWeight: 'bold'
    },
    vAuthor: {
        flexDirection: 'row',
        marginTop: sizes.smartScale(15)
    },
    tAuthor: {
        color: color.black,
        fontSize: sizes.countPixelRatio(16),
    },
    tDescription: {
        color: color.black,
        fontSize: sizes.countPixelRatio(16),
        marginTop: sizes.smartScale(15)
    }
});

export default styles; 