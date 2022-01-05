import React, { useRef, useState } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View, ScrollView, Dimensions, ImageBackground, TextInput } from 'react-native';
import  Ionicons from 'react-native-vector-icons/Ionicons';
import  Fontisto from 'react-native-vector-icons/Fontisto';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Feather from 'react-native-vector-icons/Feather';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import RBSheet from "react-native-raw-bottom-sheet";
import BottomSheet from './components/BottomSheet';


const { height, width } = Dimensions.get("window");

const CreateNewEvent = ({navigation}) => {

    const refRBSheet1 = useRef();
    const [activeIndex, setActiveIndex] = useState(0);

    const segmentClicked=(index)=>{
        setActiveIndex(index);
    };

    const renderItems=()=>{
        if(activeIndex==0){
            return <Item1 />
        }
        else if(activeIndex==1){
            return <Item2 />
        }
        else return <Item3 />
    };

    const Item1=()=>(
        <>
            <View style={{backgroundColor:"#fff",elevation:5,borderRadius:10,marginBottom:10}}>
                <View style={{flexDirection:"row",marginHorizontal:20,alignItems:"center"}}>
                    <FontAwesome name='pencil' color="#000" size={16} />
                    <View style={{borderColor:"gray",backgroundColor:"gray",height:20,marginHorizontal:5,borderWidth:0.5}} />
                    <TextInput 
                        placeholder='Title'
                        placeholderTextColor="gray"
                        style={{width:width/1.5,color:"#000"}}
                    />
                    {/* <Text style={{color:"gray"}}>Title</Text> */}
                </View>
            </View>
            <View style={{backgroundColor:"#fff",elevation:5,borderRadius:10,marginBottom:10}}>
                <TextInput 
                    placeholder='Description'
                    placeholderTextColor="gray"
                    style={{color:"#000",borderRadius:10,height:80,paddingLeft:20}}
                    multiline={true}
                />
                {/* <Text style={{color:"gray",marginLeft:20,marginTop:10}}>Description</Text> */}
            </View>
            <View style={{backgroundColor:"#fff",elevation:5,borderRadius:10,marginBottom:10}}>
                <View style={{flexDirection:"row",justifyContent:"space-between",marginHorizontal:20,marginVertical:10,alignItems:"center"}}>
                    <Text style={{color:"gray"}}>Images</Text>
                    <Ionicons name='md-images-outline' color="#000" size={18} />
                </View>
            </View>
            <View style={{flexDirection:"row",justifyContent:"space-between"}}>
                <View style={{backgroundColor:"#fff",elevation:5,borderRadius:10,marginBottom:10,height:40,width:width/2.5}}>
                    <Text style={{color:"gray",marginLeft:20,marginVertical:10}}>From</Text>
                </View>
                <View style={{backgroundColor:"#fff",elevation:5,borderRadius:10,marginBottom:10,height:40,width:width/2.5}}>
                    <Text style={{color:"gray",marginLeft:20,marginVertical:10}}>To</Text>
                </View>
            </View>
            <View style={{backgroundColor:"#fff",elevation:5,borderRadius:10,marginBottom:10}}>
                <View style={{flexDirection:"row",justifyContent:"space-between",marginHorizontal:20,marginVertical:10,alignItems:"center"}}>
                    <Text style={{color:"gray"}}>Valid Till</Text>
                    <Feather name='calendar' color="#000" size={18} />                   
                </View>
            </View>
            <View style={{backgroundColor:"#fff",elevation:5,borderRadius:10,marginBottom:10}}>
                <View style={{flexDirection:"row",justifyContent:"space-between",marginHorizontal:20,marginVertical:10,alignItems:"center"}}>
                    <Text style={{color:"gray"}}>Team</Text>
                    <Text style={{color:"#000",marginRight:5}}>+</Text>              
                </View>
            </View>
            <View style={{backgroundColor:"#fff",elevation:5,borderRadius:10,marginBottom:10}}>
                <View style={{flexDirection:"row",justifyContent:"space-between",marginHorizontal:20,marginVertical:10,alignItems:"center"}}>
                    <Text style={{color:"gray"}}>Price</Text>
                    <MaterialIcons name='payment' color="#000" size={20} />           
                </View>
            </View>
            <View style={{backgroundColor:"#fff",elevation:5,borderRadius:10,marginBottom:10}}>
                <View style={{flexDirection:"row",justifyContent:"space-between",marginHorizontal:20,marginVertical:10,alignItems:"center"}}>
                    <Text style={{color:"gray"}}>Offers</Text>
                    <MaterialIcons name='keyboard-arrow-down' color="#000" size={24} />           
                </View>
            </View>
            <View style={{flexDirection:"row",justifyContent:"space-between"}}>
                <View style={{backgroundColor:"#fff",elevation:5,borderRadius:10,marginBottom:10,height:40,width:width/2.5}}>
                    <Text style={{color:"gray",marginLeft:20,marginVertical:10}}>Price</Text>
                </View>
                <View style={{backgroundColor:"#fff",elevation:5,borderRadius:10,marginBottom:10,height:40,width:width/2.5}}>
                    <Text style={{color:"gray",marginLeft:20,marginVertical:10}}>Valid Till</Text>
                </View>
            </View>
            
            
            <View style={{alignItems:"center",marginTop:40}}>
                <TouchableOpacity 
                style={{borderRadius:10,backgroundColor:"#19cf43",justifyContent:"center",alignItems:"center",width:120}}
                onPress={()=>segmentClicked(1)}
                >
                    <Text style={{color:"#fff",marginVertical:10}}>Continue</Text>
                </TouchableOpacity>
            </View>
        </>
    );

    const Item2=()=>(
        <>
            <View style={{backgroundColor:"#fff",elevation:5,borderRadius:10,marginBottom:10}}>
                <View style={{flexDirection:"row",justifyContent:"space-between",marginHorizontal:20,marginVertical:10,alignItems:"center"}}>
                    <Text style={{color:"gray"}}>Name</Text>
                    <Ionicons name='person-outline' color="#000" size={18} />                   
                </View>
            </View>
            <View style={{backgroundColor:"#fff",elevation:5,borderRadius:10,marginBottom:10,height:80}}>
                <Text style={{color:"gray",marginLeft:20,marginTop:10}}>Delivery address</Text>
            </View>
            <View style={{alignItems:"center",marginTop:20}}>
                <TouchableOpacity 
                style={{borderRadius:10,backgroundColor:"#19cf43",justifyContent:"center",alignItems:"center",width:160}}
                onPress={()=>{}}
                >
                    <Text style={{color:"#fff",marginVertical:10}}>+ Add new Field</Text>
                </TouchableOpacity>
            </View>
            <View style={{marginVertical:height/3,alignItems:"center"}}>
                <TouchableOpacity 
                style={{borderRadius:10,backgroundColor:"#19cf43",justifyContent:"center",alignItems:"center",width:120}}
                onPress={()=>segmentClicked(2)}
                >
                    <Text style={{color:"#fff",marginVertical:10}}>Preview</Text>
                </TouchableOpacity>
            </View>
        </>
    );

    const Item3=()=>(
        <>
            <View style={{height:height/1.75,elevation:5,borderRadius:10,backgroundColor:"#fff"}}>
                <ImageBackground style={{height:height/4.5,borderRadius:10,overflow:"hidden",marginTop:5,marginHorizontal:5}} 
                source={require("../../assets/movie1.jpg")}>
                    <View style={{backgroundColor: 'rgba(0,0,0,0.3)',flex:1}}>
                        <View style={{flex:1,justifyContent:"center",marginHorizontal:20,bottom:-30}}>
                            <View style={{flexDirection:"row",alignItems:"flex-end",justifyContent:"space-between"}}>
                                <View>
                                    <Text style={{color:"#fff",fontSize:22,fontWeight:"500"}}>Movie Show</Text>
                                    <Text style={{color:"#19cf43",fontSize:18,fontWeight:"500"}}>@IMAX</Text>
                                </View>
                                <View style={{alignItems:"flex-end",marginBottom:5}}>
                                    <View style={{flexDirection:"row",alignItems:"center",marginBottom:5}}>
                                        <Text style={{color:"#19cf43",marginRight:10,fontSize:13}}>05</Text>
                                        <Fontisto name='persons' color="#fff" size={12} />
                                    </View>
                                    <View style={{flexDirection:"row",alignItems:"center"}}>
                                        <Text style={{color:"#19cf43",marginRight:10,fontSize:12}}>Monday, 25/05</Text>
                                        <MaterialCommunityIcons name='progress-clock' color="#fff" size={16} />
                                    </View>
                                </View>
                            </View>
                        </View>
                    </View>
                </ImageBackground>
                <Text style={{color:"gray", textAlign:"center",fontSize:11,marginTop:5}}>Valid till 21:00, 12/02/2021</Text>
                <View style={{flexDirection:"row",alignItems:"flex-end",marginLeft:10,marginTop:10}}>                       
                    <View style={{}}>
                        <Text style={{color:"gray",fontSize:12}}>$1299</Text>
                        <View style={{borderWidth:0.3,position:"absolute",width:45,right:-4,top:0,marginTop:11,backgroundColor:"gray",borderColor:"gray"}} />
                    </View>
                    <Text style={{color:"#000",fontSize:20,marginLeft:10}}>$999/-</Text>
                </View>
                <View style={{flexDirection:"row",alignItems:"center",marginLeft:10,marginTop:5}}>
                    <MaterialCommunityIcons name='brightness-percent' color="#000" size={16} />
                    <Text style={{color:"#000",fontSize:13,marginLeft:10}}>Offer valid of group more that 4</Text>
                </View>
                <View style={{backgroundColor:"#fff",borderRadius:10,marginVertical:10,marginHorizontal:5,borderWidth:0.5}}>
                    <View style={{flexDirection:"row",marginHorizontal:20,marginVertical:10,alignItems:"center"}}>
                        <Ionicons name='person-outline' color="#000" size={16} />
                        <Text style={{color:"gray",marginLeft:5,fontSize:12}}>Admin</Text>
                        <View style={{borderColor:"gray",backgroundColor:"gray",height:20,marginHorizontal:5,borderWidth:0.5}} />
                        <Text style={{color:"#000"}}>John Peral</Text>
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
                <View style={{flexDirection:"row",justifyContent:"center",alignItems:"flex-end",marginTop:10}}>
                    <View style={{marginRight:5}}>
                        <Ionicons name='md-pencil' color="gray" size={16} />
                        <View style={{width:10,borderWidth:0.5}} />
                    </View>
                    <View style={{alignItems:"center"}}>
                        <Text style={{color:"gray"}}>Edit</Text>
                        <View style={{width:25,borderWidth:0.5}} />
                    </View>
                </View>
            </View>
            <View style={{alignItems:"center",marginTop: 30}}>
                <TouchableOpacity 
                style={{borderRadius:10,backgroundColor:"#19cf43",justifyContent:"center",alignItems:"center",width:120}}
                onPress={()=>refRBSheet1.current.open()}
                >
                    <Text style={{color:"#fff",marginVertical:10}}>Share</Text>
                    <RBSheet ref={refRBSheet1}
                        closeOnDragDown={true}
                        closeOnPressMask={true}
                        height={height/3}
                        customStyles={{
                        draggableIcon: {
                            backgroundColor: "#fff",
                        },
                        container:{
                            borderTopLeftRadius: 10,
                            borderTopRightRadius:10
                        }
                        }}
                    >
                        <BottomSheet
                            item1="share-social-outline"
                            item2="Share Via"
                            item3="Events"
                            item4="Browse"
                            item5="Split Bills"
                            item6="Split Bills"
                            item7="Events"
                            item8="Split Bills"
                            item9="Split Bills"
                            item10="Split Bills"
                        />
                    </RBSheet>
                </TouchableOpacity>
            </View>
        </>
    );
    
    
    return (
        <View style={styles.container}>
            <View style={{flex:1}}>
                <View style={{marginHorizontal:10}}>
                    <View style={{flexDirection:"row",marginVertical:20,marginRight:10,alignItems:"center"}}>
                        <TouchableOpacity style={{}} onPress={()=>navigation.goBack()}>
                            <Ionicons name='chevron-back' color="#000" size={28} />
                        </TouchableOpacity>
                        <View style={{flexDirection:"row",alignItems:"center",justifyContent:"center",flex:0.9}}>
                            <AntDesign name='pluscircleo' color="#19cf43" size={22} />
                            <Text style={{color:"#000",marginLeft:5,fontSize:12,fontWeight:"500"}}>Create a New Event</Text>
                        </View>
                    </View>
                    <View style={{marginHorizontal:10,marginTop:20}}>
                        <View style={{backgroundColor:"#fff",elevation:5,borderRadius:10,marginBottom:10}}>
                            <View style={{flexDirection:"row",alignItems:"center",marginVertical:10,justifyContent:"space-around",marginHorizontal:20}}>
                                <TouchableOpacity 
                                style={activeIndex == 0? styles.button : null}
                                active={activeIndex == 0}
                                onPress={()=>segmentClicked(0)}
                                >
                                    <AntDesign name='bars' color={activeIndex==0?"#fff":"#000"} size={20} />
                                </TouchableOpacity>
                                <Ionicons name='remove-outline' color="#000" size={22} />
                                <Ionicons name='remove-outline' color="#000" size={22} />
                                <Ionicons name='remove-outline' color="#000" size={22} />
                                <Ionicons name='remove-outline' color="#000" size={22} />
                                <Ionicons name='remove-outline' color="#000" size={22} />
                                <TouchableOpacity
                                 style={activeIndex == 1? styles.button : null}
                                 active={activeIndex == 1}
                                 onPress={()=>segmentClicked(1)}
                                >
                                    <Ionicons name='person' color={activeIndex==1?"#fff":"#000"} size={20} />
                                </TouchableOpacity>
                                <Ionicons name='remove-outline' color="#000" size={22} />
                                <Ionicons name='remove-outline' color="#000" size={22} />
                                <Ionicons name='remove-outline' color="#000" size={22} />
                                <Ionicons name='remove-outline' color="#000" size={22} />
                                <Ionicons name='remove-outline' color="#000" size={22} />
                                <TouchableOpacity
                                 style={activeIndex == 2? styles.button : null}
                                 active={activeIndex == 2}
                                 onPress={()=>segmentClicked(2)}
                                >
                                    <AntDesign name='sharealt' color={activeIndex==2?"#fff":"#000"} size={20} />
                                </TouchableOpacity>
                            </View>
                        </View>
                        <ScrollView style={{marginBottom:height/2.5}}>
                        <View style={{marginHorizontal:10,marginVertical:20}}>
                            {renderItems()}
                        </View>
                        </ScrollView>
                    </View>
                </View>
            </View>
        </View>
    )
}

export default CreateNewEvent;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:"#fff"
    },
    button: {
        height:40,
        width:40,
        borderRadius:40/2,
        backgroundColor:"#19cf43",
        justifyContent:"center",
        alignItems:"center",
    }
})
