import React, {useState} from 'react';
import {KeyboardAvoidingView,TouchableOpacity, View, Text, TextInput,Image,ImageBackground,Dimensions, ScrollView} from 'react-native';
import {Presets} from '../../styles';
import colors from '../../styles/colors';
import Icon from 'react-native-vector-icons/FontAwesome';

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
        <View>
            <View style={Presets.ProfileContainar}>
                <View>
                    <Image
                        style={Presets.Profileimage}
                        source={require('../../assest/img/profile.jpg')}
                    />
                </View>
                <View style={Presets.ProfileName}>
                    <Text style={{fontSize:25,color:'blue'}}>Neha Viabhav</Text>
                    <Text>Studant</Text>
                </View>
                <View style={{width:'17%'}}>
                    <Icon
                        name="edit"
                        size={35}
                        color={'#DAD7E0'}
                        style={{padding:10}}
                    />
                </View>
            </View>
            <View style={Presets.ProfileInfo}>
                <View>
                    <Text style={Presets.title}>Username</Text>
                    <Text>Test@test.com</Text>
                </View>
                <View>
                    <Text style={Presets.title}>Grade</Text>
                    <Text>UNIVERSITY</Text>
                </View>
                <View>
                    <Text style={Presets.title}>Email</Text>
                    <Text>Test@test.com</Text>
                </View>
            </View>
        </View>
    )
}

export default Register;
