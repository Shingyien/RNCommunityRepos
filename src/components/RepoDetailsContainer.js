import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';

const RepoDetailsContainer = ({icon, value, type}) => {
  return (
    <View style={styles.detailsContainerViewStyle}>
      <FontAwesomeIcon icon={icon} size={20} style={styles.iconViewStyle} />
      <Text style={styles.detailsNumberTextStyle}>{value}</Text>
      <Text style={styles.detailsTextStyle}>{type}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  detailsContainerViewStyle: {
    flex: 1,
    alignItems: 'center',
    borderWidth: 0.5,
    borderRadius: 10,
    borderColor: 'grey',
    margin: 10,
    padding: 5,
  },
  iconViewStyle: {
    margin: 10,
    color: 'mediumturquoise',
  },
  detailsTextStyle: {
    fontSize: 14,
    marginBottom: 5,
    color: '#3a3a3a',
  },
  detailsNumberTextStyle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
    color: 'black',
  },
});

export default RepoDetailsContainer;
