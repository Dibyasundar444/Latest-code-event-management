//coded by HARSHA
import React from "react";
import {View, Text, StyleSheet, Image, TouchableOpacity, TextInput } from "react-native";
import Icon from "react-native-vector-icons/AntDesign";
import FIcon from "react-native-vector-icons/Feather";
import FWIcon from "react-native-vector-icons/FontAwesome5";
import MIcon from "react-native-vector-icons/MaterialIcons";

import Header from "./components/header";
import { RalewayBold } from "../../assets/fonts/fonts";
import { user } from "./components/data";
// import { bg } from "../components/Colors";


export default class Profileedit extends React.Component {

    state = {
        progress: null,
        name: user.name,
        mobile: user.mobile,
        address: user.delivery_address,
        upi: user.upi,
        email: user.email,
        linkedin: user.linkedin,
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

                    <View style={style.editprofileh}>

                        <TouchableOpacity onPress={()=>{this.props.navigation.goBack()}} style={style.editbackbtn}>
                            <MIcon name="arrow-back-ios" color="#000" size={24} />
                        </TouchableOpacity>

                        <Text style={style.heading}>Edit Profile</Text>

                    </View>

                    <View style={style.detailsall}>

                        <View style={style.details}>

                            <Image style={style.profile} source={user.profile} />

                            <View style={style.namphn}>

                                <Text style={style.nam}>{user.name}</Text>
                                <Text style={style.phn}>+91 {user.mobile}</Text>

                            </View>

                        </View>


                        <View style={style.progressall}>
                            <View style={[style.progressdone, {width: this.state.progress}]}></View>
                        </View>

                        <Text style={style.progresstext}>Profile {this.state.progress} Completed - Complete to get free rewards</Text>

                    </View>

                    <View style={style.input}>
                        <Icon style={style.inputicn} color="#000" size={20} name="user" />
                        <TextInput onChangeText={text=>this.setState({name: text})} style={style.inputedit} value={this.state.name} />
                    </View>

                    <View style={style.input}>
                        <Icon style={style.inputicn} color="#000" size={20} name="phone" />
                        <TextInput onChangeText={text=>this.setState({mobile: text})} style={style.inputedit} value={this.state.mobile} />
                    </View>


                    <View style={[style.input, {height: 80, alignItems: 'flex-start'}]}>
                        <TextInput multiline={true} placeholder="Delivery address" onChangeText={text=>this.setState({address: text})} style={style.inputaddress} value={this.state.address} />
                    </View>

                    <View style={style.input}>
                        <Text style={style.inputtxt}>UPI</Text>
                        <TextInput onChangeText={text=>this.setState({upi: text})} style={[style.inpute, {width: '65%'}]} value={this.state.upi} placeholder="30 Credits" />
                        <TouchableOpacity style={style.inputlbtn}>
                            <FIcon style={style.inputlicn} name="link-2" size={24} color="#000" />
                            <Text style={style.inputltxt}>Link</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={style.input}>
                        <Text style={style.inputtxt}>Email</Text>
                        <TextInput onChangeText={text=>this.setState({email: text})} style={style.inpute} value={this.state.email} placeholder="10 Credits" />
                        <TouchableOpacity style={style.inputlbtn}>
                            <Icon style={style.inputlicn} name="mail" size={24} color="#000" />
                        </TouchableOpacity>
                    </View>

                    <View style={style.input}>
                        <Text style={style.inputtxt}>Linkedin</Text>
                        <TextInput onChangeText={text=>this.setState({linkedin: text})} style={[style.inpute, {width: '65%'}]} value={this.state.linkedin} placeholder="20 Credits" />
                        <TouchableOpacity style={style.inputlbtn}>
                            <Icon style={style.inputlicn} name="linkedin-square" size={24} color="#000" />
                        </TouchableOpacity>
                    </View>


                    <TouchableOpacity style={style.update}>
                        <Text style={style.updatetxt}>Update</Text>
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
        marginRight: 'auto',
    },

    detailsall: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '96%',
        borderRadius: 15,
        padding: 5,
        elevation: 5,
        paddingTop: 20,
        marginBottom: 15,
        backgroundColor: '#FFF',
    },

    details: {
        display: 'flex',
        flexDirection: 'row',
        width: '100%',
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

    editprofileh: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%'
    },

    editbackbtn: {
        marginRight: 'auto',
        marginLeft: 30,
        marginTop: 5,
    },

    input: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        width: '92%',
        elevation: 3,
        backgroundColor: '#FFF',
        borderRadius: 7,
        marginTop: 10,
    },

    inputedit: {
        width: '85%',
        marginLeft: '2%',
        fontSize: 18,
    },

    inputicn: {
        borderRightWidth: 2,
        borderColor: '#888',
        paddingRight: '2%',
        height: '50%',
        paddingTop: '1%'
    },

    inputaddress: {
        width: '94%',
        fontSize: 18,
    },

    inputtxt: {
        fontSize: 18,
        borderRightWidth: 2,
        paddingRight: '2%',
        borderColor: '#888',
    },

    inpute: {
        width: '70%',
        marginLeft: '2%',
        fontSize: 18,
    },

    inputlbtn: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },

    inputltxt: {
        fontSize: 20,
        color: '#000',
        textDecorationLine: 'underline',
        fontWeight: '600',
        marginLeft: 8,
    },

    update: {
        backgroundColor: "#19cf43",
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        height: 50,
        width: '40%',
        elevation: 3,
        borderRadius: 12,
        marginTop: 25,
    },

    updatetxt: {
        color: '#FFF',
        fontSize: 18,
        fontFamily: RalewayBold,
    },

});