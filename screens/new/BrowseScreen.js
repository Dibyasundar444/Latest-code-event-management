import React, { useRef, useState } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View, ScrollView, Dimensions, ImageBackground, TextInput, FlatList } from 'react-native';
import  Ionicons from 'react-native-vector-icons/Ionicons';
import  Fontisto from 'react-native-vector-icons/Fontisto';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Feather from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const data=[
    {
        "id": "0",
        "title": "Food",
        "img": require("../../assets/food1.jpeg")
    },
    {
        "id": "1",
        "title": "Travel",
        "img": require("../../assets/food2.jpeg")
    },
    {
        "id": "2",
        "title": "Fests",
        "img": require("../../assets/food3.jpeg")
    },
    {
        "id": "3",
        "title": "Retail",
        "img": require("../../assets/food1.jpeg")
    },
    {
        "id": "4",
        "title": "",
        "img": require("../../assets/food2.jpeg")
    },
    {
        "id": "5",
        "title": "",
        "img": require("../../assets/food3.jpeg")
    },
    {
        "id": "6",
        "title": "",
        "img": require("../../assets/food2.jpeg")
    },
    {
        "id": "7",
        "title": "",
        "img": require("../../assets/food4.jpg")
    },
    {
        "id": "8",
        "title": "",
        "img": require("../../assets/food1.jpeg")
    },
    {
        "id": "9",
        "title": "Food",
        "img": require("../../assets/food3.jpeg")
    },
    {
        "id": "10",
        "title": "Food",
        "img": require("../../assets/food2.jpeg")
    },
    {
        "id": "11",
        "title": "Food",
        "img": require("../../assets/food1.jpeg")
    },
    {
        "id": "12",
        "title": "Food",
        "img": require("../../assets/food4.jpg")
    }
]

export default function BrowseScreen({navigation}){
    return(
        <View style={{marginHorizontal:20,marginTop:20}}>
            <View style={{flexDirection:"row",alignItems:"center",backgroundColor:"#fff",height:45,borderRadius:10,marginBottom:15}}>
                <View style={{marginHorizontal:10}}>
                    <Fontisto name='search' color="#000" size={20} />
                </View>
                <TextInput 
                    placeholder='Search'
                    placeholderTextColor="gray"
                    style={{flex:1,borderRadius:10,color:"#000"}}
                />
            </View>
            <View style={{height:Dimensions.get("window").height/1.51}}>
                <FlatList 
                    data={data}
                    showsVerticalScrollIndicator={false}
                    numColumns={3}
                    renderItem={(item)=>(
                        <TouchableOpacity style={{}} 
                        key={item.item.id}
                        onPress={navigation}
                        >
                            <ImageBackground source={item.item.img} style={styles.box}>
                                <View style={{flex:1,alignItems:"center",justifyContent:"center",backgroundColor:"rgba(0,0,0,0.3)"}}>
                                    <Text style={{color:"#fff",fontWeight:"800"}}>{item.item.title}</Text>
                                </View>
                            </ImageBackground>
                        </TouchableOpacity>
                    )}
                />
            </View>
        </View>
    );
};


const styles = StyleSheet.create({
    box: {
        height:120,
        width:100,
        borderRadius:10,
        marginRight:10,
        marginBottom:10,
        marginTop:10,
        overflow:"hidden"
    },
})