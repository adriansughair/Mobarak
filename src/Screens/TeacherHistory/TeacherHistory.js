import React, {useState} from 'react';
import {KeyboardAvoidingView,TouchableOpacity, View, Text, TextInput,Image,ImageBackground,Dimensions, ScrollView} from 'react-native';
import {Presets} from '../../styles';
import colors from '../../styles/colors';
import Icon from 'react-native-vector-icons/FontAwesome';

function TeacherHistory ({props}) {
    const [navigation, setnavigation] = useState(props.navigation);

    return (
        <View>
            <View style={Presets.ScheduleContainar}>
                <View style={Presets.ProfileContainar}>
                    <TouchableOpacity 
                         onPress={()=>navigation.goBack()}
                         style={{width:'30%',justifyContent:"center"}}>
                        <Icon
                            name={"chevron-left"}
                            size={25}
                            color={"#000"}
                            style={{margin:5}}
                        />
                    </TouchableOpacity>
                    <View>
                        <Text style={{fontSize:30,color:'#000',margin:15}}>
                            Lessons history
                        </Text>
                    </View>
                </View>
                <ScrollView>
                        <View style={Presets.HistoryItem}>
                            <View style={[Presets.HistoryStatus,{backgroundColor:"#6EE9FF"}]}>
                                <View>
                                    <Text style={{fontSize:50,padding:10}}>01</Text>
                                </View>
                                <View>
                                    <Text style={{padding:10}}>Completed</Text>
                                </View>
                            </View>
                            <View style={Presets.HistoryInfo}>
                                <View>
                                    <Text style={{fontSize:25,padding:5}}>Ahmad</Text>
                                </View>
                                <View>
                                    <Text style={{fontSize:14,padding:5}}>University</Text>
                                </View>
                                <View style={Presets.HistoryControl}>
                                    <View>
                                        <Image
                                            style={[Presets.Profileimage,{width:40,height:40}]}
                                            source={require('../../assest/img/profile.jpg')}
                                        />
                                    </View>
                                    <View style={Presets.Upload}>
                                        <Icon
                                            name={"upload"}
                                            size={20}
                                            color={"#000"}
                                            style={{margin:2}}
                                        />
                                        <Text style={{margin:2}}>Upload File</Text>
                                    </View>
                                    <View>
                                        <Icon
                                            name={"comments"}
                                            size={25}
                                            color={"#000"}
                                            style={{margin:5}}
                                        />
                                    </View>
                                </View>
                            </View>
                        </View>
                        <View style={Presets.HistoryItem}>
                            <View style={Presets.HistoryStatus}>
                                <View>
                                    <Text style={{fontSize:50,padding:10}}>02</Text>
                                </View>
                                <View>
                                    <Text style={{padding:10}}>Progress</Text>
                                </View>
                            </View>
                            <View style={Presets.HistoryInfo}>
                                <View>
                                    <Text style={{fontSize:25,padding:5}}>James</Text>
                                </View>
                                <View>
                                    <Text style={{fontSize:14,padding:5}}>University</Text>
                                </View>
                                <View style={Presets.HistoryControl}>
                                    <View>
                                        <Image
                                            style={[Presets.Profileimage,{width:40,height:40}]}
                                            source={require('../../assest/img/profile.jpg')}
                                        />
                                    </View>
                                    <View style={Presets.Upload}>
                                        <Icon
                                            name={"upload"}
                                            size={20}
                                            color={"#000"}
                                            style={{margin:2}}
                                        />
                                        <Text style={{margin:2}}>Upload File</Text>
                                    </View>
                                    <View>
                                        <Icon
                                            name={"comments"}
                                            size={25}
                                            color={"#000"}
                                            style={{margin:5}}
                                        />
                                    </View>
                                </View>
                            </View>
                        </View>
                        <View style={Presets.HistoryItem}>
                            <View style={[Presets.HistoryStatus,{backgroundColor:"#6EE9FF"}]}>
                                <View>
                                    <Text style={{fontSize:50,padding:10}}>03</Text>
                                </View>
                                <View>
                                    <Text style={{padding:10}}>Completed</Text>
                                </View>
                            </View>
                            <View style={Presets.HistoryInfo}>
                                <View>
                                    <Text style={{fontSize:25,padding:5}}>Rashed</Text>
                                </View>
                                <View>
                                    <Text style={{fontSize:14,padding:5}}>University</Text>
                                </View>
                                <View style={Presets.HistoryControl}>
                                    <View>
                                        <Image
                                            style={[Presets.Profileimage,{width:40,height:40}]}
                                            source={require('../../assest/img/profile.jpg')}
                                        />
                                    </View>
                                    <View style={Presets.Upload}>
                                        <Icon
                                            name={"upload"}
                                            size={20}
                                            color={"#000"}
                                            style={{margin:2}}
                                        />
                                        <Text style={{margin:2}}>Upload File</Text>
                                    </View>
                                    <View>
                                        <Icon
                                            name={"comments"}
                                            size={25}
                                            color={"#000"}
                                            style={{margin:5}}
                                        />
                                    </View>
                                </View>
                            </View>
                        </View>
                </ScrollView>
            </View>
        </View>
    )
}

export default TeacherHistory;
