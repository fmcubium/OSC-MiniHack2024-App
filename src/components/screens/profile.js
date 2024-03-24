import React, { useState } from 'react';
import { StyleSheet, View, Text, Image, FlatList, Dimensions, Pressable, TextInput, KeyboardAvoidingView, Platform } from 'react-native';

const SCREEN_WIDTH = Dimensions.get('window').width;

export default function Profile() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [newTag, setNewTag] = useState('');
  const [tags, setTags] = useState([
    'Software Development',
    'Programming',
    'Professional Development',
    'Asian',
    'Inclusivity',
    'Diversity',
    'Technical',
  ]);

  const handleOnScroll = (event) => {
    const scrollPosition = event.nativeEvent.contentOffset.x;
    const index = scrollPosition / SCREEN_WIDTH.toFixed(2);
    const indexFixed = Math.ceil(index);
    setActiveIndex(indexFixed);
  };

  const addTag = () => {
    if (newTag.trim() !== '') {
      setTags([...tags, newTag]);
      setNewTag('');
    }
  };

  const handleButtonPress = () => {
    addTag();
  };

  return (
    <KeyboardAvoidingView style={styles.container} behavior={Platform.OS === "ios" ? "padding" : "height"}>
      <View style={styles.profileContainer}>
        <View style={styles.imageContainer}>
          <Image source={require('../../images/clubProfile.jpg')} style={styles.image} />
        </View>
        <Text style={styles.profileText}>Kovidh Gandreti</Text>
      </View>
      <View style={styles.addTagContainer}>
        <TextInput
          style={styles.input}
          placeholder="Add Tag"
          value={newTag}
          onChangeText={(text) => setNewTag(text)}
        />
        <Pressable style={[styles.addButton, { backgroundColor: 'orange' }]} onPress={handleButtonPress}>
          <Text style={styles.buttonText}>Add Tag</Text>
        </Pressable>
      </View>
      <View style={styles.tagsContainer}>
        <Text style={styles.title}>Tags</Text>
        <View style={styles.tags}>
          {tags.map((tag, index) => (
            <View key={index} style={styles.tagContainer}>
              <Text style={styles.tag}>{tag}</Text>
            </View>
          ))}
        </View>
      </View>
      <View style={styles.flatListContainer}>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          snapToInterval={SCREEN_WIDTH}
          snapToAlignment="center"
          pagingEnabled
          onScroll={handleOnScroll}
          scrollEventThrottle={0}
          contentContainerStyle={styles.flatListContent}
          data={['item1', 'item2', 'item3']} // Add your data here
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <View style={styles.flatListItem}>
              {/* Your content for each item */}
            </View>
          )}
        />
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  profileContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
  },
  imageContainer: {
    width: 180,
    height: 180,
    borderRadius: 90,
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
  addTagContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
    marginBottom: 10,
  },
  input: {
    flex: 1,
    borderWidth: 2,
    borderColor: '#000AFF',
    borderRadius: 20,
    paddingHorizontal: 10,
    paddingVertical: 8,
    marginRight: 10,
  },
  addButton: {
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 20,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  tagsContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
  tags: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  tagContainer: {
    margin: 5,
  },
  tag: {
    paddingHorizontal: 15,
    paddingVertical: 8,
    borderRadius: 20,
    backgroundColor: '#000AFF',
    color: 'white',
  },
  flatListContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  flatListContent: {
    flexGrow: 1,
    justifyContent: 'center',
  },
  flatListItem: {
    width: SCREEN_WIDTH,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
