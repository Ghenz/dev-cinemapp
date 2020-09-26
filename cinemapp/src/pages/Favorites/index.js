import React, {useState} from 'react';
import {FlatList, View, Text} from 'react-native'
import AsyncStorage from '@react-native-community/async-storage';
import {useFocusEffect} from '@react-navigation/native'

import MovieItem from '../../components/MovieItem';

import styles from './styles';

const MovieList = () => {
  const [favorites, setFavorites] = useState([]);

  function loadFavorites() {
    AsyncStorage.getItem('favorites').then((response) => {
      if (response) {
        const favoritedMovies = JSON.parse(response);

        setFavorites(favoritedMovies);
      }
    });
  }

  useFocusEffect(() => {
    loadFavorites()
  });

  return (
    <View style={styles.container}>

      <Text style={styles.headerText}>Cinema APP - Favoritos</Text>
      <Text style={styles.subHeaderText}>Bem-vindo ao mundo espetacular do cinema</Text>


      <FlatList
        style={styles.favoritesList}
        data={favorites}
        keyExtractor={item => item.imdbID}
        renderItem={({item: movie}) =>
          <MovieItem movie={movie} favorited />
        }
      />

    </View>

  );
};

export default MovieList;
