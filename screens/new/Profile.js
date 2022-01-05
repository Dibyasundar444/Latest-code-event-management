//coded by HARSHA
import React from "react";
import {View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/AntDesign";
import FIcon from "react-native-vector-icons/Feather";
import FWIcon from "react-native-vector-icons/FontAwesome5";
import MIcon from "react-native-vector-icons/MaterialIcons";

import Header from "./components/header";
import { RalewayBold } from "../../assets/fonts/fonts";
import { user } from "./components/data";
// import { bg } from "./components/Colors";


export default class Profile extends React.Component {

    state = {
        progress: null,
    }

    _getpercent() {
        let pr=0;

        if(user.profile!="") {
            pr+=1;
        }

        if(user.name!="") {
            pr+=1;
        }

        if(user.mobile!="") {
            pr+=1;
        }

        if(user.delivery_address!="") {
            pr+=1;
        }

        if(user.upi!="") {
            pr+=1;
        }

        if(user.email!="") {
            pr+=1;
        }

        if(user.linkedin!="") {
            pr+=1;
        }


        pr = String(parseInt(pr/7*100));

        this.setState({progress: pr+"%"});
    }

    componentDidMount() {
        this._getpercent();
    }


    render() {

        return (

            <View style={style.root} >

                <Header screen="Profile" />

                <View style={style.myprofile}>

                    <Text style={style.heading}>My Profile</Text>

                    <View style={style.detailsall}>

                        <View style={style.details}>

                            <Image style={style.profile} source={user.profile} />

                            <View style={style.namphn}>

                                <Text style={style.nam}>{user.name}</Text>
                                <Text style={style.phn}>+91 {user.mobile}</Text>

                            </View>


                            <TouchableOpacity onPress={() => {this.props.navigation.navigate('Profileedit')}} style={style.icn}>

                                <Icon name="edit" color="#000" size={30} />

                            </TouchableOpacity>

                        </View>


                        <View style={style.progressall}>
                            <View style={[style.progressdone, {width: this.state.progress}]}></View>
                        </View>

                        <Text style={style.progresstext}>Profile {this.state.progress} Completed - Complete to get free rewards</Text>

                    </View>



                    <TouchableOpacity style={style.profilebtn}>
                        <FIcon style={style.btnicn} size={20} color="#000" name="user-check" />
                        <Text style={style.btntxt}>My Events</Text>
                    </TouchableOpacity>


                    <TouchableOpacity style={style.profilebtn}>
                        <FWIcon style={style.btnicn} size={20} color="#000" name="file-invoice-dollar" />
                        <Text style={style.btntxt}>My Expense</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={style.profilebtn}>
                        <Icon style={style.btnicn} size={20} color="#000" name="wechat" />
                        <Text style={style.btntxt}>FAQ</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={style.profilebtn}>
                        <FWIcon style={style.btnicn} size={20} color="#000" name="coins" />
                        <Text style={style.btntxt}>Refer and Earn</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={style.profilebtn}>
                        <FWIcon style={style.btnicn} size={20} color="#000" name="headset" />
                        <Text style={style.btntxt}>Customer Support</Text>
                    </TouchableOpacity>



                    <TouchableOpacity style={style.logout}>
                        <MIcon style={style.logouticn} size={30} color="#FFF" name="logout" />
                        <Text style={style.logouttxt}>Logout</Text>
                    </TouchableOpacity>

                </View>

            </View>

        );

    }

} 


const style = StyleSheet.create({

    root: {
        flex: 1,
        backgroundColor: '#000',
    },

    myprofile: {
        flex: 1,
        alignItems: 'center',
        marginTop: 15,
        backgroundColor: '#FFF',
        borderTopRightRadius: 20,
        borderTopLeftRadius: 20,
    },

    heading: {
        textAlign: 'center',
        marginTop: 20,
        marginBottom: 10,
        fontFamily: RalewayBold,
        fontSize: 20,
        fontWeight: '900',
        color: '#000',
    },

    detailsall: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '96%',
        borderRadius: 15,
        backgroundColor: '#FFF',
        padding: 5,
        paddingTop: 20,
        marginBottom: 15,
        elevation: 5,
    },

    details: {
        display: 'flex',
        flexDirection: 'row',
        borderRadius: 15,
    },

    profile: {
        width: 90,
        height: 90,
        borderRadius: 45,
        marginLeft: 5,
    },

    namphn: {
        height: 90,
        display: 'flex',
        justifyContent: 'center',
        marginLeft: 15,
    },

    nam: {
        fontFamily: RalewayBold,
        fontWeight: '700',
        color: '#000',
        fontSize: 18,
    },

    phn: {
        color: '#000',
        fontSize: 14,
    },

    icn: {
        height: 90,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 30,
    },

    progressall: {
        display: 'flex',
        height: 5,
        width: '90%',
        backgroundColor: '#AAA',
        borderRadius: 100,
        marginTop: 10,
        marginBottom: 8,
    },

    progressdone: {
        height: 5,
        backgroundColor: "#19cf43",
        borderRadius: 100,
    },

    progresstext: {
        fontSize: 12,
        fontWeight: '300',
        color: '#000',
        marginBottom: 10,
    },

    profilebtn: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        elevation: 5,
        backgroundColor: '#FFF',
        width: '92%',
        borderRadius: 10,
        height: 45,
        marginTop: 10,
    },

    btnicn: {
        marginLeft: 20,
    },

    btntxt: {
        fontSize: 18,
        fontFamily: RalewayBold,
        color: '#000',
        marginLeft: 10,
    },

    logout: {
        backgroundColor: '#FF0000',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        height: 50,
        width: '40%',
        elevation: 3,
        borderRadius: 12,
        marginTop: 30,
    },

    logouttxt: {
        fontSize: 22,
        color: '#FFF',
        marginLeft: 8,
    },

});