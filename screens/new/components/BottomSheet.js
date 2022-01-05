import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Ionicons from 'react-native-vector-icons/Ionicons';



export default function BottomSheet({item1,item2,item3,item4,item5,item6,item7,item8,item9,item10}){
    return(
        <View style={{backgroundColor:"#fff",flex:1}}>
            <View style={{alignItems:"center",top:-10}}>
                <View style={{flexDirection:"row",alignItems:"center"}}>
                    <Ionicons name={item1} color="#19cf43" size={16}/>
                    <Text style={{color:"#000",marginLeft:10,fontSize:13}}>{item2}</Text>
                </View>
            </View>
            <View style={{flex:1,marginTop:20}}>
                <View style={{flexDirection:"row",alignItems:"center",justifyContent:"space-around"}}>
                    <View style={{alignItems:"center"}}>
                        <View style={{height:25,width:25,backgroundColor:"#000"}}/>
                        <Text style={{color:"#000",fontSize:10}}>{item3}</Text>
                    </View>
                    <View style={{alignItems:"center"}}>
                        <View style={{height:25,width:25,backgroundColor:"gray"}}/>
                        <Text style={{color:"#000",fontSize:10}}>{item4}</Text>
                    </View>
                    <View style={{alignItems:"center"}}>
                        <View style={{height:25,width:25,backgroundColor:"gray"}}/>
                        <Text style={{color:"#000",fontSize:10}}>{item5}</Text>
                    </View>
                    <View style={{alignItems:"center"}}>
                        <View style={{height:25,width:25,backgroundColor:"gray"}}/>
                        <Text style={{color:"#000",fontSize:10}}>{item6}</Text>
                    </View>
                </View>
                <View style={{flexDirection:"row",alignItems:"center",justifyContent:"space-around",marginTop:50}}>
                    <View style={{alignItems:"center"}}>
                        <View style={{height:25,width:25,backgroundColor:"gray"}}/>
                        <Text style={{color:"#000",fontSize:10}}>{item7}</Text>
                    </View>
                    <View style={{alignItems:"center"}}>
                        <View style={{height:25,width:25,backgroundColor:"gray"}}/>
                        <Text style={{color:"#000",fontSize:10}}>{item8}</Text>
                    </View>
                    <View style={{alignItems:"center"}}>
                        <View style={{height:25,width:25,backgroundColor:"gray"}}/>
                        <Text style={{color:"#000",fontSize:10}}>{item9}</Text>
                    </View>
                    <View style={{alignItems:"center"}}>
                        <View style={{height:25,width:25,backgroundColor:"gray"}}/>
                        <Text style={{color:"#000",fontSize:10}}>{item10}</Text>
                    </View>
                </View>
            </View>
        </View>
    );
};