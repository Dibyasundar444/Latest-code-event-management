import React, { useRef, useState } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View, ScrollView, Dimensions, ImageBackground } from 'react-native';
import  Ionicons from 'react-native-vector-icons/Ionicons';
import  Fontisto from 'react-native-vector-icons/Fontisto';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Feather from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import FontAwesome from 'react-native-vector-icons/FontAwesome';

// import BottomSheet from 'reanimated-bottom-sheet';

import Header from './new/components/header';
import HomeScreen from './new/components/homeScreen';
import BrowseScreen from './new/BrowseScreen';
import SplitBills from './new/SplitBillScreen';


const { height } = Dimensions.get("window");

const WelcomeScreen = ({navigation}) => {

    // const sheetRef = useRef(null);
    const [activeIndex, setActiveIndex] = useState(0);

    const segmentClicked=(index)=>{
        setActiveIndex(index);
    };

    

    const renderInner=()=>{
        if(activeIndex==0){
            return <HomeScreen
                        navigation={()=>navigation.navigate("Recommended")}
                        NewEvent={()=>navigation.navigate("createNewEvent")}
                    />
        }
        if(activeIndex==1){
            return <BrowseScreen 
                        navigation={()=>navigation.navigate("Food")}
                    />
        }
        if(activeIndex==2){
            return <SplitBills 
                        navigation={()=>navigation.navigate("CreateNewBill")}
                    />
        }
    };
    const renderHeader=()=>{};

    return (
        <View style={styles.container}>
            <Header 
                profile={()=>navigation.navigate("Profile")}
            />
            {/* <BottomSheet 
                ref={sheetRef}
                snapPoints={[height/2,height/1.2]}
                initialSnap={1}
                enabledGestureInteraction={true}
                // renderHeader={renderHeader}
                renderContent={renderInner}
            /> */}
            {renderInner()}
            <View style={{flexDirection:"row",justifyContent:"space-around",borderRadius:20,elevation:2,backgroundColor:"#fff",position:"absolute",bottom:20,width:"90%",marginHorizontal:20}}>
                <View style={styles.float}>
                        <TouchableOpacity 
                        style={{height:50,width:50,borderRadius:50/2,backgroundColor:"#19cf43",
                        justifyContent:"center",alignItems:"center",marginRight:10}}
                        onPress={()=>navigation.navigate("Scanner")}
                       
                        >
                            <Ionicons name='scan-outline' color="#fff" size={24} style={{marginLeft:2}} />
                        </TouchableOpacity>
                </View>
                <TouchableOpacity style={{alignItems:"center",marginVertical:10}} active={activeIndex==0} onPress={()=>segmentClicked(0)}>
                    <View style={activeIndex==0 ? {flexDirection:"row",alignItems:"center",borderRadius:10,backgroundColor:"#19cf43",width:100,height:35,marginVertical:10,justifyContent:"center"} : {alignItems:"center"}}>
                        <FontAwesome5 name='chalkboard-teacher' color={activeIndex==0? "#fff" : "#000"} size={18} style={activeIndex !=0 ?{marginTop:10}:null} />
                        <Text style={[activeIndex==0? {marginLeft:5,color:"#fff"}:{color:"#000",fontSize:11}]}>Events</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={{alignItems:"center",marginVertical:10}} active={activeIndex==1} onPress={()=>segmentClicked(1)}>
                    <View style={activeIndex==1 ? {flexDirection:"row",alignItems:"center",borderRadius:10,backgroundColor:"#19cf43",width:100,height:35,marginVertical:10,justifyContent:"center"} : {alignItems:"center"}}>
                        <MaterialCommunityIcons name='file-table-box-multiple-outline' color={activeIndex==1? "#fff" : "#000"} size={18} style={activeIndex !=1 ?{marginTop:10}:null} />
                        <Text style={[activeIndex==1 ? {marginLeft:5,color:"#fff"}:{color:"#000",fontSize:11}]}>Browse</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={{alignItems:"center",marginVertical:10}} active={activeIndex==2} onPress={()=>segmentClicked(2)}>
                    <View style={activeIndex == 2 ? {flexDirection:"row",alignItems:"center",borderRadius:10,backgroundColor:"#19cf43",width:100,height:35,marginVertical:10,justifyContent:"center"} : {alignItems:"center"}}>
                        <FontAwesome name='save' color={activeIndex== 2 ? "#fff" : "#000"} size={18} style={activeIndex !=2 ?{marginTop:10}:null} />
                        <Text style={[activeIndex== 2 ? {marginLeft:5,color:"#fff"}:{color:"#000",fontSize:11}]}>Split Bills</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default WelcomeScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:"#000",
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
        borderRadius:12,
        marginRight:10,
        marginBottom:10,
        marginTop:10,
        overflow:"hidden"
    },
    float: {
        position: "absolute",
        top: -60,
        right:0
    }
})
