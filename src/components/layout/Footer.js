import React, {useState, useEffect} from 'react';
import {Image, View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {Presets} from '../../styles';
import colors from '../../styles/colors';
import {useRoute,useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function Footer() {

    const [currentScene, setcurrentScene] = useState('');
    const navigation = useNavigation();

    const route = useRoute().name;
    if(currentScene == ''){
        setcurrentScene(route)
    }


    return (
        <View style={styles.footerContainer}>
            <TouchableOpacity onPress={() => navigation.navigate("Home")}>
                <Icon
                    name="home"
                    size={25}
                    color={
                        currentScene == 'Home' ? colors.default : '#DAD7E0'
                    }
                />
            </TouchableOpacity>
            <TouchableOpacity>
                <Icon
                    name="comments"
                    size={25}
                    color={
                        currentScene == 'Home' ? colors.default : '#DAD7E0'
                    }
                />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate("Filter")}>
                <Icon
                    name="search"
                    size={25}
                    color={
                        currentScene == 'Filter' ? colors.default : '#DAD7E0'
                    }
                />
            </TouchableOpacity>
            <TouchableOpacity>
                <Icon
                    name="file-text"
                    size={25}
                    color={
                        currentScene == 'Home' ? colors.default : '#DAD7E0'
                    }
                />
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    footerContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        // marginBottom: 5,
        padding: 10,
        alignItems: 'flex-end',
        backgroundColor:colors.white,
        elevation:10,
        height:50,
        borderColor:colors.grayLink,
        borderWidth:0.5
    },
    footerIcon: {
        height: 25,
        width: 25,
    },
    footerAddIcon: {
        backgroundColor: colors.orange,
        padding: 5,
        borderRadius: 30,
        height: 60,
        width: 60,
        justifyContent: 'center',
        alignItems: 'center',
    },
});