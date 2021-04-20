import React, {useState} from 'react';
import {KeyboardAvoidingView,TouchableOpacity, View, Text, TextInput,Image,ImageBackground,Dimensions, ScrollView} from 'react-native';
import {Presets} from '../../styles';
import colors from '../../styles/colors';

const Login = ({props}) => {

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
             <View style={[Presets.LoginContainer,{paddingTop:200}]}>
                <View style={Presets.Loginitem}>
                    {/* <View>
                        <Text>Username</Text>
                    </View> */}
                    <View>
                        <TextInput
                            style={Presets.LoginInput}
                            placeholder={"  Username"}
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
                            placeholder={"  Password"}
                            style={Presets.LoginInput}
                        />
                    </View>
                </View>
                <View style={[Presets.Loginitem,{alignItems:'center',marginTop:25}]} >
                    <View>
                        <Text style={{color:colors.blue}}>Forget password ?</Text>
                    </View>
                </View>
                <View style={[Presets.Loginitem,{alignItems:'center',marginTop:30}]}>
                    <TouchableOpacity  style={Presets.LoginButton} onPress={() => navigation.navigate('Home')}>
                            <Text style={{color:colors.white,fontSize:18}}>LOGIN</Text>
                        </TouchableOpacity>
                </View>
                <View style={[Presets.Loginitem,{flexDirection: 'row',marginTop:45}]}>
                    <View style={{width:"80%"}}>
                        <Text style={{color:colors.grayLink}}>You don't have any account?</Text>
                    </View>
                    <View style={{width:"20%"}}>
                        <TouchableOpacity  onPress={() => navigation.navigate('Register')}>
                            <Text style={{color:colors.blue}} >Register</Text>
                        </TouchableOpacity>
                    </View>
                </View>
             </View>
            </KeyboardAvoidingView>
        </ScrollView>
    );
}

export default Login;
