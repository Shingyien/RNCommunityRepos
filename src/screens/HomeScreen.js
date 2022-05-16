import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import RepoList from '../components/RepoList';

const HomeScreen = ({navigation}) => (
  <SafeAreaView style={styles.HomeViewStyle}>
    <RepoList navigation={navigation} />
  </SafeAreaView>
);

const styles = StyleSheet.create({
  HomeViewStyle: {
    backgroundColor: 'white',
    flex: 1,
  },
});

export default HomeScreen;
