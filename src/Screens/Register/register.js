import React, {useState} from 'react';
import {KeyboardAvoidingView,TouchableOpacity, View, Text, TextInput,Image,ImageBackground,Dimensions, ScrollView} from 'react-native';
import {Presets} from '../../styles';
import colors from '../../styles/colors';

const Register = ({props}) => {

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
             <View style={Presets.LoginContainer}>
                <View style={[Presets.Loginitem,{paddingTop:23}]}>
                    {/* <View>
                        <Text>Username</Text>
                    </View> */}
                    <View>
                        <TextInput
                            style={Presets.LoginInput}
                            placeholder={"Username"}
                        />
                    </View>
                </View>
                <View style={Presets.Loginitem}>
                    {/* <View>
                        <Text>Username</Text>
                    </View> */}
                    <View>
                        <TextInput
                            style={Presets.LoginInput}
                            placeholder={"Email/Phone Number"}
                        />
                    </View>
                </View>
                <View style={Presets.Loginitem}>
                    {/* <View>
                        <Text>Username</Text>
                    </View> */}
                    <View>
                        <TextInput
                            style={Presets.LoginInput}
                            placeholder={"Password"}
                        />
                    </View>
                </View>
                <View style={Presets.Loginitem}>
                    {/* <View>
                        <Text>Password</Text>
                    </View> */}
                    <View>  
                        <TextInput
                            secureTextEntry
                            placeholder={"Confirm Password"}
                            style={Presets.LoginInput}
                        />
                    </View>
                </View>
                <View style={[Presets.Loginitem,{alignItems:'center',marginTop:30}]}>
                    <View style={Presets.LoginButton}>
                        <TouchableOpacity  onPress={() => navigation.navigate('Home')}>
                            <Text style={{color:colors.white,fontSize:18}}>Register</Text>
                        </TouchableOpacity>
                    </View>
                </View>
             </View>
            </KeyboardAvoidingView>
        </ScrollView>
    );0
}

export default Register;
