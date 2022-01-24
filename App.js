import React from 'react';
import {View, Text, SafeAreaView} from 'react-native';
import Demo1 from './Demo1';

const App = () => {
  // const [count, setCount] = useState(0);
  return (
    <SafeAreaView>
      <View>
        <Text>App Component Here</Text>
        <Demo1 title={'Counter 1'} />
        <Demo1 title={'Counter 2'} />
      </View>
    </SafeAreaView>
  );
};

export default App;
