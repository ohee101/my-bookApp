import React from 'react';
import HomeScreen from './screens/HomeScreen';
import BookDetail from './screens/BookDetail';
import BookList from './screens/BookList';
import Favorite from './screens/Favorite';
import Icon from './components/Icon';

import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

const BookStack = () => {
    const navigation = useNavigation();
    return (
        <Stack.Navigator
            screenOptions={{
                headerRight: () => (<Icon
                    action={() => navigation.toggleDrawer()
                    }
                    name="ios-menu"
                    color="black"
                    size={24}
                    iconStyle={{
                        paddingRight: 15
                    }}
                />),
                headerStyle: {
                    backgroundColor: "#f53b8c",
                },
                headerTintColor: "#fff",
                headerTitleStyle: {
                    fontWeight: 'bold',
                }
            }}>
            <Stack.Screen name="BookList" component={BookList} />
            <Stack.Screen name="Book Detail"
                component={BookDetail}
                options={({ route }) =>
                    ({ title: route.params.book.name })} />
        </Stack.Navigator>
    )
}

const FavStack = () => {
    const navigation = useNavigation();
    return (
        <Stack.Navigator
            screenOptions={{
                headerRight: () => (<Icon
                    action={() => navigation.toggleDrawer()}
                    name="ios-menu"
                    color="black"
                    size={24}
                    iconStyle={{
                        paddingRight: 15
                    }}
                />),
                headerStyle: {
                    backgroundColor: "#f53b8c",
                },
                headerTintColor: "#fff",
                headerTitleStyle: {
                    fontWeight: 'bold',
                }
            }}>

            <Stack.Screen name="Favorites" component={Favorite} />
        </Stack.Navigator>
    )
}


const AppNavigator = () => {
    return (
        <Drawer.Navigator initialRouteName="Home">
            <Drawer.Screen name="Home" component={HomeScreen} />
            <Drawer.Screen name="Book List" component={BookStack} />
            <Drawer.Screen name="Favorites" component={FavStack} />
        </Drawer.Navigator>
    )
}

export default AppNavigator;