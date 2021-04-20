import React from 'react';
import {Image, View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {Presets} from '../../styles';
import colors from '../../styles/colors';
import { useNavigation,useRoute,CommonActions } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function Header() {
    // const direction = I18n.locale === 'ar' ? 'row-reverse' : 'row';
    const navigation = useNavigation(); 
    const route = useRoute().name;

    return (
        <View style={Presets.headerContainer}>
            <TouchableOpacity  onPress={() => navigation.navigate('Menu')} >
                <Icon
                    name="align-justify"
                    size={40}
                    color={'#DAD7E0'}
                    style={{padding:10}}
                />
            </TouchableOpacity>
            <TouchableOpacity  onPress={() => navigation.navigate('Profile')} >
                <Image
                    style={Presets.Headerimage}
                    source={require('../../assest/img/profile.jpg')}
                />
            </TouchableOpacity>
        </View>
    );
}
