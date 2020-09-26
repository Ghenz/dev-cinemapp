import React, {useState} from 'react';
import {Text, View, Image, TouchableWithoutFeedback} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

import Icon from 'react-native-vector-icons/FontAwesome';

import styles from './styles'

const MovieItem = ({movie, favorited}) => {
  const [isFavorited, setIsFavorited] = useState(favorited);

  async function handleToggleFavorite() {

    const favorites = await AsyncStorage.getItem('favorites');

    let favoritesArray = [];

    if (favorites) {
      favoritesArray = JSON.parse(favorites);
    }

    if (isFavorited) {
      const favoriteIndex = favoritesArray.findIndex((movieItem) => {
        return movie.imdbID === movieItem.imdbID;
      });

      favoritesArray.splice(favoriteIndex, 1);

      setIsFavorited(false);
    } else {
      favoritesArray.push(movie);

      setIsFavorited(true);
    }

    await AsyncStorage.setItem('favorites', JSON.stringify(favoritesArray));
  }

  return (
    <View style={styles.container}>

      <Image source={{uri: movie.Poster}} style={{height: 50, width: 50, borderRadius: 50}}></Image>

      <View style={{flexDirection: 'column', marginHorizontal: 10, width: 240}}>
        <Text style={{color: 'black'}}>{movie.Title}</Text>
        <Text style={{color: 'black', justifyContent: 'flex-start'}}>{movie.Year}</Text>
      </View>

      <TouchableWithoutFeedback touchSoundDisabled={true} onPress={handleToggleFavorite}>
        <Icon name="star" size={30} color={isFavorited ? "blue" : "grey"} />
      </TouchableWithoutFeedback>

    </View>
  );
};

export default MovieItem;
