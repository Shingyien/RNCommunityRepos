import React from 'react';
import {
  View,
  FlatList,
  Text,
  StyleSheet,
  TouchableOpacity,
  Keyboard,
  KeyboardAvoidingView,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {sagaActions} from '../sagas/sagaActions';
import {useEffect, useState} from 'react';
import axios from 'axios';
import SearchBar from './SearchBar';

const RepoList = ({navigation}) => {
  const dispatch = useDispatch();
  const {repos, isLoading} = useSelector(state => state.repos);

  const [query, setQuery] = useState('');
  const [filteredRepos, setFilteredRepos] = useState([]);

  useEffect(() => {
    const source = axios.CancelToken.source();
    dispatch({type: sagaActions.FETCH_REPOS_SAGA});
    return () => source.cancel('Data fetching cancelled');
  }, []);

  const renderSeparator = () => {
    return <View style={styles.separatorStyle} />;
  };

  // Search functions
  const handleSearch = searchText => {
    const lowercasedSearchText = searchText.toLowerCase();
    setFilteredRepos(
      repos.filter(repo => repo.name.includes(lowercasedSearchText)),
    );
    setQuery(searchText);
  };

  const cancelSearch = () => {
    setQuery('');
    Keyboard.dismiss();
  };

  const clearSearch = () => {
    setQuery('');
  };

  // FlatList functions
  const onRefresh = () => {
    dispatch({type: sagaActions.FETCH_REPOS_SAGA});
  };

  const onFlatListEmpty = () => {
    return (
      <View style={styles.listEmptyStyle}>
        <Text style={{fontSize: 16}}>No data found.</Text>
      </View>
    );
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={100}
      style={{flex: 1}}>
      <FlatList
        ListHeaderComponent={
          <SearchBar
            query={query}
            handleSearch={handleSearch}
            cancelSearch={cancelSearch}
            clearSearch={clearSearch}
          />
        }
        data={query === '' ? repos : filteredRepos}
        keyExtractor={repo => repo.id}
        renderItem={({item}) => {
          return (
            <TouchableOpacity
              onPress={() => {
                Keyboard.dismiss();
                navigation.navigate('Details', {id: item.id});
              }}
              style={styles.listItemViewStyle}>
              <Text style={styles.titleTextStyle}>{item.name}</Text>
              <Text style={styles.descTextStyle}>{item.description}</Text>
            </TouchableOpacity>
          );
        }}
        ItemSeparatorComponent={renderSeparator}
        contentContainerStyle={{flexGrow: 1}}
        ListEmptyComponent={onFlatListEmpty}
        onRefresh={() => onRefresh()}
        refreshing={isLoading}
      />
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  listItemViewStyle: {
    margin: 20,
  },
  titleTextStyle: {
    color: 'black',
    fontSize: 20,
    fontWeight: 'bold',
  },
  descTextStyle: {
    color: 'black',
    fontSize: 14,
  },
  separatorStyle: {
    height: 1,
    marginHorizontal: '5%',
    backgroundColor: 'lightgray',
  },
  listEmptyStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    margin: 20,
  },
});

export default RepoList;
