import React from 'react';
import {NavigationContainer} from '@react-navigation/native'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import Icon from 'react-native-vector-icons/FontAwesome'

import MovieList from '../pages/MovieList'
import Favorites from '../pages/Favorites'

const {Navigator, Screen} = createBottomTabNavigator()

const Routes = () => {
  return (
      <NavigationContainer>
        <Navigator tabBarOptions={{
          style: {
            backgroundColor: '#647687'
          },
          tabStyle: {
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center'
          },
          iconStyle: {
            flex: 0,
            width: 20,
            height: 20
          },
          labelStyle: {
            fontSize: 16,
            marginLeft: 13
          },
          inactiveTintColor: '#EEE',
          activeTintColor: '#33ffff'
        }}>
          <Screen 
            name="MovieList" 
            component={MovieList} 
            options={{
              tabBarLabel: "Buscar",
              tabBarIcon: ({ color, size }) => {
                return (
                  <Icon name="search" size={size} color={color} />
                )
              }
            }} 
          />

          <Screen 
            name="Favorites" 
            component={Favorites}
            options={{
              tabBarLabel: "Favoritos",
              tabBarIcon: ({ color, size }) => {
                return (
                  <Icon name="star" size={size} color={color} />
                )
              }
            }} 
          />
        </Navigator>
      </NavigationContainer>
  );
}

export default Routes;