import React from 'react'
import { Text, TouchableOpacity, StyleSheet, ScrollView, Linking, View } from 'react-native'
import { color } from 'react-native-reanimated'
import Icon from 'react-native-vector-icons/FontAwesome'
import colors from '../styles/colors'

function Menu({navigation}) {

    return (
        <ScrollView style={{backgroundColor: colors.white}}>
            <View style={styles.menuContainer}>
                    <TouchableOpacity onPress={() => navigation.navigate('Home')} style={styles.menuItem}>
                        <Icon name="home" size={30} color={'blue'} />
                        <Text style={styles.menuItemText}>Home</Text>
                    </TouchableOpacity>
                    <TouchableOpacity  onPress={() => navigation.navigate('Profile')} style={styles.menuItem}>
                        <Icon name="user" size={30} color={'blue'} />
                        <Text style={styles.menuItemText}>Profile</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('Filter')} style={styles.menuItem}>
                        <Icon name="users" size={30} color={'blue'} />
                        <Text style={styles.menuItemText}>Contact Teachers</Text>
                    </TouchableOpacity>
                    <TouchableOpacity  style={styles.menuItem}>
                        <Icon name="comments" size={30} color={'blue'} />
                        <Text style={styles.menuItemText}>Messages</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.menuItem}>
                        <Icon name="info-circle" size={30} color={'blue'} />
                        <Text style={styles.menuItemText}>Contact Us</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.menuItem}>
                        <Icon name="cog" size={30} color={'blue'} />
                        <Text style={styles.menuItemText}>Settings</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('StartPage')} style={styles.menuItem}>
                        <Icon name="sign-out" size={30} color={'blue'} />
                        <Text style={styles.menuItemText}>Logout</Text>
                    </TouchableOpacity>
            </View>
        </ScrollView>
    )
}

export default Menu

const styles = StyleSheet.create({
    menuContainer: {
        justifyContent:"center",
        alignItems:"center",
        backgroundColor: colors.white,
        paddingBottom:50,
        margin:40,
        marginTop:150,
        borderTopColor:colors.grayLink,
        borderTopWidth:0.5
    },
    menuItem: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        // height: 60,
        backgroundColor: colors.white,
        borderRadius: 25,
        margin: 10,
        // elevation: 1,
        width:"100%",
        padding:10,

    },
    menuItemText: {
        paddingLeft: 50,
        paddingRight: 50,
        color: 'blue',
        fontSize: 20,
    }
})