import { ScrollView, Text, SafeAreaView } from 'react-native'
import React from 'react'
import FlatCards from './components/FlatCards';

const App = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <Text>App</Text>
        <FlatCards/>
      </ScrollView>
    </SafeAreaView>
  );
}

export default App