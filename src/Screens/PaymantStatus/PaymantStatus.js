import React, {useState} from 'react';
import {KeyboardAvoidingView,TouchableOpacity, View, Text, TextInput,Image,ImageBackground,Dimensions, ScrollView} from 'react-native';
import {Presets} from '../../styles';
import colors from '../../styles/colors';
import Icon from 'react-native-vector-icons/FontAwesome';

function PaymantStatus ({props}) {
    const [navigation, setnavigation] = useState(props.navigation);

    return (
        <View>
            <View style={Presets.ProfileContainar2}>
                <View style={Presets.ProfileContainar}>
                    <View>
                        <Image
                            style={[Presets.Profileimage,{width:60,height:60}]}
                            source={require('../../assest/img/profile.jpg')}
                        />
                    </View>
                    <View style={[Presets.ProfileName,{width:'47%'}]}>
                        <Text style={{fontSize:20,color:'blue'}}>Neha Viabhav</Text>
                    </View>
                    <View style={{width:'50%'}}>
                        <TouchableOpacity 
                        onPress={()=>navigation.navigate('Requset')}
                        style={Presets.Request}>
                            <Text>Request lesson</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={Presets.ProfileInfo}>
                    <View>
                        <Text style={Presets.title}>Year of expernec</Text>
                        <Text>6</Text>
                    </View>
                    <View>
                        <Text style={Presets.title}>Subject</Text>
                        <Text>Mathes</Text>
                    </View>
                    <View>
                        <Text style={Presets.title}>Address</Text>
                        <Text>Doha</Text>
                    </View>
                </View>
            </View>
            <View style={{alignItems:'center',paddingBottom:50}}>
                <View style={Presets.ReviewView}>
                    <View>
                        <Text style={{fontSize:20,color:'blue'}}>
                            Rating
                        </Text>
                    </View>
                    <View style={Presets.StartReview}>
                        <Icon name="star" size={20} color={'#FFB807'} style={{padding:2}}/>
                        <Icon name="star" size={20} color={'#FFB807'} style={{padding:2}}/>
                        <Icon name="star" size={20} color={'#FFB807'} style={{padding:2}}/>
                        <Icon name="star" size={20} color={'#FFB807'} style={{padding:2}}/>
                        <Icon name="star" size={20} color={'#DAD7E0'} style={{padding:2}}/>
                    </View>
                    <View>
                        <Text>
                            4.0
                        </Text>
                    </View>
                </View>
                <View style={Presets.qualifView}>
                    <View>
                        <Text style={{fontSize:20,color:'blue'}}>
                            Highest qualification
                        </Text>
                    </View>
                    <View style={{flexDirection:"row",justifyContent:'space-between',padding:15}}>
                        <Text>Bachelors of Maths</Text>
                        <Text>Doha University</Text>
                    </View>
                    <View style={{flexDirection:"row",justifyContent:'space-between',padding:15}}>
                        <Text>Master</Text>
                        <Text>Doha University</Text>
                    </View>
                </View>
                <View style={Presets.Teaching}>
                    <View>
                        <Text style={{fontSize:20,color:'blue'}}>
                            Teaching Experience
                        </Text>
                    </View>
                    <View style={{flexDirection:"row",justifyContent:'space-between',padding:15}}>
                        <Text>GEMS Wellington</Text>
                        <Text>Senior English</Text>
                        <Text>2012-2018</Text>
                    </View>
                </View>
                <View style={Presets.Schedule}>
                    <View>
                        <Text style={{fontSize:20,color:'blue'}}>
                            Schedule
                        </Text>
                    </View>
                    <View style={{flexDirection:"row",justifyContent:'space-between',padding:5}}>
                        <Text>Sun</Text>
                        <Text>3 pm -10 pm</Text>
                    </View>
                    <View style={{flexDirection:"row",justifyContent:'space-between',padding:5}}>
                        <Text>Mon</Text>
                        <Text>3 pm -10 pm</Text>
                    </View>
                    <View style={{flexDirection:"row",justifyContent:'space-between',padding:5}}>
                        <Text>Tue</Text>
                        <Text>3 pm -10 pm</Text>
                    </View>
                    <View style={{flexDirection:"row",justifyContent:'space-between',padding:5}}>
                        <Text>Wed</Text>
                        <Text>3 pm -10 pm</Text>
                    </View>
                    <View style={{flexDirection:"row",justifyContent:'space-between',padding:5}}>
                        <Text>Thu</Text>
                        <Text>3 pm -10 pm</Text>
                    </View>
                    <View style={{flexDirection:"row",justifyContent:'space-between',padding:5}}>
                        <Text>Fri</Text>
                        <Text>Not available</Text>
                    </View>
                    <View style={{flexDirection:"row",justifyContent:'space-between',padding:5}}>
                        <Text>Sat</Text>
                        <Text>Not available</Text>
                    </View>
                </View>
            </View>
            
        </View>
    )
}

export default PaymantStatus;
