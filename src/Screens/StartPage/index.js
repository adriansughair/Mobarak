import React, {useState} from 'react';
import {TouchableOpacity, View, Text, TextInput,ScrollView,ImageBackground,Dimensions,Image} from 'react-native';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

export default function StartPage1({navigation}) {
  


    return (
            <ImageBackground
            style={{
                width:width*1,
                height:height*1.05,
                alignItems:'center',
            }}
            source={require('./Start_Page.png')}
            >
             <TouchableOpacity
                 style={ {backgroundColor:'#4681FF',
                    height:60,
                    justifyContent:'center',
                    alignItems:'center',
                    marginTop:30,
                    borderRadius:30,
                    width:'85%',
                    top:"64%"}}
                    onPress={() => navigation.navigate('Login')}
                 >
                    <Text style={ {color:'#fff'}}>
                         User Account
                    </Text>
            
             </TouchableOpacity>
             <TouchableOpacity
                 style={ {backgroundColor:'#4681FF',
                    height:60,
                    justifyContent:'center',
                    alignItems:'center',
                    marginTop:30,
                    borderRadius:30,
                    width:'85%',
                    top:"64%"}}
                 onPress={() => navigation.navigate('TeacherLogin')}
                 >
                    <Text style={{color:'#fff'}}>
                        Teacher Account
                    </Text>
            
             </TouchableOpacity>
            </ImageBackground> 
    );
}
