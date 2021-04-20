import React, {useState, useEffect} from 'react';
import {ImageBackground,View, StatusBar, SafeAreaView,ScrollView,Dimensions} from 'react-native';
import Header from './Header';
import Footer from './Footer';
import {Presets} from '../../styles';
import {useRoute} from '@react-navigation/native';

export default function Layout({children}) {

    const height = Dimensions.get('window').height;
    const [currentScene, setcurrentScene] = useState('');
    const route = useRoute().name;

    if(currentScene == ''){
        setcurrentScene(route)
    }

return (
            <SafeAreaView>
                    <View style={Presets.fullScreen}>
                        <StatusBar hidden={true} />
                        <Header />
                        <ScrollView>
                            <View>{children}</View>
                        </ScrollView>
                        <Footer/>
                    </View>
            </SafeAreaView>
        );

}
