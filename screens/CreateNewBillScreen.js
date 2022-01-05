import React, { useState } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View, ScrollView, Dimensions } from 'react-native';
import  Ionicons from 'react-native-vector-icons/Ionicons';
import  Fontisto from 'react-native-vector-icons/Fontisto';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Feather from 'react-native-vector-icons/Feather';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import ToggleSwitch from 'toggle-switch-react-native';


const { height } = Dimensions.get("window");

const CreateNewBill = ({navigation}) => {

    const [isOn, setIsOn] = useState(false);
    
    
    return (
        <View style={styles.container}>
            <View style={{flex:1}}>
                <View style={{marginHorizontal:10}}>
                    <View style={{flexDirection:"row",marginVertical:20,marginRight:10,justifyContent:"space-between",alignItems:"center"}}>
                        <TouchableOpacity style={{}} onPress={()=>navigation.goBack()}>
                            <Ionicons name='chevron-back' color="#000" size={28} />
                        </TouchableOpacity>
                        <View style={{flexDirection:"row",alignItems:"center"}}>
                            <AntDesign name='pluscircleo' color="#19cf43" size={22} />
                            <Text style={{color:"#000",marginLeft:5,fontSize:12,fontWeight:"500"}}>Create a New Bill</Text>
                        </View>
                    </View>
                    <View style={{marginHorizontal:10,marginTop:20}}>
                        <View style={{backgroundColor:"#fff",elevation:5,borderRadius:10,marginBottom:10}}>
                            <View style={{flexDirection:"row",justifyContent:"space-between",marginHorizontal:20,marginVertical:10,alignItems:"center"}}>
                                <Text style={{color:"gray"}}>Name</Text>
                                <Ionicons name='person-outline' color="#000" size={20} />
                            </View>
                        </View>
                        <View style={{backgroundColor:"#fff",elevation:5,borderRadius:10,marginBottom:10}}>
                            <View style={{flexDirection:"row",justifyContent:"space-between",marginHorizontal:20,marginVertical:10,alignItems:"center"}}>
                                <Text style={{color:"gray"}}>Amount</Text>
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
                    <View style={{alignItems:"center",marginTop:40}}>
                        <TouchableOpacity style={{borderRadius:10,backgroundColor:"#19cf43",justifyContent:"center",alignItems:"center",width:120}}>
                            <Text style={{color:"#fff",marginVertical:10}}>Create</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>
    )
}

export default CreateNewBill;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:"#fff"
    },
    headerButton: {
        height:40,
        width:40,
        borderRadius:10,
        elevation:9,
        backgroundColor:"#fff",
        justifyContent:"center",
        alignItems:"center"
    },
    box: {
        height:150,width:150,
        borderRadius:5,
        backgroundColor:"gray",
        marginRight:10
    },
    float: {
        position: "absolute",
        top: -60,
        right:0
    }
})
