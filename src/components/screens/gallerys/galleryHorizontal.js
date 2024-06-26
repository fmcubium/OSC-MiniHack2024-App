import { StyleSheet, View, Text, Image, Dimensions, } from 'react-native';
import React, { useState } from 'react';
import { FlatList } from 'react-native-gesture-handler';
import clubData from '../../../data/clubData';
import 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { yesClubs } from '../../../data/yesClubs';

const Tab = createBottomTabNavigator();

const SCREEN_WIDTH = Dimensions.get('window').width;

const Stack = createStackNavigator();



const GalleryHorizontal = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    


    const handleOnScroll = (event) => {
        const scrollPosition = event.nativeEvent.contentOffset.x;
        const index = scrollPosition / SCREEN_WIDTH.toFixed(2);
        const indexFixed = Math.ceil(index)
        setActiveIndex(indexFixed)
    }
    const renderDotInicators = () => {
        return clubData.map((dot, index) => {
            // console.log("index", index)
            // console.log("active", activeIndex)
            if (activeIndex === index) {
                return (
                    <View
                        key={index}
                        style={styles.dotActive}
                    >
                    </View>
                )
            } else {
                return <View
                    key={index}
                    style={styles.dot}
                >
                </View>
            }

        })
    }
    return (
        <View style={{ justifyContent: 'center', alignItems: 'center', height: "100%", }}>
      
          
            <FlatList
                horizontal
                showsHorizontalScrollIndicator={false}
                snapToInterval={SCREEN_WIDTH}
                snapToAlignment='center'
                pagingEnabled
                data={yesClubs}
                onScroll={handleOnScroll}
                scrollEventThrottle={0}
                renderItem={({ item }) => {
                    return (
                        <View style={{ ...styles.container, width: SCREEN_WIDTH }}>
                            <Image source={item.image} style={styles.image} />
                            <View style={styles.bioContainer}>
                                <Text style={styles.clubName}>{item.name}</Text>
                                <Text style={styles.clubBio}>{item.bio}</Text>
                                
                            </View>
                        </View>
                    )
                }}
            />
            <View style={styles.dotcontainer}>
                {renderDotInicators()}
            </View>

        </View>
    )
}
export default GalleryHorizontal
const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: "flex-end",
        flex: 1,
        marginBottom: 50,
        marginTop: -50
    },
    image: {
        width: '95%',
        height: "90%",
        resizeMode: 'cover',
        borderRadius: 5,
        padding: 30
    },
    bioContainer: {
        alignItems: 'flex-start',
        alignSelf: 'center',
        width: '80%',
        padding: 30,
        marginBottom: 30,
        position: "absolute",


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
    
    navigate: {
        flexDirection: "row",
        justifyContent: "space-between",
        width: '90%',
        backgroundColor: 'white',
    },
    bntText: {
        fontSize: 40,

    },
    dotcontainer: {
        flexDirection: 'row',
        bottom: 20,
        width: "100%",
        alignItems: "center",
        justifyContent: 'center'
    },
    dot: {
        width: 12,
        height: 12,
        borderRadius: 6,
        marginHorizontal: 5,
        backgroundColor: '#ccc'
    },
    dotActive: {
        width: 12,
        height: 12,
        borderRadius: 6,
        marginHorizontal: 5,
        backgroundColor: '#000AFF'
    }

});