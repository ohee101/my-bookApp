import React from 'react';
import { View, Text, FlatList } from 'react-native';
import Card from '../components/Card';

import { connect } from 'react-redux';

const mapStateToProps = state => {
    return {
        favorites: state.favorites,
    }
}

const Favorite = props => {
    return (
        <View>
            <FlatList
                data={props.favorites}
                renderItem={({ item }) => (<Card item={item} />)}
                keyExtractor={item => item.id.toString()}
            />
        </View>

    )
}

export default connect(mapStateToProps)(Favorite);