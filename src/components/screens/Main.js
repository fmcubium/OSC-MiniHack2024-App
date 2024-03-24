import React,{useState} from 'react';
import 'react-native-gesture-handler';
import { StyleSheet, View,  } from 'react-native';
import Card from '../clubCard';
import clubData from '../../data/clubData';
import AnimatedStack from '../animatedCard/animatedCardIndex';
import { yesClubs } from '../../data/yesClubs';

export default function Main() {
    

    const onSwipeLeft = (club) => {
        console.log("swipe left", club.name)
        club.status = "Dislike"
        console.log(club.status)
        console.log(club)
    }
    const onSwipeRight = (club) => {
        console.log("swipe right", club.name);
        club.status = "Like";
        yesClubs.push(club); // Add the club to yesClubs
        console.log(club.status);
        console.log(club);
    }
    return (

        <View style={styles.imageContainer}>
            <AnimatedStack
                data={clubData}
                renderItem={({ item }) => <Card club={item} />}
                onSwipeLeft={onSwipeLeft}
                onSwipeRight={onSwipeRight}
            />
            
        </View>

    );
}

const styles = StyleSheet.create({
    imageContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: "white"
    },
    mainImage: {
        height: '100%',
        width: '100%',
        
    },
});
