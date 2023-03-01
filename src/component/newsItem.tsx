import React from 'react';
import {
    StyleSheet,
    Text,
    View, TouchableOpacity, ImageBackground
} from 'react-native';
import color from '../theme/color';
import sizes from '../theme/sizes';

interface Iprops {
    item: any,
    index: number,
    onNewsPress: (item: any) => void,
}


function NewsItem({ item, index, onNewsPress }: Iprops): JSX.Element {
    // console.log("News items====>", item)
    return (
        <TouchableOpacity activeOpacity={0.8} onPress={() => onNewsPress(item)} style={styles.toWrapper}>
            <View style={styles.vWrapper}>
                <ImageBackground
                    source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBMy7xBHWKbtCrS9juXLQFyfyetkT6mc4YZSj6U_MziA&s' }}
                    style={styles.iNewsItem}
                    resizeMode={'cover'}>
                    <View style={styles.vTitle}>
                        <Text style={styles.tTitle} numberOfLines={3}>{item.title}</Text>
                    </View>
                </ImageBackground>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    toWrapper: {
        flex: 1,
    },
    vWrapper: {
        marginHorizontal: sizes.smartWidthScale(5),
        marginTop: sizes.smartScale(15),
        width: sizes.WIDTH - sizes.smartWidthScale(220),
        height: sizes.WIDTH - sizes.smartScale(200),
    },
    iNewsItem: {
        width: sizes.WIDTH - sizes.smartWidthScale(220),
        height: sizes.WIDTH - sizes.smartScale(200),
    },
    vTitle: {
        height: sizes.smartScale(200),
        justifyContent: 'center',
        paddingHorizontal: sizes.smartWidthScale(10)
    },
    tTitle: {
        color: color.white,
        fontSize: sizes.countPixelRatio(16),
        fontWeight: 'bold',
        textAlign: 'left',
    }
})
export default NewsItem;