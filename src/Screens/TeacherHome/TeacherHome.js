import React, {useState} from 'react';
import {KeyboardAvoidingView,TouchableOpacity, View, Text, TextInput,Image,ImageBackground,Dimensions, ScrollView} from 'react-native';
import {Presets} from '../../styles';
import colors from '../../styles/colors';
import Icon from 'react-native-vector-icons/FontAwesome';

function TeacherHome ({props}) {
    const [navigation, setnavigation] = useState(props.navigation);

    return (
        <ScrollView>
        <View>
            <View style={Presets.ProfileContainar2}>
                <View style={Presets.ProfileContainar}>
                    <View>
                        <Image
                            style={[Presets.Profileimage,{width:100,height:100}]}
                            source={require('../../assest/img/profile.jpg')}
                        />
                    </View>
                    <View style={[Presets.ProfileName,{width:'50%'}]}>
                        <Text style={{fontSize:23,color:'blue'}}>Neha Viabhav</Text>
                    </View>
                    <View style={{width:'50%'}}>
                        <TouchableOpacity 
                        onPress={()=>navigation.navigate('Requset')}
                        style={Presets.editIcon}>
                            <Icon
                                name={"pencil-square-o"}
                                size={40}
                            />
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
                <View style={Presets.Schedule2}>
                    <View style={{flexDirection:"row",width:"100%",justifyContent:"space-between"}}>
                        <TouchableOpacity
                            style={Presets.TeacherButtom}
                            onPress={() => navigation.navigate('TeacherSchedule')}
                        >
                            <Text style={{color:'#fff'}}>Your Schedule</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={Presets.TeacherButtom}
                            onPress={() => navigation.navigate('TeacherAccounting')}
                        >
                            <Text style={{color:'#fff'}}>Accounting</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{flexDirection:"row",width:"100%",justifyContent:"space-between"}}>
                        <TouchableOpacity
                            style={Presets.TeacherButtom}
                            onPress={() => navigation.navigate('TeacherHistory')}
                        >
                            <Text style={{color:'#fff'}}>Lessons history</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={Presets.TeacherButtom}
                            onPress={() => navigation.navigate('TeacherReviews')}
                        >
                            <Text style={{color:'#fff'}}>Reviews</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>
    </ScrollView>
    )
}

export default TeacherHome;
