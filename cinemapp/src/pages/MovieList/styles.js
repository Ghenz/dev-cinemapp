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
      fontSize: 15,
    },

    input: {
      backgroundColor: '#f5f6f6',
      width: 270,
      height: 38,
      borderRadius: 5,
      padding: 10
    },

    button: {
      backgroundColor: '#5d717d',
      justifyContent: 'center',
      alignItems: 'center',
      width: 80,
      height: 38,
      borderRadius: 5
    },

    buttonTextColor: {
      color: '#f5f6f6',
      fontWeight: 'bold'
    }


})

export default styles;