import React, { useState } from 'react';
import { StyleSheet, View, Text, Image, FlatList, Dimensions, Pressable } from 'react-native';

const SCREEN_WIDTH = Dimensions.get('window').width;

export default function Profile() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleOnScroll = (event) => {
    const scrollPosition = event.nativeEvent.contentOffset.x;
    const index = scrollPosition / SCREEN_WIDTH.toFixed(2);
    const indexFixed = Math.ceil(index);
    setActiveIndex(indexFixed);
  };

  const Button = (props) => {
    const { onPress, title = 'Save' } = props;
    return (
      <Pressable style={styles.button} onPress={onPress}>
        <Text style={styles.text}>{title}</Text>
      </Pressable>
    );
  };

  const handleButtonPress = () => {
    alert('Upgrading');
  };

  // Hardcoded tags based on club descriptions
  const tags = [
    'Software Development',
    'Programming',
    'Professional Development',
    'Asian',
    'Inclusivity',
    'Diversity',
    'Technical',
  ];

  return (
    <View style={{ backgroundColor: 'white', height: '100%', justifyContent: 'space-between' }}>
      <View style={{ justifyContent: 'center', alignItems: 'center' }}>
        <View style={{ ...styles.imageContainer, justifyContent: 'center', alignItems: 'center' }}>
          <Image source={require('../../images/clubProfile.jpg')} style={styles.image} />
        </View>
        <Text style={styles.profileText}>Kovidh Gandreti</Text>
        <Text style={styles.year}>1st Year: Computer Science</Text>
      </View>
      <View>
        <Text style={styles.title}>Tags</Text>
        <View style={styles.tagsContainer}>
          {tags.map((tag, index) => (
            <Text key={index} style={styles.tag}>
              {tag}
            </Text>
          ))}
        </View>
      </View>
      <View style={{ alignItems: 'center', marginBottom: 20 }}>
        <View style={{ width: SCREEN_WIDTH }}>
          <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            snapToInterval={SCREEN_WIDTH}
            snapToAlignment="center"
            pagingEnabled
            onScroll={handleOnScroll}
            scrollEventThrottle={0}
            contentContainerStyle={{ flexGrow: 1, justifyContent: 'center' }}
            data={['item1', 'item2', 'item3']} // Add your data here
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) => (
              <View style={{ width: SCREEN_WIDTH, justifyContent: 'center', alignItems: 'center' }}>
                {/* Your content for each item */}
              </View>
            )}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  imageContainer: {
    marginTop: 10,
    width: 180,
    height: 180,
    borderRadius: 150,
    borderWidth: 3,
    borderColor: '#000AFF',
    overflow: 'hidden',
  },
  profileText: {
    marginTop: 10,
    fontSize: 25,
    fontWeight: 'bold',
  },
  year: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 5,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 5,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: '#000AFF',
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
  tagsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginTop: 10,
  },
  tag: {
    margin: 5,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#000AFF',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 20,
  },
});
