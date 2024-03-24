import React, { useState } from 'react';
import 'react-native-gesture-handler';
import { StyleSheet, Text, View, Image, Pressable } from 'react-native';
import { yesClubs } from '../../../data/yesClubs';

export default function RemoveImage() {
    const [clubs, setClubs] = useState(yesClubs);

    const handleButtonPress = (clubIdToRemove) => {
        // Filter out the club with the given id
        const updatedClubs = clubs.filter(club => club.id !== clubIdToRemove);
        setClubs(updatedClubs); // Update the state to re-render the component without the removed club's image
    };

    return (
        <View style={{ backgroundColor: "white", height: "100%" }}>
            <View style={styles.users}>
                {clubs.map(club => (
                    <View style={styles.user} key={club.id}>
                        <Button onPress={() => handleButtonPress(club.id)} />
                        <Image source={club.image} style={styles.image} />
                    </View>
                ))}
            </View>
        </View>
    );
}

const Button = (props) => {
    return (
      <Pressable style={styles.xMarkContainer} onPress={props.onPress}>
        <Image source={require("../../../images/red-x.png")} style={styles.xMark}></Image>
      </Pressable>
    );
}

const styles = StyleSheet.create({
    users:{
        margin:10,
        padding:10,
        flexDirection:"row",
        flexWrap:"wrap"
    },
    user:{
        width:150,
        height:150,
        margin:10,
        position: "relative"
    },
    image:{
        width:"100%",
        height:"100%",
        borderRadius: 50,
        borderWidth: 3,   
        borderColor: '#000AFF', 
    },
    xMarkContainer: {
        position: "absolute",
        top: 5,
        right: 5,
        zIndex: 1,
    },
    xMark:{
        height: 30, // Adjust the height and width here to make the X larger
        width: 30,
    }
});
