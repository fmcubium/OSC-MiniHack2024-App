
import { StyleSheet, View, Text, useWindowDimensions, Image,  Dimensions } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import clubData from '../../../data/clubData';
import { yesClubs } from '../../../data/yesClubs';
const SCREEN_WIDTH = Dimensions.get('window').width;
export default function GallaryVericle() {
  return (
    <View>
      <FlatList
        data={yesClubs}
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
    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    alignItems: 'center',
    justifyContent: "flex-end",
    marginTop:10,
    marginBottom:10
  
},
image: {
    width: '95%',
    height: SCREEN_WIDTH,
    resizeMode: 'cover',
    borderRadius: 5,
    padding: 30
},
bioContainer: {
    alignItems: 'flex-start',
    alignSelf: 'center',
    width: '80%',
    padding: 30,
    position: "absolute",
    backgroundColor: 'rgba(0,0,0, 0.10)',
    borderRadius: 30,

},
clubName: {
    fontSize: 30,
    color: 'white',
    fontWeight: 'bold',
},
clubBio: {
    fontSize: 18,
    color: 'white'
},


});
