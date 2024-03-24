import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, Button } from 'react-native';

const Questionnaire = ({ onComplete }) => {
  const [major, setMajor] = useState('');
  const [interests, setInterests] = useState('');

  const handleComplete = () => {
    // Here you can perform any necessary validation or processing of the questionnaire data
    // For simplicity, let's just check if major and interests are not empty
    if (major.trim() !== '' && interests.trim() !== '') {
      // Call the onComplete function passed from the parent component
      onComplete({ major, interests }); // Pass the entered data to the parent component
    } else {
      // Handle invalid input, show an error message, etc.
      alert('Please fill out all fields.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>College Major and Interests Questionnaire</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your major"
        value={major}
        onChangeText={text => setMajor(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Enter your interests"
        value={interests}
        onChangeText={text => setInterests(text)}
      />
      <Button title="Submit" onPress={handleComplete} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 15,
    marginBottom: 20,
    width: '100%',
  },
});

export default Questionnaire;
