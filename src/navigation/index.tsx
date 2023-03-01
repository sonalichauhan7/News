import * as React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Routes } from './route';
import News from '../screen/news';
import NewsDetails from '../screen/news/newsDetails';
import color from '../theme/color';
import image from '../assets/images/image';
import sizes from '../theme/sizes';

const Stack = createNativeStackNavigator();

export default (): JSX.Element => {
    const showHeaderRight = () => {
        return (
            <View style={styles.vRightIcons}>
                <TouchableOpacity activeOpacity={0.8}
                    style={[styles.toSearch, { marginRight: sizes.smartWidthScale(5) }]}>
                    <Image
                        source={image.ic_search}
                        style={styles.iSearch} resizeMode={'contain'} />
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={0.8}
                    style={styles.toSearch}>
                    <Image
                        source={image.ic_toolbar_dots}
                        style={styles.iSearch} resizeMode={'contain'} />
                </TouchableOpacity>
            </View>
        )
    }
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName={Routes.News}
                screenOptions={{ headerTitleStyle: { fontWeight: 'bold' } }} >
                <Stack.Screen name={Routes.News} component={News} options={{ headerRight: () => showHeaderRight() }} />
                <Stack.Screen name={Routes.NewsDetails} component={NewsDetails}
                    options={{ headerStyle: { backgroundColor: color.green } }} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

const styles = StyleSheet.create({
    vRightIcons: {
        flexDirection: 'row'
    },
    toSearch: {
        justifyContent: 'center',
        alignItems: 'center',
        height: sizes.smartScale(35),
        width: sizes.smartWidthScale(35),
    },
    iSearch: {
        height: sizes.smartScale(20),
        width: sizes.smartWidthScale(20)
    }
})

