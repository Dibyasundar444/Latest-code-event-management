import React, { useRef } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View, ScrollView, Dimensions } from 'react-native';
import  Ionicons from 'react-native-vector-icons/Ionicons';
import  Fontisto from 'react-native-vector-icons/Fontisto';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Feather from 'react-native-vector-icons/Feather';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import RBSheet from "react-native-raw-bottom-sheet";
import BottomSheet from './components/BottomSheet';


const SuccessfullPayment = ({navigation}) => {

    const refRBSheet1 = useRef();
    const refRBSheet2 = useRef();
    const { height } = Dimensions.get("window");
    
    return (
        <View style={styles.container}>
            <View style={{flexDirection:"row",justifyContent:"space-between",marginHorizontal:20,marginTop:20}}>
                <View style={styles.headerButton}>
                    <Ionicons name="person-outline" color="#000" size={24} />
                </View>
                <View style={{flexDirection:"row"}}>
                    <View style={styles.headerButton}>
                        <Fontisto name="bell" color="#000" size={24} />
                    </View>
                    <View style={{width:20}} />
                    <View style={styles.headerButton}>
                        <MaterialCommunityIcons name="copyright" color="#000" size={28} />
                    </View>
                </View>
            </View>
            <Text style={{color:"#81bf04",textAlign:"center",fontSize:16,marginVertical:20}}>Payment Successfull</Text>
            <View style={{flex:1,elevation:10}}>
                <View style={{marginHorizontal:10,flex:1}}>
                    <View style={{height:160,width:"100%",borderRadius:10,backgroundColor:"gray"}} />
                    {/* <Text style={{color:"gray", textAlign:"center",fontSize:12}}>Valid till 21:00, 12/02/2021</Text>
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
                    </View> */}
                    <View style={{marginHorizontal:10,marginTop:20}}>
                        <View style={{backgroundColor:"#fff",elevation:5,borderRadius:10,marginBottom:10}}>
                            <View style={{flexDirection:"row",justifyContent:"space-between",marginHorizontal:20,marginVertical:10,alignItems:"center"}}>
                                <Fontisto name='persons' color="#000" size={18} />
                                <Text style={{color:"#000"}}>05</Text>
                            </View>
                        </View>
                        <View style={{backgroundColor:"#fff",elevation:5,borderRadius:10,marginBottom:10}}>
                            <View style={{flexDirection:"row",justifyContent:"space-between",marginHorizontal:20,marginVertical:10,alignItems:"center"}}>
                                <Text style={{color:"#000"}}>Enter Code</Text>
                                <SimpleLineIcons name='pencil' color="#000" size={16} />
                            </View>
                        </View>
                        <View style={{backgroundColor:"#fff",elevation:5,borderRadius:10,marginBottom:10}}>
                            <View style={{flexDirection:"row",justifyContent:"space-between",marginHorizontal:20,marginVertical:10,alignItems:"center"}}>
                                <Text style={{color:"#000"}}>Track</Text>
                                <MaterialIcons name='keyboard-arrow-down' color="#000" size={22} />
                            </View>
                        </View>
                        <View style={{flexDirection:"row",alignItems:"center",marginTop:5,justifyContent:"space-around"}}>
                            <View style={{alignItems:"center",justifyContent:"center",borderRadius:10,backgroundColor:"#41856c",}}>
                                <TouchableOpacity style={{flexDirection:"row",marginHorizontal:30,alignItems:"center"}}  onPress={()=>refRBSheet2.current.open()}>
                                    <Text style={{marginVertical:10,color:"#fff",marginRight:5}}>Share</Text>
                                    <EvilIcons name='share-google' color="#fff" size={28} />
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
                            <TouchableOpacity style={{alignItems:"center",justifyContent:"center",borderRadius:10,borderWidth:0.5,borderColor:"#41856c"}}
                                onPress={()=>navigation.navigate("SplitBills")}
                            >
                                <Text style={{marginVertical:10,marginHorizontal:40,color:"#000"}}>Split Bills</Text>
                                {/* <RBSheet ref={refRBSheet1}
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
                                </RBSheet> */}
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </View>
        </View>
    )
}

export default SuccessfullPayment;

const styles = StyleSheet.create({
    container: {
        flex: 1
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
