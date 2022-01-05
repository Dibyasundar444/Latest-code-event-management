import React, { useRef, useState } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View, ScrollView, Dimensions, ImageBackground } from 'react-native';
import  Ionicons from 'react-native-vector-icons/Ionicons';
import  Fontisto from 'react-native-vector-icons/Fontisto';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Feather from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import AntDesign from 'react-native-vector-icons/AntDesign';
import Carousel from 'react-native-snap-carousel';


const { height } = Dimensions.get("window");
const SLIDER_WIDTH = Dimensions.get('window').width;
const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.5);
const ITEM_HEIGHT = Math.round(ITEM_WIDTH * 4 / 3.5);

const DATA = [
    {
        "id": "0",
        "img": require("../../../assets/food1.jpeg")
    },
    {
        "id": "1",
        "img": require("../../../assets/food2.jpeg")
    },
    {
        "id": "2",
        "img": require("../../../assets/food3.jpeg")
    },
    {
        "id": "3",
        "img": require("../../../assets/food4.jpg")
    },
    {
        "id": "4",
        "img": require("../../../assets/food1.jpeg")
    },
    {
        "id": "5",
        "img": require("../../../assets/food3.jpeg")
    }
];
// for (let i = 0; i < 10; i++) {
//   DATA.push(i)
// }

const HomeScreen=({navigation,NewEvent})=>{

    const [index, setIndex] = useState(0);
    const carousel=useRef();

    function _renderItem({ item }) {
        return (
            <TouchableOpacity style={styles.itemContainer} onPress={navigation}>
                <ImageBackground source={item.img} style={styles.itemContainer}>
                    <View style={{flex:1,backgroundColor:"rgba(0,0,0,0.3)"}}/>
                </ImageBackground>
            </TouchableOpacity>
        );
      };


    return(
        <>
            <Text style={{textAlign:"center",color:"#fff",marginTop:10,marginBottom:10}}>Recommended Events</Text>
            {/* <TouchableOpacity style={{height:height/3,backgroundColor:"#000"}} onPress={navigation}>              
            </TouchableOpacity> */}
            <Carousel
                ref={carousel}
                data={DATA}
                renderItem={_renderItem}
                sliderWidth={SLIDER_WIDTH}
                itemWidth={ITEM_WIDTH}
                containerCustomStyle={styles.carouselContainer}
                inactiveSlideShift={0}
                onSnapToItem={(index) => setIndex(index)}
                useScrollView={true}          
            />
            <ScrollView style={{borderTopLeftRadius:5,borderTopRightRadius:5,borderTopLeftRadius:20,borderTopRightRadius:20,backgroundColor:"#fff"}}
                showsVerticalScrollIndicator={false}
            >
                <View style={{marginHorizontal:15}}>
                    <View style={{alignItems:"center"}}>
                        <MaterialIcons name='keyboard-arrow-up' color="#000" size={28}/>
                    </View>
                    <Text style={{color:"#000",marginVertical:10,marginLeft:10}}>Your Upcoming Events</Text>
                    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                        <View style={[styles.box,{backgroundColor:"#fff",elevation:5,marginLeft:10}]}>
                            <View style={{justifyContent:"center",alignItems:"center",flex:1}}>
                                <Feather name='search' color="#000" size={26} />
                                <Text style={{color:"#000",marginTop:10}}>Browse More</Text>
                                <Text style={{color:"#000"}}>Events</Text>
                            </View>
                        </View>
                        <ImageBackground style={styles.box} source={require("../../../assets/food2.jpeg")}>
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
                        <ImageBackground style={styles.box} source={require("../../../assets/food1.jpeg")}>
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
                        <ImageBackground style={styles.box} source={require("../../../assets/food3.jpeg")} blurRadius={0}>
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
                    <Text style={{color:"#000",marginBottom:10,marginLeft:10}}>Events I am Organizing</Text>
                    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                        <TouchableOpacity style={[styles.box,{backgroundColor:"#fff",elevation:5,marginLeft:10}]} activeOpacity={0.6} onPress={NewEvent}>
                            <View style={{justifyContent:"center",alignItems:"center",flex:1}}>
                                <AntDesign name='pluscircleo' color="#19cf43" size={28} />
                                <Text style={{color:"#000",marginTop:10}}>Create a New</Text>
                                <Text style={{color:"#000"}}>Event</Text>
                            </View>
                        </TouchableOpacity>
                        <ImageBackground style={styles.box} source={require("../../../assets/food4.jpg")}>
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
                        <ImageBackground style={styles.box} source={require("../../../assets/food1.jpeg")}>
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
                        <ImageBackground style={[styles.box,{marginBottom:150}]} source={require("../../../assets/food3.jpeg")}>
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
        </>
    );
};

export default HomeScreen;



const styles = StyleSheet.create({
    box: {
        height:150,width:150,
        borderRadius:12,
        marginRight:10,
        marginBottom:10,
        marginTop:10,
        overflow:"hidden"
    },
    carouselContainer: {
        height: height/2.5,
    },
    itemContainer: {
    width: ITEM_WIDTH,
    height: ITEM_HEIGHT,
    // alignItems: 'center',
    // backgroundColor:"blue",
    // justifyContent: 'center',
    borderRadius: 15,
    overflow:"hidden"
    },
    itemLabel: {
    color: 'white',
    fontSize: 24
    },
})