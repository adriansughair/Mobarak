import React, {useState} from 'react';
import {KeyboardAvoidingView,TouchableOpacity, View, Text, TextInput,Image,ImageBackground,Dimensions, ScrollView} from 'react-native';
import {Presets} from '../../styles';
import colors from '../../styles/colors';

function Home () {

    return (
             <View style={Presets.HomeContainer}>
                <View style={Presets.Homeitem}>
                    <View style= {Presets.HomeSubItem}>
                        <Text>
                            PRIMARY SCHOOL
                            </Text>
                    </View>
                    <View style= {Presets.HomeSubItem}>
                        <Image 
                            style={Presets.imageitem}
                            source={require('../../assest/img/Image4.png')}
                        />
                    </View>
                </View>
                <View style={Presets.Homeitem}>
                    <View style= {Presets.HomeSubItem}>
                        <Text>SECONDARY SCHOOL</Text>
                    </View>
                    <View style= {Presets.HomeSubItem}>
                        <Image 
                            style={Presets.imageitem}
                            source={require('../../assest/img/Image3.png')}
                        />                        
                    </View>
                </View>
                <View style={Presets.Homeitem}>
                    <View style= {Presets.HomeSubItem}>
                        <Text>HIGHER SECONDARY SCHOOL</Text>
                    </View>
                    <View style= {Presets.HomeSubItem}>
                        <Image 
                            style={Presets.imageitem}
                            source={require('../../assest/img/Image2.png')}
                        />                        
                    </View>
                </View>
                <View style={Presets.Homeitem}>
                    <View style= {Presets.HomeSubItem}>
                        <Text>UNIVERSITY</Text>
                    </View>
                    <View style= {Presets.HomeSubItem}>  
                        <Image 
                            style={Presets.imageitem}
                            source={require('../../assest/img/Image1.png')}
                        />
                    </View>
                </View>
             </View>
    );
}

export default Home;
