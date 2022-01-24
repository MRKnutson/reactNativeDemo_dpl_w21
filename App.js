import React from 'react';
import { View, Text, SafeAreaView, ScrollView } from 'react-native';
import Demo1 from './Demo1';
import Memes from './Memes';

const App = () => {
  // const [count, setCount] = useState(0);
  return (
    <SafeAreaView>
      <ScrollView>
        <Text>App Component Here</Text>
        <Memes />
        <Demo1 title={'Counter 1'} />
        <Demo1 title={'Counter 2'} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;
