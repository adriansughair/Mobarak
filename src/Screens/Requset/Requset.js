import React, {useState} from 'react';
import {KeyboardAvoidingView,TouchableOpacity, View, Text, TextInput,Image,ImageBackground,Dimensions, ScrollView} from 'react-native';
import {Presets} from '../../styles';
import colors from '../../styles/colors';
import Icon from 'react-native-vector-icons/FontAwesome';

function Requset ({props}) {
    const [navigation, setnavigation] = useState(props.navigation);

    return (
        <View>
            <View style={[Presets.ProfileContainar2,{marginTop:25}]}>
                <View >
                    <View>
                        <Text style={{fontSize:20,color:'blue'}}>Review your Request</Text>
                    </View>
                    <View style={{padding:10}}>
                        <View style={Presets.RequsetItem}>
                            <Text style={Presets.title2}>Subject :</Text>
                            <Text>Mathes</Text>
                        </View>
                        <View style={Presets.RequsetItem}>
                            <Text style={Presets.title2}>Location :</Text>
                            <Text>Doha</Text>
                        </View>
                        <View style={Presets.RequsetItem}>
                            <Text style={Presets.title2}>Grade :</Text>
                            <Text>SECONDARY SCHOOL</Text>
                        </View>
                        <View style={Presets.RequsetItem}>
                            <Text style={Presets.title2}>Start :</Text>
                            <Text>within a few days</Text>
                        </View>
                        <View style={Presets.RequsetItem}>
                            <Text style={Presets.title2}>Price :</Text>
                            <Text>30$/hr</Text>
                        </View>
                    </View>
                </View>
            </View>
            <View style={{alignItems:'center',paddingBottom:50}}>
                <View style={[Presets.Filteritem,{alignItems:'center',marginTop:20,marginBottom:20}]}>
                    <View style={Presets.RequsetButton}>
                        <TouchableOpacity  onPress={() => navigation.navigate('AddCard')}>
                            <Text style={{color:colors.white,fontSize:18}}>Payment Info</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={Presets.RequsetButton}>
                        <TouchableOpacity  
                        // onPress={() => navigation.navigate('TeacherList')}
                        >
                            <Text style={{color:colors.white,fontSize:18}}>Send Request</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={Presets.History}>
                        <Text style={{fontSize:20,color:'blue'}}>
                            Your Payment
                        </Text>
                        <Text style={[Presets.TextLink,{width:"22%"}]}>
                            View All
                        </Text>
                </View>
                <View style={{width:"100%"}}>
                    <View style={Presets.HistoryItem2}>
                        <View>
                            <Text style={[Presets.title2,{paddingBottom:5}]}>Maths</Text>
                            <Text style={{fontSize:12,color:"gray"}}>2/15/2021 - 2:00pm</Text>
                        </View>
                        <View>
                            <Text style={Presets.title2}>90$</Text>
                        </View>
                    </View>
                    <View style={Presets.HistoryItem2}>
                        <View>
                            <Text style={[Presets.title2,{paddingBottom:5}]}>Maths</Text>
                            <Text style={{fontSize:12,color:"gray"}}>2/15/2021 - 2:00pm</Text>
                        </View>
                        <View>
                            <Text style={Presets.title2}>90$</Text>
                        </View>
                    </View>
                    <View style={Presets.HistoryItem2}>
                        <View>
                            <Text style={[Presets.title2,{paddingBottom:5}]}>Maths</Text>
                            <Text style={{fontSize:12,color:"gray"}}>2/15/2021 - 2:00pm</Text>
                        </View>
                        <View>
                            <Text style={Presets.title2}>90$</Text>
                        </View>
                    </View>
                </View>
        </View>
            
        </View>
    )
}

export default Requset;
