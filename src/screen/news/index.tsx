import React, { useState, useEffect } from 'react';
import {
    View, Text, FlatList, ActivityIndicator
} from 'react-native';
import SafeAreaView from 'react-native-safe-area-view';
import NewsItem from '../../component/newsItem';
import axios from 'axios';
import styles from './style';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { Routes } from '../../navigation/route';
import color from '../../theme/color';
import api_end_point from '../../utils/api_end_point';

function News(): JSX.Element {
    const navigation = useNavigation<NavigationProp<any, any>>();
    const [loader, setLoader] = useState<boolean>(false);
    const [newsList, setNewsList] = useState<Array<any>>([]);

    useEffect(() => {
        setLoader(true);
        axios.get(api_end_point.BASE_URL)
            .then((res) => {
                setLoader(false);
                setNewsList(res.data.articles);

            })
            .catch((err) => { console.log("Catch block===>", err) })
    }, [])

    const renderNews = (item: any, index: number) => {
        return (
            <NewsItem item={item} index={index} onNewsPress={onNewsPress} />
        )
    }

    const onNewsPress = (item: any) => {
        navigation.navigate(Routes.NewsDetails, { newsItem: item })
    }

    const renderNewsList = () => {
        return (
            <FlatList
                data={newsList}
                numColumns={2}
                renderItem={({ item, index }) => renderNews(item, index)}
                keyExtractor={(item, index) => index.toString()}
                showsVerticalScrollIndicator={false}
            />
        )
    }

    const showLoader = () => {
        return (
            <View style={styles.vLoader}>
                <ActivityIndicator animating={false} size={'large'} color={color.bright_blue} />
            </View>

        )
    }

    return (
        <SafeAreaView style={styles.saConatiner} forceInset={{ top: 'always', bottom: 'never' }}>
            <View style={styles.vContainer}>
                {renderNewsList()}
                {/* {loader ? showLoader() :
                    renderNewsList()} */}
            </View>
        </SafeAreaView>

    );
}

export default News;