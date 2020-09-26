import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#1f2923',
      paddingTop: 40,
      paddingHorizontal: 10
    },

    searchContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginTop: 20,
      marginBottom: 40
    },

    headerText: {
      color: '#f5f6f6',
      fontSize: 30
    },

    subHeaderText: {
      color: '#f5f6f6',
      fontSize: 15
    },

    favoritesList:{
      marginTop: 20 
    }

})

export default styles;