import React from 'react';
import { StyleSheet, Text, View, Image, FlatList } from 'react-native';
import { yesClubs } from '../../../data/yesClubs';

export default function Announcement() {
  const renderAnnouncement = ({ item }) => {
    return (
      <View style={styles.container}>
        <Image source={item.image} style={styles.image} />
        <View style={styles.announcementContainer}>
          <Text style={styles.title}>{item.name}</Text>
          <Text style={styles.date}>{item.announcement.date}</Text>
          <Text style={styles.announcementTitle}>{item.announcement.title}</Text>
          <Text style={styles.announcementAbout}>{item.announcement.about}</Text>
        </View>
      </View>
    );
  };

  return (
    <FlatList
      data={yesClubs}
      renderItem={renderAnnouncement}
      keyExtractor={(item) => item.id.toString()}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    marginBottom: 20, // Add some margin between announcements
  },
  image: {
    width: 200,
    height: 200,
    resizeMode: 'cover',
    borderRadius: 10,
    marginBottom: 10,
  },
  announcementContainer: {
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 5,
    textAlign: 'center', // Center the text
  },
  date: {
    fontSize: 16,
    marginBottom: 5,
  },
  announcementTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  announcementAbout: {
    fontSize: 16,
    textAlign: 'center',
    marginHorizontal: 20,
  },
});
