import React from "react";
import { StyleSheet, Text, View, ImageBackground } from 'react-native';
const Card = props => {
    const {name,bio,image} = props.club
    return (
        <View style={styles.mainImageContainer}>
        <ImageBackground
        source={image}
        style={styles.mainImage}>
        <View style={styles.bioContainer}>
          <Text style={styles.clubName}>{name}</Text>
          <Text style={styles.clubBio}>{bio}</Text>
        </View>
      </ImageBackground>
      </View>
    )
    
}
const styles = StyleSheet.create({
    mainImage: {
      height: '100%',
      width: '100%',
      borderRadius: 30,
      overflow: 'hidden',
      justifyContent: 'flex-end',
      
    },
    bioContainer:{
      alignItems: 'flex-start',
      alignSelf:'center',
      width: '80%',
      padding:10,
      marginBottom:30,
      backgroundColor: 'rgba(0,0,0, 0.10)',
      borderRadius: 30,
    },
    clubName: {
      fontSize: 30,
      color: 'white',
      fontWeight: 'bold',
      textShadowColor: '#000',
      textShadowOffset: { width: 2, height: 2 },
      textShadowRadius: 2,
    },
    clubBio: {
      fontSize: 18,
      color: 'white',
      textShadowColor: '#000',
      textShadowOffset: { width: 2, height: 2 },
      textShadowRadius: 2,
    },
    mainImageContainer: {
        height: '80%',
        width: '98%',
        alignItems: 'center',
        borderRadius: 30,
      },
})
export default Card;