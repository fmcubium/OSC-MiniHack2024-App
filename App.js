import React, { useState } from 'react';
import 'react-native-gesture-handler';
import { StyleSheet, View, Text, useWindowDimensions, Image, ImageBackground, SafeAreaView } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import Header from './src/components/header/header';
import Footer from './src/components/footer/footer';
import { NavigationContainer } from '@react-navigation/native';
import Questions from './src/components/screens/questions'; // Import Questions component

export default function App() {
  const [questionnaireCompleted, setQuestionnaireCompleted] = useState(false);
  const [userData, setUserData] = useState(null); // State to store user data

  const onComplete = (data) => {
    setUserData(data); // Set user data received from Questions component
    setQuestionnaireCompleted(true);
  };

  return (

    <GestureHandlerRootView style={{ flex: 1 }}>
      <Header />
      {!questionnaireCompleted ? (
        <Questions onComplete={onComplete} />
      ) : (
        <NavigationContainer>
          <Footer />
        </NavigationContainer>
      )}

    </GestureHandlerRootView>

  );
}
