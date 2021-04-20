import React, {useState} from 'react';
import {KeyboardAvoidingView,TouchableOpacity, View, Text, TextInput,Image,ImageBackground,Dimensions, ScrollView} from 'react-native';
import {Presets} from '../../styles';
import colors from '../../styles/colors';

function Filter ({props}) {

        const [navigation, setnavigation] = useState(props.navigation);
    return (
        <View style={Presets.FilterContainer}>
                <View style={Presets.Filteritem}>
                    <View>
                        <TextInput
                            style={Presets.FilterInput}
                            placeholder={"Grade"}
                        />
                    </View>
                </View>
                <View style={Presets.Filteritem}>
                    <View>
                        <TextInput
                            style={Presets.FilterInput}
                            placeholder={"Subject"}
                        />
                    </View>
                </View>
                <View style={Presets.Filteritem}>
                    <View>
                        <TextInput
                            style={Presets.FilterInput}
                            placeholder={"Location"}
                        />
                    </View>
                </View>
                <View style={[Presets.Filteritem,{alignItems:'center',marginTop:50}]}>
                            <TouchableOpacity  onPress={() => navigation.navigate('TeacherList')} 
                                   style={Presets.FilterButton}>
                                    <Text style={{color:colors.white,fontSize:18}}>Filter</Text>
                        </TouchableOpacity>
                </View>
        </View>
    );
}

export default Filter;
