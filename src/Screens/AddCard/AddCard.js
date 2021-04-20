import React, {useState} from 'react';
import {KeyboardAvoidingView,TouchableOpacity, View, Text, TextInput,Image,ImageBackground,Dimensions, ScrollView} from 'react-native';
import {Presets} from '../../styles';
import colors from '../../styles/colors';

function AddCard ({props}) {
    const [navigation, setnavigation] = useState(props.navigation);
    return (
        <View style={Presets.AddCardContainer}>
                <View style={Presets.NameItem}>
                        <TextInput
                            style={Presets.CardInput}
                            placeholder={"First Name"}
                        />
                        <TextInput
                            style={Presets.CardInput}
                            placeholder={"Last Name"}
                        />
                </View>
                <View style={Presets.Carditem}>
                        <TextInput
                            style={Presets.CardInput2}
                            placeholder={"Card Number"}
                        />
                </View>
                <View style={Presets.NameItem}>
                        <TextInput
                            style={Presets.CardInput3}
                            placeholder={"MM"}
                        />
                        <TextInput
                            style={Presets.CardInput3}
                            placeholder={"YY"}
                        />
                        <TextInput
                            style={Presets.CardInput3}
                            placeholder={"CVV"}
                        />
                </View>
                <View style={Presets.Carditem}>
                        <TextInput
                            style={Presets.CardInput2}
                            placeholder={"Billing ZIP code"}
                        />
                </View>
                <View style={[Presets.Filteritem,{alignItems:'center',margin:10,marginTop:30,}]}>
                    <View style={Presets.FilterButton}>
                        <TouchableOpacity  onPress={() => navigation.navigate('Requset')}>
                            <Text style={{color:colors.white,fontSize:18}}>Add Card</Text>
                        </TouchableOpacity>
                    </View>
                </View>
        </View>
    );
}

export default AddCard;
