import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity, ActivityIndicator } from 'react-native';

const Questionnaire = ({ onComplete }) => {
  const [major, setMajor] = useState('');
  const [interests, setInterests] = useState('');
  const [about, setAbout] = useState('');
  const [loading, setLoading] = useState(false);

  const handleComplete = () => {
    // Show loading animation
    setLoading(true);

    // Simulate a delay before completing the questionnaire
    setTimeout(() => {
      // Here you can perform any necessary validation or processing of the questionnaire data
      // For simplicity, let's just check if major, interests, and about are not empty
      if (major.trim() !== '' && interests.trim() !== '' && about.trim() !== '') {
        // Call the onComplete function passed from the parent component
        onComplete({ major, interests, about }); // Pass the entered data to the parent component
      } else {
        // Handle invalid input, show an error message, etc.
        alert('Please fill out all fields.');
      }
      // Hide loading animation
      setLoading(false);
    }, 10000); // Adjust the timeout value as needed (in milliseconds)
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>AI/ML Questionnaire</Text>
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
        multiline
      />
      <TextInput
        style={[styles.input, { height: 120 }]}
        placeholder="Tell me about yourself"
        value={about}
        onChangeText={text => setAbout(text)}
        multiline
      />
      <TouchableOpacity style={styles.button} onPress={handleComplete} disabled={loading}>
        {loading ? (
          <ActivityIndicator color="#fff" />
        ) : (
          <Text style={styles.buttonText}>Submit to AI Model</Text>
        )}
      </TouchableOpacity>
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
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 30,
    textAlign: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 16,
    marginBottom: 20,
    width: '100%',
    fontSize: 16,
  },
  button: {
    backgroundColor: '#007AFF',
    borderRadius: 8,
    paddingVertical: 14,
    paddingHorizontal: 24,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default Questionnaire;