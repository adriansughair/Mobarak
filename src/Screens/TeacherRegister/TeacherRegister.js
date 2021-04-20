import React, {useState} from 'react';
import {KeyboardAvoidingView,TouchableOpacity, View, Text, TextInput,Image,ImageBackground,Dimensions, ScrollView} from 'react-native';
import {Presets} from '../../styles';
import colors from '../../styles/colors';

const TeacherRegister = ({props}) => {

    const [navigation, setnavigation] = useState(props.navigation);
    const [ isLoading, setLoad]= useState(false)
    const height = Dimensions.get('window').height;

    const [data, setData] = useState({
        phone: null,
        password: null,
    });

    const handleSubmit = () => {
        props.handleSubmit(data)
    };


    return (
    <ScrollView>
       <KeyboardAvoidingView 
             behavior={Platform.OS === "ios" ? "position":"padding"}
            //  keyboardVerticalOffset={10}
             >
             <View style={Presets.LoginContainer2}>
                <View style={[Presets.Loginitem,{paddingTop:20}]}>
                    <View>
                        <TextInput
                            style={Presets.LoginInput}
                            placeholder={"Username"}
                        />
                    </View>
                </View>
                <View style={Presets.Loginitem2}>
                    <View>
                        <TextInput
                            style={Presets.LoginInput}
                            placeholder={"Phone Number"}
                        />
                    </View>
                </View>
                <View style={Presets.Loginitem2}>
                    <View>
                        <TextInput
                            style={Presets.LoginInput}
                            placeholder={"Email"}
                        />
                    </View>
                </View>
                <View style={Presets.Loginitem2}>
                    <View>
                        <TextInput
                            style={Presets.LoginInput}
                            placeholder={"Password"}
                        />
                    </View>
                </View>
                <View style={Presets.Loginitem2}>
                    <View>  
                        <TextInput
                            secureTextEntry
                            placeholder={"Confirm Password"}
                            style={Presets.LoginInput}
                        />
                    </View>
                </View>
                <View style={Presets.Loginitem2}>
                    <View>  
                        <TextInput
                            secureTextEntry
                            placeholder={"Address"}
                            style={Presets.LoginInput}
                        />
                    </View>
                </View>
                <View style={Presets.Loginitem2}>
                    <View>  
                        <TextInput
                            secureTextEntry
                            placeholder={"Subject"}
                            style={Presets.LoginInput}
                        />
                    </View>
                </View>
                <View style={[Presets.Loginitem2,{alignItems:'center',marginTop:20}]}>
                    <View style={Presets.LoginButton}>
                        <TouchableOpacity  onPress={() => navigation.navigate('TeacherHome')}>
                            <Text style={{color:colors.white,fontSize:18}}>Register</Text>
                        </TouchableOpacity>
                    </View>
                </View>
             </View>
            </KeyboardAvoidingView>
        </ScrollView>
    );0
}

export default TeacherRegister;
