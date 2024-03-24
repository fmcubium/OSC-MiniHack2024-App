import React from "react";
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
const Header = () => {

  return (
    <SafeAreaView>
      <View style={styles.header}>
        <Text style={styles.headerText}>OSC Club Selector</Text>
      </View>
    </SafeAreaView>
  )

}
const styles = StyleSheet.create({

  header: {
    flex: 0,
    width: '100%',
    justifyContent: "flex-start",
    borderRadius: 30,

  },
  headerText: {
    padding: 20,
    fontSize: 30,
    color: 'white',
    fontWeight: 'bold',
    backgroundColor: '#000AFF'
  }
});
export default Header