import React from 'react';
import { TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const Icon = props => {
    return (
        <TouchableOpacity
            style={{ paddingRight: 15 }}
            onPress={props.action}>
            <Ionicons name={props.name} size={props.size} color={props.color} />
        </TouchableOpacity>
    )
}

export default Icon;