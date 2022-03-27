import { StyleSheet, Text, View, SafeAreaView, Platform } from 'react-native';
import React from 'react';
import Constants from 'expo-constants';

export default function HomeScreen() {
  return (
    <SafeAreaView>
      <View style={styles.view}>
        <Text>HomeScreen</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  view: {
    paddingTop: Platform.OS === 'ios' ? 0 : Constants.statusBarHeight,
  },
});
