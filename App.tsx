import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

// Define the component as a React Functional Component with TypeScript
const App: React.FC = () => {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.dummyText}>Another piece of text!</Text>
      </View>
      <Text style={styles.dummyText}>Hello World!</Text>
      <Text style={styles.dummyText}>{add(1,3)}</Text>
      <Button title="Tap Me!" onPress={() => alert('Button pressed!')} />
    </View>
  );
};

function add(num1: number, num2: number) {
  return num1 + num2;
}

// Define the styles using StyleSheet
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  dummyText: {
    margin: 16,
    borderWidth: 2,
    borderColor: 'red',
    padding: 16,
  },
});

export default App;
