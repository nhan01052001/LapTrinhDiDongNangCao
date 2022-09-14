import React from "react";
import { View, Text, StyleSheet, ImageBackground, Image } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

const imgBG = 'https://cdn.sforum.vn/sforum/wp-content/uploads/2020/05/Gradient-wallpaper-iPhone-sreeragag7-idownloadblog-wallpaper-of-the-week-Disco-768x1536-1.png';
const imgCircle = require('../assets/circle.png');

const Home = ({ navigation }) => {
    return (
        <ImageBackground source={{ uri: imgBG }} style={styles.container}>
            <View style={styles.wrapImgC}>
                <Image source={imgCircle} style={styles.imgC} />
            </View>
            <View style={styles.vCenter}>
                <Text style={styles.text1}>GROW YOUR BUSINESS</Text>
                <Text style={styles.text2}>We will help you to grow your business using online server</Text>
            </View>
            <View style={[ styles.vButton, styles.vCenter ]}>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => navigation.navigate('Login')}
                >
                    <Text style={styles.btnText}>Login</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => navigation.navigate('SignUp')}
                >
                    <Text style={styles.btnText}>Sign Up</Text>
                </TouchableOpacity>
            </View>
            <View style={[ styles.vEnd ]}>
                <Text style={styles.text3}>HOW WE WORK?</Text>
            </View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
   container: {
        flex: 1,
   },
   wrapImgC: {
        marginTop: 70,
   },
   imgC: {
    alignSelf: 'center',
   },
   vCenter: {
        justifyContent:'center',
        alignItems: 'center',
        
   },
   text1: {
        // width:  150,
        fontSize: 24,
        textAlign: 'center',
        fontWeight: "700",
        marginTop: 100,
   },
   text2: {
        fontSize: 18,
        fontWeight: '500',
        textAlign: 'center',
        marginHorizontal: 20,
        marginTop: 50,
   },
   vButton: {
        flex: 1,
        flexDirection: "row",
   },
   button: {
        width: 130,
        paddingVertical: 10,
        backgroundColor: 'yellow',
        marginHorizontal: 30,
        borderRadius: 5,
        borderWidth: 5,
        borderColor: '#6c71c4',
   },
   btnText: {
        fontSize: 22,
        fontWeight: '700',
        textAlign: 'center',
   },
   vEnd: {
        flex: 1,
        alignItems: 'center',
   },
   text3: {
        fontSize: 22,
        fontWeight: '500',
   },

});

export default Home