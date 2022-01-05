import React, { useRef } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View, ScrollView, Dimensions, ImageBackground } from 'react-native';
import  Ionicons from 'react-native-vector-icons/Ionicons';
import  Fontisto from 'react-native-vector-icons/Fontisto';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Feather from 'react-native-vector-icons/Feather';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import RBSheet from "react-native-raw-bottom-sheet";
import BottomSheet from './components/BottomSheet';
import Header from './components/header';

const { height, width } = Dimensions.get("window");

const SplitBills = ({navigation}) => {

    
    return (
        <View style={styles.container}>
           <View style={styles.view1}>
               <View style={{flexDirection:"row",alignItems:"center"}}>
                   <AntDesign name="wallet" color="#fff" size={18} />
                   <Text style={{color:"#fff",marginLeft:5}}>Your Wallet</Text>
               </View>
               <View style={{flexDirection:"row",marginVertical:20,alignItems:"flex-end"}}>
                    <Text style={{color:"#fff",fontSize:26,fontWeight:"700"}}>500</Text>
                    <Text style={{color:"#fff",marginBottom:5,marginLeft:5}}>Total Balance</Text>
               </View>
               <View style={{flexDirection:"row",justifyContent:"space-between"}}>
                   <View style={styles.rectangle}>
                       <Text style={{color:"#000"}}>You recieve</Text>
                       <Text style={{color:"#000",fontSize:24,fontWeight:"500"}}>500</Text>
                   </View>
                   <View style={styles.rectangle}>
                       <Text style={{color:"#000"}}>You paid</Text>
                       <Text style={{color:"#000",fontSize:24,fontWeight:"500"}}>0</Text>
                   </View>
               </View>
           </View>
           <ScrollView style={{borderTopLeftRadius:5,borderTopRightRadius:5,borderTopLeftRadius:20,borderTopRightRadius:20,backgroundColor:"#fff"}}
                showsVerticalScrollIndicator={false}
            >
                <View style={{marginHorizontal:15}}>
                    <View style={{alignItems:"center"}}>
                        <MaterialIcons name='keyboard-arrow-up' color="#000" size={28}/>
                    </View>
                    <Text style={{color:"#000",marginVertical:10,marginLeft:10}}>My Collections</Text>
                    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                        <TouchableOpacity style={[styles.box,{backgroundColor:"#fff",elevation:5,marginLeft:10}]} activeOpacity={0.6} onPress={navigation}>
                            <View style={{justifyContent:"center",alignItems:"center",flex:1}}>
                                <AntDesign name='pluscircleo' color="#19cf43" size={28} />
                                <Text style={{color:"#000",marginTop:10}}>Create a New</Text>
                                <Text style={{color:"#000"}}>Bill</Text>
                            </View>
                        </TouchableOpacity>
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
                    <Text style={{color:"#000",marginBottom:10,marginLeft:10}}>My Dues</Text>
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
                        <ImageBackground style={[styles.box,{marginBottom:150}]} source={require("../../assets/food3.jpeg")}>
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
    )
}

export default SplitBills;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:"#000"
    },
    view1: {
        height: height/3.5,
        marginTop: 20,
        marginHorizontal: 30
    },
    rectangle: {
        width: width/2.5,
        backgroundColor: "#fff",
        borderRadius: 10,
        alignItems:"center",
        justifyContent:"center",
        height: 70
    },
    box: {
        height:150,
        width:150,
        borderRadius:12,
        marginRight:10,
        marginBottom:10,
        marginTop:10,
        overflow:"hidden"
    },
})
