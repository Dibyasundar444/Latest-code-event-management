import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View, ScrollView } from 'react-native';
import  Ionicons from 'react-native-vector-icons/Ionicons';
import  Fontisto from 'react-native-vector-icons/Fontisto';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Feather from 'react-native-vector-icons/Feather';


export default function Header({profile}){
    return(
        <View style={{flexDirection:"row",justifyContent:"space-between",marginHorizontal:30,marginTop:20}}>
                <Ionicons name="person-outline" color="#fff" size={24} onPress={profile} />
            <View style={{flexDirection:"row",alignItems:"center"}}>
                <FontAwesome5 name="coins" color="#fff" size={24} />                   
                <View style={{width:30}} />
                <Fontisto name="bell" color="#fff" size={24} />
            </View>
        </View>
    );
};