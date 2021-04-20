import React, {useState} from 'react';
import {KeyboardAvoidingView,TouchableOpacity, View, Text, TextInput,Image,ImageBackground,Dimensions, ScrollView} from 'react-native';
import {Presets} from '../../styles';
import colors from '../../styles/colors';
import Icon from 'react-native-vector-icons/FontAwesome';

function TeacherSchedule ({props}) {
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
                                Your Schedule
                        </Text>
                    </View>
                </View>
                <View style={Presets.Schedule3}>
                    <View>
                        <Text style={{fontSize:20,color:'blue',margin:15}}>
                            Your Schedule
                        </Text>
                    </View>
                    <View style={{width:"95%",  flexDirection:"row",justifyContent:'space-between',padding:15}}>
                        <Text>Sun</Text>
                        <Text>3 pm -10 pm</Text>
                    </View>
                    <View style={{width:"95%", flexDirection:"row",justifyContent:'space-between',padding:15}}>
                        <Text>Mon</Text>
                        <Text>3 pm -10 pm</Text>
                    </View>
                    <View style={{width:"95%", flexDirection:"row",justifyContent:'space-between',padding:15}}>
                        <Text>Tue</Text>
                        <Text>3 pm -10 pm</Text>
                    </View>
                    <View style={{width:"95%", flexDirection:"row",justifyContent:'space-between',padding:15}}>
                        <Text>Wed</Text>
                        <Text>3 pm -10 pm</Text>
                    </View>
                    <View style={{width:"95%", flexDirection:"row",justifyContent:'space-between',padding:15}}>
                        <Text>Thu</Text>
                        <Text>3 pm -10 pm</Text>
                    </View>
                    <View style={{width:"95%", flexDirection:"row",justifyContent:'space-between',padding:15}}>
                        <Text>Fri</Text>
                        <Text>Not available</Text>
                    </View>
                    <View style={{width:"95%", flexDirection:"row",justifyContent:'space-between',padding:15}}>
                        <Text>Sat</Text>
                        <Text>Not available</Text>
                    </View>
                    <TouchableOpacity
                                style={Presets.TeacherButtom}
                                >
                                <Text style={{color:'#fff'}}>Update</Text>
                    </TouchableOpacity>
                </View>
            </View>
            
        </View>
    )
}

export default TeacherSchedule;
