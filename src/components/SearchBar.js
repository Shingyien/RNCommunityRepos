import {faTimesCircle} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import React from 'react';
import {
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Text,
} from 'react-native';

const SearchBar = ({query, handleSearch, clearSearch, cancelSearch}) => {
  return (
    <View style={{flexDirection: 'row', alignItems: 'center'}}>
      <View style={styles.searchBarContainerStyle}>
        <TextInput
          autoCorrect={false}
          autoCapitalize="none"
          value={query}
          onChangeText={handleSearch}
          status="info"
          placeholder="Search"
          style={styles.searchBarStyle}
          returnKeyType="search"
        />
        <TouchableOpacity style={styles.iconButtonStyle} onPress={clearSearch}>
          <FontAwesomeIcon
            icon={faTimesCircle}
            size={15}
            style={styles.iconViewStyle}
          />
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.cancelButtonStyle} onPress={cancelSearch}>
        <Text style={styles.cancelButtonStyle}>Cancel</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  searchBarContainerStyle: {
    margin: 10,
    padding: Platform.OS === 'ios' ? 10 : 0,
    paddingHorizontal: 10,
    borderRadius: 25,
    borderColor: '#333',
    backgroundColor: 'lightgrey',
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  searchBarStyle: {
    flex: 1,
    color: 'black',
  },
  cancelButtonStyle: {
    marginRight: 10,
  },
  iconButtonStyle: {
    padding: 0,
  },
  iconViewStyle: {
    color: 'darkgrey',
  },
});

export default SearchBar;
