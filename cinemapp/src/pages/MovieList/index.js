import React, {useState} from 'react';
import {FlatList, View, TextInput, Text, TouchableOpacity} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

import MovieItem from '../../components/MovieItem';

import styles from './styles';

const MovieList = () => {
  const [movies, setMovies] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [searchText, setSearchText] = useState('');

  function loadFavorites() {
    AsyncStorage.getItem('favorites').then((response) => {
      if (response) {
        const favoritedMovies = JSON.parse(response);

        setFavorites(favoritedMovies);
      }
    });
  }

  async function loadMovies() {
    const response = await fetch(`http://www.omdbapi.com/?apikey=925eba28&s=${searchText}`);

    const {Search: movies} = await response.json();

    setMovies(movies);
  }

  const handleSearchSubmit = async () => {
    loadFavorites();
    loadMovies()
  }

  return (
    <View style={styles.container}>

      <Text style={styles.headerText}>Cinema APP</Text>
      <Text style={styles.subHeaderText}>Bem-vindo ao mundo espetacular do cinema</Text>

      <View style={styles.searchContainer}>

        <TextInput 
          style={styles.input} 
          placeholder="O que você busca..." 
          placeholderTextColor="black" 
          onChangeText={text => setSearchText(text)}
        />
        <TouchableOpacity 
          touchSoundDisabled={true} 
          style={styles.button} 
          onPress={handleSearchSubmit}
        >
        <Text style={styles.buttonTextColor}>Buscar</Text>
        </TouchableOpacity>

      </View>

      <FlatList
        data={movies}
        keyExtractor={item => item.imdbID}
        renderItem={({item: movie}) =>
          <MovieItem movie={movie} favorited={favorites.includes(movie.imdbID)} />
        }
      />

    </View>

  );
};

export default MovieList;
