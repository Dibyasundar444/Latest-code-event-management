import React, { useRef, useState } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View, ScrollView, Dimensions, ImageBackground, Switch, TextInput } from 'react-native';
import  Ionicons from 'react-native-vector-icons/Ionicons';
import  Fontisto from 'react-native-vector-icons/Fontisto';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Feather from 'react-native-vector-icons/Feather';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';
import ToggleSwitch from 'toggle-switch-react-native';
import RBSheet from "react-native-raw-bottom-sheet";
import BottomSheet from './BottomSheet';


const { height, width } = Dimensions.get("window");

const Scanner = ({navigation}) => {

    const refRBSheet1 = useRef();
    const refRBSheet2 = useRef();
    const [isOn, setIsOn] = useState(false);
    
    return (
        <View style={styles.container}>
            <View style={{height:height/3,backgroundColor:"#000",marginTop:10}}>
                <View style={{alignItems:"center",flexDirection:"row",marginLeft:10}}>
                    <Ionicons name='chevron-back' color="#fff" size={28} onPress={()=>navigation.goBack()} />
                    <Text style={{color:"#fff",textAlign:"center",flex:0.9}}>Scan here</Text>
                </View>
                <View style={{alignItems:"center",marginVertical:20}}>
                    <AntDesign name='scan1' color="#fff" size={120} />
                    <Ionicons name='flash-off' color="#fff" size={24} style={{marginTop:10}} />
                </View>
            </View>
            <ScrollView style={{backgroundColor:"#fff",borderTopLeftRadius:20,borderTopRightRadius:20,top:-20}}>
                <View style={{marginHorizontal:10,flex:1}}>
                    <View style={{alignItems:"center"}}>
                        <MaterialIcons name='keyboard-arrow-up' color="#000" size={28}/>
                    </View>
                    <View style={{marginHorizontal:10,marginTop:10}}>
                        <View style={{backgroundColor:"#fff",elevation:5,borderRadius:10,marginBottom:10}}>
                            <View style={{flexDirection:"row",justifyContent:"space-between",marginHorizontal:20,alignItems:"center"}}>
                                <TextInput 
                                    placeholder='Amount'
                                    placeholderTextColor="gray"
                                    style={{width:width/1.5,color:"#000"}}
                                />
                                {/* <Text style={{color:"gray"}}>Amount</Text> */}
                                <MaterialIcons name='payment' color="#000" size={20} />
                            </View>
                        </View>
                        <View style={{backgroundColor:"#fff",elevation:5,borderRadius:10,marginBottom:10}}>
                            <View style={{flexDirection:"row",justifyContent:"space-between",marginHorizontal:20,marginVertical:10,alignItems:"center"}}>
                                <Text style={{color:"gray"}}>Tags</Text>
                                <MaterialCommunityIcons name='tag-multiple-outline' color="#000" size={20} />
                            </View>
                        </View>
                        <View style={{backgroundColor:"#fff",elevation:5,borderRadius:10,marginBottom:10}}>
                            <View style={{flexDirection:"row",justifyContent:"space-between",marginHorizontal:20,marginVertical:10,alignItems:"center"}}>
                                <Text style={{color:"gray"}}>Attendance</Text>
                                <Fontisto name='hashtag' color="#000" size={16} />
                            </View>
                        </View>
                        <View style={{backgroundColor:"#fff",elevation:5,borderRadius:10,marginBottom:10}}>
                            <View style={{flexDirection:"row",justifyContent:"space-between",marginHorizontal:20,marginVertical:10,alignItems:"center"}}>
                                <Text style={{color:"gray"}}>I know my attendance</Text>
                                <ToggleSwitch
                                    isOn={isOn}
                                    onColor="#fff"
                                    offColor="#fff"
                                    trackOffStyle={{borderWidth:0.5}}
                                    trackOnStyle={{borderWidth:0.5}}
                                    thumbOffStyle={{backgroundColor:"#000"}}
                                    thumbOnStyle={{backgroundColor:"#19cf43"}}
                                    size="small"
                                    onToggle={isOn => setIsOn(isOn)}
                                />
                            </View>
                        </View>
                        <View style={{backgroundColor:"#fff",elevation:5,borderRadius:10,marginBottom:10}}>
                            <View style={{flexDirection:"row",justifyContent:"space-between",marginHorizontal:20,marginVertical:10,alignItems:"center"}}>
                                <Text style={{color:"gray"}}>Split with</Text>
                                <Text style={{color:"#000"}}>+</Text>
                                
                            </View>
                        </View>
                        <View style={{flexDirection:'row',alignItems:"center",marginBottom:10,justifyContent:"center"}}>
                            <View style={{height:50,width:50,borderRadius:50/2,borderColor:"#19cf43",borderWidth:0.3,justifyContent:"center",alignItems:"center",elevation:9,backgroundColor:"#fff"}}>
                                <Text style={{color:"#000",fontSize:12}}>Amit</Text>
                            </View>
                            <View style={{height:50,width:50,borderRadius:50/2,borderColor:"#19cf43",borderWidth:0.3,justifyContent:"center",alignItems:"center",elevation:9,backgroundColor:"#fff",marginLeft:10}}>
                                <Text style={{color:"#000",fontSize:12}}>Koi</Text>
                            </View>
                            <View style={{height:50,width:50,borderRadius:50/2,borderColor:"#19cf43",borderWidth:0.3,justifyContent:"center",alignItems:"center",elevation:9,backgroundColor:"#fff",marginLeft:10}}>
                                <Text style={{color:"#000",fontSize:12}}>Ajit</Text>
                            </View>
                            <View style={{height:50,width:50,borderRadius:50/2,borderColor:"#19cf43",borderWidth:0.3,justifyContent:"center",alignItems:"center",elevation:9,backgroundColor:"#fff",marginLeft:10}}>
                                <Text style={{color:"#000",fontSize:12}}>+</Text>
                                <Text style={{color:"#000",fontSize:10,top:-5,textAlign:"center"}}>Add team</Text>
                            </View>
                        </View>
                        <View style={{backgroundColor:"#fff",elevation:5,borderRadius:10,marginBottom:10}}>
                            <View style={{flexDirection:"row",justifyContent:"space-between",marginHorizontal:20,marginVertical:10,alignItems:"center"}}>
                                <Text style={{color:"gray"}}>Split Logic</Text>
                                <View style={{flexDirection:"row",alignItems:"center"}}>
                                    <Ionicons name='person' color="#000" />
                                    <View style={{borderWidth:0.7,backgroundColor:"gray",borderColor:"gray",height:15,marginHorizontal:5}} />
                                    <Ionicons name='person' color="#000" />
                                </View>
                            </View>
                        </View>
                        <View style={{backgroundColor:"#fff",elevation:5,borderRadius:10,marginBottom:10}}>
                            <View style={{flexDirection:"row",justifyContent:"space-between",marginHorizontal:20,marginVertical:10,alignItems:"center"}}>
                                <Text style={{color:"gray"}}>Pay by</Text>
                                <MaterialCommunityIcons name='timer-sand' color="#000" size={20} />
                            </View>
                        </View>
                    </View>
                    <View style={{alignItems:"center",marginVertical:30}}>
                        <TouchableOpacity style={{borderRadius:10,backgroundColor:"#19cf43",justifyContent:"center",alignItems:"center",width:120}}>
                            <Text style={{color:"#fff",marginVertical:10}}>Pay</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        </View>
    )
}

export default Scanner;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:"#000"
    },
})
