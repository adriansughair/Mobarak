import React, {useState} from 'react';
import {KeyboardAvoidingView,TouchableOpacity, View, Text, TextInput,Image,ImageBackground,Dimensions, ScrollView} from 'react-native';
import {Presets} from '../../styles';
import colors from '../../styles/colors';
import Icon from 'react-native-vector-icons/FontAwesome';

function TeacherList ({props}) {
    const [navigation, setnavigation] = useState(props.navigation);
    
    return (
        <View style={Presets.TeacherListContainer}>
              <TouchableOpacity
              onPress={() => navigation.navigate('PaymantStatus')}
              style={Presets.ListItem}>
                  <View style={Presets.ListItemHeader}>
                      <View>
                          <Image 
                            source={require('../../assest/img/profile.jpg')}
                            style={Presets.ListItemImage}
                          />
                      </View>
                      <View>
                          <View>
                              <Text>Elliana</Text>
                          </View>
                          <View style={Presets.StartReview}>
                                <Icon name="star" size={20} color={'#FFB807'} style={{padding:2}}/>
                                <Icon name="star" size={20} color={'#FFB807'} style={{padding:2}}/>
                                <Icon name="star" size={20} color={'#FFB807'} style={{padding:2}}/>
                                <Icon name="star" size={20} color={'#FFB807'} style={{padding:2}}/>
                                <Icon name="star" size={20} color={'#DAD7E0'} style={{padding:2}}/>
                          </View>
                      </View>
                      <View>
                          <Text>View Profile</Text>
                      </View>
                  </View>
              </TouchableOpacity>
              <TouchableOpacity
                    onPress={() => navigation.navigate('PaymantStatus')}
                    style={Presets.ListItem}>
                  <View style={Presets.ListItemHeader}>
                      <View>
                          <Image 
                            source={require('../../assest/img/profile.jpg')}
                            style={Presets.ListItemImage}
                          />
                      </View>
                      <View>
                          <View>
                              <Text>Elliana</Text>
                          </View>
                          <View style={Presets.StartReview}>
                                <Icon name="star" size={20} color={'#FFB807'} style={{padding:2}}/>
                                <Icon name="star" size={20} color={'#FFB807'} style={{padding:2}}/>
                                <Icon name="star" size={20} color={'#FFB807'} style={{padding:2}}/>
                                <Icon name="star" size={20} color={'#FFB807'} style={{padding:2}}/>
                                <Icon name="star" size={20} color={'#FFB807'} style={{padding:2}}/>
                          </View>
                      </View>
                      <View>
                          <Text>View Profile</Text>
                      </View>
                  </View>
                  </TouchableOpacity>
                    <TouchableOpacity
                    onPress={() => navigation.navigate('PaymantStatus')}
                    style={Presets.ListItem}>
                  <View style={Presets.ListItemHeader}>
                      <View>
                          <Image 
                            source={require('../../assest/img/profile.jpg')}
                            style={Presets.ListItemImage}
                          />
                      </View>
                      <View>
                          <View>
                              <Text>Elliana</Text>
                          </View>
                          <View style={Presets.StartReview}>
                                <Icon name="star" size={20} color={'#FFB807'} style={{padding:2}}/>
                                <Icon name="star" size={20} color={'#FFB807'} style={{padding:2}}/>
                                <Icon name="star" size={20} color={'#FFB807'} style={{padding:2}}/>
                                <Icon name="star" size={20} color={'#DAD7E0'} style={{padding:2}}/>
                                <Icon name="star" size={20} color={'#DAD7E0'} style={{padding:2}}/>
                          </View>
                      </View>
                      <View>
                          <Text>View Profile</Text>
                      </View>
                  </View>
                  </TouchableOpacity>
              <TouchableOpacity
              onPress={() => navigation.navigate('PaymantStatus')}
              style={Presets.ListItem}>
                  <View style={Presets.ListItemHeader}>
                      <View>
                          <Image 
                            source={require('../../assest/img/profile.jpg')}
                            style={Presets.ListItemImage}
                          />
                      </View>
                      <View>
                          <View>
                              <Text>Elliana</Text>
                          </View>
                          <View style={Presets.StartReview}>
                                <Icon name="star" size={20} color={'#FFB807'} style={{padding:2}}/>
                                <Icon name="star" size={20} color={'#FFB807'} style={{padding:2}}/>
                                <Icon name="star" size={20} color={'#DAD7E0'} style={{padding:2}}/>
                                <Icon name="star" size={20} color={'#DAD7E0'} style={{padding:2}}/>
                                <Icon name="star" size={20} color={'#DAD7E0'} style={{padding:2}}/>
                          </View>
                      </View>
                      <View>
                          <Text>View Profile</Text>
                      </View>
                  </View>
                  </TouchableOpacity>
        </View>
    );
}

export default TeacherList;
