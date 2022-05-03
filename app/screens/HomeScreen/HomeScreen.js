import { StyleSheet, Text, View, SafeAreaView, Platform, Image } from 'react-native';
import React from 'react';
import Constants from 'expo-constants';
import HomeImg from '../../../assets/images/HomeImg.jpg';

export default function HomeScreen() {
  return (
    <SafeAreaView>
      <View style={styles.view}>
        <Text style={styles.text}>Welcome to Food Lover People</Text>
        <Image source={HomeImg} style={styles.homeImg} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  text:{
    textAlign:'center',
    fontWeight:'bold',
    fontSize:25,
    color:'black',
    margin:5
  },
  view: {
    paddingTop: Platform.OS === 'ios' ? 0 : Constants.statusBarHeight,
  },
  homeImg: {
    width: '95%',
    height: '90%',
    margin:10,
  },
});