import React from 'react';
import {
    ScrollView,
    Text,
    View, Image
} from 'react-native';
import string from '../../../utils/string';
import styles from './style';

interface IProps {
    route: any;
}

function NewsDetails({ route }: IProps): JSX.Element {
    const { title, author } = route.params.newsItem;
    const renderImage = () => {
        return (
            <View>
                <Image
                    source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBMy7xBHWKbtCrS9juXLQFyfyetkT6mc4YZSj6U_MziA&s' }}
                    style={styles.iNewsItem}
                    resizeMode={'cover'}
                />
            </View>
        )
    }
    const renderDetails = () => {
        return (
            <View style={styles.vMainWrapper}>
                <Text style={styles.tTitle}>{title}</Text>
                <View style={styles.vAuthor}>
                    <Text style={styles.tAuthor}>{string.news_details.author}</Text>
                    <Text style={styles.tAuthor}>{author}</Text>
                </View>
                <Text style={styles.tDescription}>{string.news_details.dummyString}</Text>
            </View>
        )
    }
    return (
        <ScrollView bounces={false} showsVerticalScrollIndicator={false} style={styles.vContainer}>
            {renderImage()}
            {renderDetails()}
        </ScrollView>

    );
}

export default NewsDetails;