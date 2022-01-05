import React, { useRef, useState } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View, ScrollView, Dimensions, ImageBackground, TextInput } from 'react-native';
import  Ionicons from 'react-native-vector-icons/Ionicons';
import  Fontisto from 'react-native-vector-icons/Fontisto';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Feather from 'react-native-vector-icons/Feather';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import ToggleSwitch from 'toggle-switch-react-native'
import RBSheet from "react-native-raw-bottom-sheet";


const { height } = Dimensions.get("window");

const FoodScreen = ({navigation}) => {


    
    return (
        <View style={styles.container}>
            <ImageBackground style={{height:210}} source={require("../../assets/food4.jpg")}>
                <View style={{backgroundColor: 'rgba(0,0,0,0.5)',flex:1}}>
                    <View style={{alignItems:"flex-start"}}>
                        <TouchableOpacity style={{marginTop:20,marginLeft:15}} onPress={()=>navigation.goBack()}>
                            <Ionicons name='chevron-back' color="#fff" size={28} />
                        </TouchableOpacity>
                    </View>
                    <View style={{flexDirection:"row",alignItems:"center",backgroundColor:"#fff",height:45,borderRadius:10,marginHorizontal:20,marginTop:20}}>
                        <View style={{marginHorizontal:10}}>
                            <Fontisto name='search' color="#000" size={20} />
                        </View>
                        <TextInput 
                            placeholder='Search'
                            placeholderTextColor="gray"
                            style={{flex:1,borderRadius:10,color:"#000"}}
                        />
                    </View>
                    <Text style={{color:"#fff",fontSize:24,fontWeight:"bold",textAlign:"right",marginRight:20,marginTop:20}}>Food</Text>
                </View>
            </ImageBackground>
            <ScrollView style={{backgroundColor:"#fff",borderTopLeftRadius:20,borderTopRightRadius:20,top:-20}}>
                <View style={{marginHorizontal:10,flex:1}}>
                <ScrollView style={{borderTopLeftRadius:5,borderTopRightRadius:5,borderTopLeftRadius:20,borderTopRightRadius:20,backgroundColor:"#fff"}}
                showsVerticalScrollIndicator={false}
            >
                <View style={{marginHorizontal:15}}>
                    <Text style={{color:"#000",marginTop:10,marginLeft:10}}>Dinner with Friends</Text>
                    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                        <ImageBackground style={styles.box} source={require("../../assets/food2.jpeg")}>
                            <View style={{backgroundColor: 'rgba(0,0,0,0.5)'}}>
                                <View style={{marginHorizontal:10,marginVertical:5}}>
                                    <View style={{flexDirection:"row",alignItems:"center"}}>
                                        <Fontisto name='persons' color="#fff" size={12} />
                                        <Text style={{color:"#fff",marginLeft:5,fontWeight:"500"}}>5</Text>
                                    </View>
                                    <View style={{flexDirection:"row",alignItems:"center"}}>
                                        <MaterialCommunityIcons name='progress-clock' color="#fff" size={14} />
                                        <Text style={{color:"#fff",marginLeft:5,fontSize:12,fontWeight:"500"}}>Tonight, 9.00pm</Text>
                                    </View>
                                    <Text style={{color:"#fff",marginTop:50,fontWeight:"500"}}>Dinner</Text>
                                    <Text style={{color:"#fff",fontWeight:"500"}}>@ BBQ</Text>
                                </View>
                            </View>
                        </ImageBackground>
                        <ImageBackground style={styles.box} source={require("../../assets/food1.jpeg")}>
                            <View style={{backgroundColor: 'rgba(0,0,0,0.5)'}}>
                                <View style={{marginHorizontal:10,marginVertical:5}}>
                                    <View style={{flexDirection:"row",alignItems:"center"}}>
                                        <Fontisto name='persons' color="#fff" size={12} />
                                        <Text style={{color:"#fff",marginLeft:5,fontWeight:"500"}}>5</Text>
                                    </View>
                                    <View style={{flexDirection:"row",alignItems:"center"}}>
                                        <MaterialCommunityIcons name='progress-clock' color="#fff" size={14} />
                                        <Text style={{color:"#fff",marginLeft:5,fontSize:12,fontWeight:"500"}}>Tonight, 9.00pm</Text>
                                    </View>
                                    <Text style={{color:"#fff",marginTop:50,fontWeight:"500"}}>Dinner</Text>
                                    <Text style={{color:"#fff",fontWeight:"500"}}>@ BBQ</Text>
                                </View>
                            </View>
                        </ImageBackground>
                        <ImageBackground style={styles.box} source={require("../../assets/food3.jpeg")} blurRadius={0}>
                            <View style={{backgroundColor: 'rgba(0,0,0,0.5)'}}>
                                <View style={{marginHorizontal:10,marginVertical:5}}>
                                    <View style={{flexDirection:"row",alignItems:"center"}}>
                                        <Fontisto name='persons' color="#fff" size={12} />
                                        <Text style={{color:"#fff",marginLeft:5,fontWeight:"500"}}>5</Text>
                                    </View>
                                    <View style={{flexDirection:"row",alignItems:"center"}}>
                                        <MaterialCommunityIcons name='progress-clock' color="#fff" size={14} />
                                        <Text style={{color:"#fff",marginLeft:5,fontSize:12,fontWeight:"500"}}>Tonight, 9.00pm</Text>
                                    </View>
                                    <Text style={{color:"#fff",marginTop:50,fontWeight:"500"}}>Dinner</Text>
                                    <Text style={{color:"#fff",fontWeight:"500"}}>@ BBQ</Text>
                                </View>
                            </View>
                        </ImageBackground>
                    </ScrollView>
                    <Text style={{color:"#000",marginLeft:10}}>Pizza</Text>
                    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                        <ImageBackground style={styles.box} source={require("../../assets/food4.jpg")}>
                            <View style={{backgroundColor: 'rgba(0,0,0,0.5)'}}>
                                <View style={{marginHorizontal:10,marginVertical:5}}>
                                    <View style={{flexDirection:"row",alignItems:"center"}}>
                                        <Fontisto name='persons' color="#fff" size={12} />
                                        <Text style={{color:"#fff",marginLeft:5,fontWeight:"500"}}>5</Text>
                                    </View>
                                    <View style={{flexDirection:"row",alignItems:"center"}}>
                                        <MaterialCommunityIcons name='progress-clock' color="#fff" size={14} />
                                        <Text style={{color:"#fff",marginLeft:5,fontSize:12,fontWeight:"500"}}>Tonight, 9.00pm</Text>
                                    </View>
                                    <Text style={{color:"#fff",marginTop:50,fontWeight:"500"}}>Dinner</Text>
                                    <Text style={{color:"#fff",fontWeight:"500"}}>@ BBQ</Text>
                                </View>
                            </View>
                        </ImageBackground>
                        <ImageBackground style={styles.box} source={require("../../assets/food1.jpeg")}>
                            <View style={{backgroundColor: 'rgba(0,0,0,0.5)'}}>
                                <View style={{marginHorizontal:10,marginVertical:5}}>
                                    <View style={{flexDirection:"row",alignItems:"center"}}>
                                        <Fontisto name='persons' color="#fff" size={12} />
                                        <Text style={{color:"#fff",marginLeft:5,fontWeight:"500"}}>5</Text>
                                    </View>
                                    <View style={{flexDirection:"row",alignItems:"center"}}>
                                        <MaterialCommunityIcons name='progress-clock' color="#fff" size={14} />
                                        <Text style={{color:"#fff",marginLeft:5,fontSize:12,fontWeight:"500"}}>Tonight, 9.00pm</Text>
                                    </View>
                                    <Text style={{color:"#fff",marginTop:50,fontWeight:"500"}}>Dinner</Text>
                                    <Text style={{color:"#fff",fontWeight:"500"}}>@ BBQ</Text>
                                </View>
                            </View>
                        </ImageBackground>
                        <ImageBackground style={styles.box} source={require("../../assets/food3.jpeg")}>
                            <View style={{backgroundColor: 'rgba(0,0,0,0.5)'}}>
                                <View style={{marginHorizontal:10,marginVertical:5}}>
                                    <View style={{flexDirection:"row",alignItems:"center"}}>
                                        <Fontisto name='persons' color="#fff" size={12} />
                                        <Text style={{color:"#fff",marginLeft:5,fontWeight:"500"}}>5</Text>
                                    </View>
                                    <View style={{flexDirection:"row",alignItems:"center"}}>
                                        <MaterialCommunityIcons name='progress-clock' color="#fff" size={14} />
                                        <Text style={{color:"#fff",marginLeft:5,fontSize:12,fontWeight:"500"}}>Tonight, 9.00pm</Text>
                                    </View>
                                    <Text style={{color:"#fff",marginTop:50,fontWeight:"500"}}>Dinner</Text>
                                    <Text style={{color:"#fff",fontWeight:"500"}}>@ BBQ</Text>
                                </View>
                            </View>
                        </ImageBackground>
                    </ScrollView>
                    <Text style={{color:"#000",marginLeft:10}}>Offer Close to You</Text>
                    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                        <ImageBackground style={styles.box} source={require("../../assets/food4.jpg")}>
                            <View style={{backgroundColor: 'rgba(0,0,0,0.5)'}}>
                                <View style={{marginHorizontal:10,marginVertical:5}}>
                                    <View style={{flexDirection:"row",alignItems:"center"}}>
                                        <Fontisto name='persons' color="#fff" size={12} />
                                        <Text style={{color:"#fff",marginLeft:5,fontWeight:"500"}}>5</Text>
                                    </View>
                                    <View style={{flexDirection:"row",alignItems:"center"}}>
                                        <MaterialCommunityIcons name='progress-clock' color="#fff" size={14} />
                                        <Text style={{color:"#fff",marginLeft:5,fontSize:12,fontWeight:"500"}}>Tonight, 9.00pm</Text>
                                    </View>
                                    <Text style={{color:"#fff",marginTop:50,fontWeight:"500"}}>Dinner</Text>
                                    <Text style={{color:"#fff",fontWeight:"500"}}>@ BBQ</Text>
                                </View>
                            </View>
                        </ImageBackground>
                        <ImageBackground style={styles.box} source={require("../../assets/food1.jpeg")}>
                            <View style={{backgroundColor: 'rgba(0,0,0,0.5)'}}>
                                <View style={{marginHorizontal:10,marginVertical:5}}>
                                    <View style={{flexDirection:"row",alignItems:"center"}}>
                                        <Fontisto name='persons' color="#fff" size={12} />
                                        <Text style={{color:"#fff",marginLeft:5,fontWeight:"500"}}>5</Text>
                                    </View>
                                    <View style={{flexDirection:"row",alignItems:"center"}}>
                                        <MaterialCommunityIcons name='progress-clock' color="#fff" size={14} />
                                        <Text style={{color:"#fff",marginLeft:5,fontSize:12,fontWeight:"500"}}>Tonight, 9.00pm</Text>
                                    </View>
                                    <Text style={{color:"#fff",marginTop:50,fontWeight:"500"}}>Dinner</Text>
                                    <Text style={{color:"#fff",fontWeight:"500"}}>@ BBQ</Text>
                                </View>
                            </View>
                        </ImageBackground>
                        <ImageBackground style={styles.box} source={require("../../assets/food3.jpeg")}>
                            <View style={{backgroundColor: 'rgba(0,0,0,0.5)'}}>
                                <View style={{marginHorizontal:10,marginVertical:5}}>
                                    <View style={{flexDirection:"row",alignItems:"center"}}>
                                        <Fontisto name='persons' color="#fff" size={12} />
                                        <Text style={{color:"#fff",marginLeft:5,fontWeight:"500"}}>5</Text>
                                    </View>
                                    <View style={{flexDirection:"row",alignItems:"center"}}>
                                        <MaterialCommunityIcons name='progress-clock' color="#fff" size={14} />
                                        <Text style={{color:"#fff",marginLeft:5,fontSize:12,fontWeight:"500"}}>Tonight, 9.00pm</Text>
                                    </View>
                                    <Text style={{color:"#fff",marginTop:50,fontWeight:"500"}}>Dinner</Text>
                                    <Text style={{color:"#fff",fontWeight:"500"}}>@ BBQ</Text>
                                </View>
                            </View>
                        </ImageBackground>
                    </ScrollView>
                </View>
            </ScrollView>
                </View>
            </ScrollView>
        </View>
    )
}

export default FoodScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:"#fff"
    },
    box: {
        height:150,
        width:130,
        borderRadius:12,
        marginRight:10,
        marginBottom:10,
        marginTop:10,
        overflow:"hidden"
    },
})
