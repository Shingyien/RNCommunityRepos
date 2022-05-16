import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {useSelector} from 'react-redux';
import RepoDetailsContainer from '../components/RepoDetailsContainer';
import {faStar, faEye, faCodeFork} from '@fortawesome/free-solid-svg-icons';

const DetailsScreen = ({route}) => {
  const {id} = route.params;
  const {repos} = useSelector(state => state.repos);

  const repo = repos.find(repo => repo.id === id);

  return (
    <View style={styles.detailsScreenStyle}>
      <Text style={styles.titleTextStyle}>{repo.name}</Text>
      <Text style={styles.descTextStyle}>{repo.description}</Text>
      <View style={{flexDirection: 'row', marginBottom: 20}}>
        <RepoDetailsContainer
          icon={faStar}
          value={repo.stargazers_count}
          type="stars"
        />
        <RepoDetailsContainer
          icon={faEye}
          value={repo.watchers_count}
          type="watching"
        />
        <RepoDetailsContainer
          icon={faCodeFork}
          value={repo.forks_count}
          type="forks"
        />
      </View>
      {repo.language != null && (
        <View style={{flexDirection: 'row'}}>
          <Text style={styles.descTextStyle}>Language: </Text>
          <Text style={styles.descTextStyle}>{repo.language}</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  detailsScreenStyle: {
    padding: 20,
    backgroundColor: 'white',
    flex: 1,
  },
  titleTextStyle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
    color: 'black',
  },
  descTextStyle: {
    fontSize: 16,
    marginBottom: 20,
    color: 'black',
  },
});

export default DetailsScreen;
