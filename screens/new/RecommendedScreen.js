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
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import ToggleSwitch from 'toggle-switch-react-native';
import RBSheet from "react-native-raw-bottom-sheet";
import BottomSheet from './components/BottomSheet';


const { height } = Dimensions.get("window");

const Recommended = ({navigation}) => {

    const refRBSheet1 = useRef();
    const refRBSheet2 = useRef();
    const [isOn, setIsOn] = useState(false);
    const [numPerson, setNumPerson] = useState("");
    
    return (
        <View style={styles.container}>
            <ImageBackground style={{height:280}} source={require("../../assets/beach2.jpg")}>
                <View style={{backgroundColor: 'rgba(0,0,0,0.5)',flex:1}}>
                    <View style={{alignItems:"flex-start"}}>
                        <TouchableOpacity style={{marginTop:20,marginLeft:15}} onPress={()=>navigation.goBack()}>
                            <Ionicons name='chevron-back' color="#fff" size={28} />
                        </TouchableOpacity>
                    </View>
                    <View style={{flex:1,justifyContent:"center",marginHorizontal:20,bottom:-30}}>
                        <View style={{flexDirection:"row",alignItems:"flex-end",justifyContent:"space-between"}}>
                            <View>
                                <Text style={{color:"#fff",fontSize:22,fontWeight:"500"}}>Goa</Text>
                                <Text style={{color:"#19cf43",fontSize:24,fontWeight:"500"}}>Weekend</Text>
                                <Text style={{color:"#fff",fontSize:13}}>2 nights - 3 days</Text>
                            </View>
                            <View style={{alignItems:"flex-end"}}>
                                <View style={{flexDirection:"row",alignItems:"center",marginBottom:5}}>
                                    <Text style={{color:"#19cf43",marginRight:10,fontSize:13}}>05</Text>
                                    <Fontisto name='persons' color="#fff" size={12} />
                                </View>
                                <View style={{flexDirection:"row",alignItems:"center"}}>
                                    <Text style={{color:"#19cf43",marginRight:10,fontSize:13}}>Monday, 25/05</Text>
                                    <MaterialCommunityIcons name='progress-clock' color="#fff" size={16} />
                                </View>
                            </View>
                        </View>
                    </View>
                </View>
            </ImageBackground>
            <ScrollView style={{backgroundColor:"#fff",borderTopLeftRadius:20,borderTopRightRadius:20,top:-20}}>
                <View style={{marginHorizontal:10,flex:1}}>
                    <Text style={{color:"gray", textAlign:"center",fontSize:11,marginTop:5}}>Valid till 21:00, 12/02/2021</Text>
                    <View style={{flexDirection:"row",alignItems:"center",marginLeft:10,marginTop:10}}>
                        <Text style={{color:"#000",fontSize:18}}>$999/-</Text>
                        <View style={{}}>
                            <Text style={{color:"gray",fontSize:12,marginLeft:10}}>$1299</Text>
                            <View style={{borderWidth:0.3,position:"absolute",width:45,right:-4,top:0,marginTop:11,backgroundColor:"gray",borderColor:"gray"}} />
                        </View>
                    </View>
                    <View style={{flexDirection:"row",alignItems:"center",marginLeft:10,marginTop:5}}>
                        <MaterialCommunityIcons name='brightness-percent' color="#000" size={16} />
                        <Text style={{color:"#000",fontSize:13,marginLeft:10}}>Offer valid of group more that 4</Text>
                    </View>
                    <View style={{marginHorizontal:10,marginTop:10}}>
                        <View style={{backgroundColor:"#fff",elevation:5,borderRadius:10,marginBottom:10}}>
                            <View style={{flexDirection:"row",justifyContent:"space-between",marginHorizontal:20,alignItems:"center"}}>
                                <View style={{flexDirection:"row",alignItems:"center"}}>
                                    <Fontisto name='persons' color="gray" size={18} />
                                    <View style={{height:20,backgroundColor:"gray",borderWidth:0.5,borderColor:"gray",marginHorizontal:5}}/>
                                    <TextInput 
                                        placeholder="05"
                                        placeholderTextColor="#000"
                                        value={numPerson}
                                        onChangeText={(val)=>setNumPerson(val)}
                                        style={{flex:0.6,color:"#000"}}
                                    />
                                    {/* <Text style={{color:"#000",fontWeight:"bold"}}>05</Text> */}
                                </View>
                                <View style={{flexDirection:"row",alignItems:"center"}}>
                                    <Ionicons name='remove-outline' color="#000" size={18} />
                                    <View style={{height:20,backgroundColor:"gray",borderWidth:0.5,borderColor:"gray",marginHorizontal:10}}/>
                                    <Text style={{color:"#000",fontSize:16}}>+</Text>
                                </View>
                            </View>
                        </View>
                        <View style={{backgroundColor:"#fff",elevation:5,borderRadius:10,marginBottom:10}}>
                            <View style={{flexDirection:"row",justifyContent:"space-between",marginHorizontal:20,marginVertical:0,alignItems:"center"}}>
                                <TextInput 
                                    placeholder='Name'
                                    placeholderTextColor="gray"
                                    style={{flex:0.6,color:"#000"}}
                                />
                                {/* <Text style={{color:"gray"}}>Name</Text> */}
                                <SimpleLineIcons name='pencil' color="#000" size={16} />
                            </View>
                        </View>
                        <View style={{backgroundColor:"#fff",elevation:5,borderRadius:10,marginBottom:10}}>
                            <View style={{flexDirection:"row",justifyContent:"space-between",marginHorizontal:20,alignItems:"center"}}>
                                <TextInput 
                                    placeholder='College'
                                    placeholderTextColor="gray"
                                    style={{flex:0.6,color:"#000"}}
                                />
                                {/* <Text style={{color:"gray"}}>College</Text> */}
                                <FontAwesome name='building-o' color="#000" size={20} />
                            </View>
                        </View>
                        <View style={{backgroundColor:"#fff",elevation:5,borderRadius:10,marginBottom:10}}>
                            <View style={{flexDirection:"row",justifyContent:"space-between",marginHorizontal:20,marginVertical:10,alignItems:"center"}}>
                                <Text style={{color:"gray"}}>Upload ID</Text>
                                <Feather name='upload' color="#000" size={20} />
                            </View>
                        </View>
                        <View style={{backgroundColor:"#fff",elevation:5,borderRadius:10,marginBottom:10}}>
                            <View style={{flexDirection:"row",marginHorizontal:20,marginVertical:10,alignItems:"center"}}>
                                <MaterialIcons name='payment' color="#000" size={20} />
                                <View style={{height:20,backgroundColor:"gray",borderWidth:0.5,borderColor:"gray",marginHorizontal:5}}/>
                                <Text style={{color:"#000"}}>$4,995/-</Text>
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
                </View>
            </ScrollView>
            <View style={{flexDirection:"row",alignItems:"center",justifyContent:"space-around",marginBottom:20}}>
                <TouchableOpacity style={{alignItems:"center",justifyContent:"center",borderRadius:10,backgroundColor:"#19cf43"}}
                    onPress={()=>refRBSheet1.current.open()}
                >
                    <Text style={{marginVertical:10,marginHorizontal:40,color:"#fff"}}>Pay Now</Text>
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
                            item1="wallet-outline"
                            item2="Pay Via"
                            item3="Gpay"
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
                <View style={{alignItems:"center",justifyContent:"center",borderRadius:10,borderWidth:0.5,borderColor:"#19cf43"}}>
                    <TouchableOpacity style={{flexDirection:"row",marginHorizontal:30,alignItems:"center"}}  onPress={()=>refRBSheet2.current.open()}>
                        <Text style={{marginVertical:10,color:"#000",marginRight:5}}>Share</Text>
                        <EvilIcons name='share-google' color="#000" size={28} />
                        <RBSheet ref={refRBSheet2}
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
            </View>
        </View>
    )
}

export default Recommended;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:"#fff"
    },
})
