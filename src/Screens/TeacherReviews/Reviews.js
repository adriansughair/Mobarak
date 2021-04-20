import React, {useState} from 'react';
import {KeyboardAvoidingView,TouchableOpacity, View, Text, TextInput,Image,ImageBackground,Dimensions, ScrollView} from 'react-native';
import {Presets} from '../../styles';
import colors from '../../styles/colors';
import Icon from 'react-native-vector-icons/FontAwesome';

function Reviews ({props}) {
    const [navigation, setnavigation] = useState(props.navigation);

    return (
        <View>
            <View style={Presets.ScheduleContainar}>
                <View style={Presets.ProfileContainar}>
                    <TouchableOpacity 
                        onPress={()=>navigation.goBack()}
                        style={{width:'35%',justifyContent:"center"}}>
                        <Icon
                            name={"chevron-left"}
                            size={25}
                            color={"#000"}
                            style={{margin:5}}
                        />
                    </TouchableOpacity>
                    <View>
                        <Text style={{fontSize:30,color:'#000',margin:15}}>
                           Reviews
                        </Text>
                    </View>
                </View>
                <View>
                    <View style={{margin:15,flexDirection:"row",justifyContent:'space-between'}}>
                        <Text style={{fontSize:20,color:'blue'}}>
                            Your Reviews
                        </Text>
                        <TouchableOpacity   onPress={() => navigation.navigate('TeacherLogin')}>
                            <Text style={Presets.TextLink}>
                                View All
                            </Text>
                        </TouchableOpacity>
                    </View>
                    <View style={Presets.Reviews}>
                        <View style={{width:"78%",flexDirection:"row",justifyContent:'space-between'}}>
                            <Image
                                style={[Presets.Profileimage,{width:50,height:50}]}
                                source={require('../../assest/img/profile.jpg')}
                            />
                            <View style={{margin:15, width:"85%",flexDirection:"row",justifyContent:'space-between'}}>
                                <View>
                                    <Text style={{fontSize:20}}>Sami</Text>
                                </View>
                                <View style={Presets.StartReview}>
                                        <Icon name="star" size={20} color={'#FFB807'} style={{padding:2}}/>
                                        <Icon name="star" size={20} color={'#FFB807'} style={{padding:2}}/>
                                        <Icon name="star" size={20} color={'#DAD7E0'} style={{padding:2}}/>
                                        <Icon name="star" size={20} color={'#DAD7E0'} style={{padding:2}}/>
                                        <Icon name="star" size={20} color={'#DAD7E0'} style={{padding:2}}/>
                                </View>
                                <View>
                                    <Text>5.0</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                    <View style={Presets.Reviews}>
                        <View style={{width:"78%",flexDirection:"row",justifyContent:'space-between'}}>
                            <Image
                                style={[Presets.Profileimage,{width:50,height:50}]}
                                source={require('../../assest/img/profile.jpg')}
                            />
                            <View style={{margin:15, width:"85%",flexDirection:"row",justifyContent:'space-between'}}>
                                <View>
                                    <Text style={{fontSize:20}}>Rana</Text>
                                </View>
                                <View style={Presets.StartReview}>
                                        <Icon name="star" size={20} color={'#FFB807'} style={{padding:2}}/>
                                        <Icon name="star" size={20} color={'#FFB807'} style={{padding:2}}/>
                                        <Icon name="star" size={20} color={'#FFB807'} style={{padding:2}}/>
                                        <Icon name="star" size={20} color={'#FFB807'} style={{padding:2}}/>
                                        <Icon name="star" size={20} color={'#DAD7E0'} style={{padding:2}}/>
                                </View>
                                <View>
                                    <Text>5.0</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                    <View style={Presets.Reviews}>
                        <View style={{width:"78%",flexDirection:"row",justifyContent:'space-between'}}>
                            <Image
                                style={[Presets.Profileimage,{width:50,height:50}]}
                                source={require('../../assest/img/profile.jpg')}
                            />
                            <View style={{margin:15, width:"85%",flexDirection:"row",justifyContent:'space-between'}}>
                                <View>
                                    <Text style={{fontSize:20}}>John</Text>
                                </View>
                                <View style={Presets.StartReview}>
                                        <Icon name="star" size={20} color={'#FFB807'} style={{padding:2}}/>
                                        <Icon name="star" size={20} color={'#FFB807'} style={{padding:2}}/>
                                        <Icon name="star" size={20} color={'#FFB807'} style={{padding:2}}/>
                                        <Icon name="star" size={20} color={'#FFB807'} style={{padding:2}}/>
                                        <Icon name="star" size={20} color={'#FFB807'} style={{padding:2}}/>
                                </View>
                                <View>
                                    <Text>5.0</Text>
                                </View>
                            </View>
                        </View>
                        <View style={{justifyContent:'center',alignItems:"center"}}>
                            <Text>Thanks a lot, You are the best</Text>
                        </View>
                    </View>
                </View>
            </View>
            
        </View>
    )
}

export default Reviews;
