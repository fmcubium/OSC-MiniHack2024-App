import React from 'react';
import 'react-native-gesture-handler';
import { StyleSheet, Text, View, Image,Pressable } from 'react-native';
import { yesClubs } from '../../../data/yesClubs';
export default function RemoveImage() {
    const Button = (props) => {
        const { onPress, title = 'Save' } = props;
        return (
          <Pressable style={{zIndex:1}} onPress={onPress}>
            <Image source={require("../../../images/red-x.png")} style={styles.xMark}></Image>
          </Pressable>
        );
      }
      const handleButtonPress = (clubIdToRemove) => {
        alert('Deleting');
        const updatedClubs = yesClubs.filter(club => club.id !== clubIdToRemove);
        yesClubs = updatedClubs;
    };
    return (
        <View style={{ backgroundColor: "white", height: "100%" }}>
        <View style={styles.users}>
        {yesClubs.map(club => (
            <View style={styles.user} key={club.id}>
                <Button onPress={handleButtonPress} title="Upgrade" />
                {/* <Image source={require("../../../images/red-x.png")} style={styles.xMark}></Image> */}
                <Button onPress={handleButtonPress} title="Upgrade" />
                <Image source={club.image} style={styles.image} />
            </View>
        ))}
        </View>
      
    </View>

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
        margin:10
    },
    image:{
        width:"100%",
        height:"100%",
        borderRadius: 50,
        borderWidth: 3,   
        borderColor: '#000AFF', 
    },
    xMark:{
        height:50,
        width:50,
        position:"absolute",
        zIndex:1,
        borderRadius: 50,
        overflow: 'hidden',
        top:-20,
        alignSelf:"flex-end"
    }
})
