import React, { useEffect } from 'react';
import BookItem from '../components/BookItem';
import { View, Text, Button, FlatList } from 'react-native';
import { connect } from 'react-redux';
import { getBooks } from '../redux/actionCreators';


const mapStateToProps = state => {
    return {
        books: state.books,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getBooks: () => dispatch(getBooks()),
    }
}

const BookList = (props) => {
    useEffect(() => {
        props.getBooks();
    }, [])
    return (
        <View>
            <FlatList
                data={props.books}
                renderItem={
                    ({ item }) => (<BookItem item={item}
                        selectBook={() => props.navigation.navigate('Book Detail', { book: item })}
                    />)
                }
                keyExtractor={item => item.id.toString()}
            />
        </View>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(BookList);