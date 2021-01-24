import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import Icon from '../components/Icon';

import { connect } from 'react-redux';
import { addToFavorites } from '../redux/actionCreators';

const mapStateToProps = state => {
    return {
        favorites: state.favorites,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        addToFavorites: book => dispatch(addToFavorites(book)),
    }
}

const BookDetail = props => {
    const book = props.route.params.book;

    const isFavorite = props.favorites.some(item => item.id === book.id);

    const markFavorite = book => {
        if (isFavorite) {
            alert("Already Added To Favorites!");
        } else {
            props.addToFavorites(book);
        }
    }

    let iconName = "heart-outline";
    if (isFavorite) {
        iconName = "ios-heart";
    }

    return (
        <View>
            <Image source={{ uri: book.image }} style={styles.image} />
            <View style={styles.details}>
                <Icon
                    name={iconName} color="#f53b8c" size={40} iconStyle={{ padding: 10 }}
                    action={() => markFavorite(book)}
                />
                <Text>{book.description}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    image: {
        width: "100%",
        height: 300,
    },
    name: {
        fontSize: 20,
        fontWeight: "500",
    },
    details: {
        padding: 10,
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(BookDetail);