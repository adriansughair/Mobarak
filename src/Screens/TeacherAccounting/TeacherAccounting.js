import React, {useState} from 'react';
import {KeyboardAvoidingView,TouchableOpacity, View, Text, TextInput,Image,ImageBackground,Dimensions, ScrollView} from 'react-native';
import {Presets} from '../../styles';
import colors from '../../styles/colors';
import Icon from 'react-native-vector-icons/FontAwesome';
import {LineChart} from "react-native-chart-kit";

function TeacherAccounting ({props}) {
    const [navigation, setnavigation] = useState(props.navigation);
  
    return (
        <View>
            <View style={Presets.ScheduleContainar}>
                <View style={{flexDirection:"row",marginBottom:25}}>
                    <TouchableOpacity 
                        onPress={()=>navigation.goBack()}
                        style={{width:'50%',justifyContent:"center"}}>
                        <Icon
                            name={"chevron-left"}
                            size={25}
                            color={"#000"}
                            style={{margin:5}}
                        />
                    </TouchableOpacity>
                    <View>
                        <Text style={{fontSize:30,color:'#000',margin:15}}>
                            Accounting
                        </Text>
                    </View>
                </View>
                <View>
                    <View>
                    </View>
                    <View style={{width:"95%",  flexDirection:"row",justifyContent:'space-between',padding:15}}>
                        <Text style={Presets.accountText} >Total Lessons</Text>
                        <Text>26</Text>
                    </View>
                    <View style={{width:"95%", flexDirection:"row",justifyContent:'space-between',padding:15}}>
                        <Text style={Presets.accountText}>Gross profit</Text>
                        <Text>1338</Text>
                    </View>
                    <View style={{width:"95%", flexDirection:"row",justifyContent:'space-between',padding:15}}>
                        <Text style={Presets.accountText}>Financial return</Text>
                        <Text>1560</Text>
                    </View>
                    <View style={{width:"95%", flexDirection:"row",justifyContent:'space-between',padding:15}}>
                        <Text style={Presets.accountText}>Application ratio</Text>
                        <Text>20%</Text>
                    </View>
                </View>
                <View>
                    <LineChart
                        data={{
                            labels: ["January", "February", "March", "April", "May", "June"],
                            datasets: [{data: [100,10,50,20,140,100]}]
                        }}
                        width={Dimensions.get("window").width*0.94} // from react-native
                        height={220}
                        // yAxisLabel=""
                        yAxisSuffix=" QR"
                        yAxisInterval={1}
                        chartConfig={{
                            backgroundColor: "#FFFFF",
                            backgroundGradientFrom: "#fffff",
                            backgroundGradientTo: "#fffff",
                            decimalPlaces: 2,
                            color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                            labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                            style: {
                            borderRadius: 16
                            },
                            propsForDots: {
                            r: "6",
                            strokeWidth: "2",
                            stroke: "#ffa726"
                            }
                        }}
                        bezier
                        style={{
                            marginVertical: 8,
                            borderRadius: 16
                        }}
                    />
                </View>
            </View>
            
        </View>
    )
}

export default TeacherAccounting;
