import React, { useState } from 'react';
import { Button, Pressable, TouchableOpacity, StyleSheet } from 'react-native';
import AppText from './AppText';
import AppView from './AppView';

const Demo1 = props => {
  const [count, setCount] = useState(0);
  const [text, setText] = useState('Press');
  return (
    <AppView style={styles.counterContainer}>
      <AppText large centered style={{ color: 'red' }}>
        {props.title}
      </AppText>
      <AppView>
        <AppView bordered>
          <AppText small>Count: {count}</AppText>
        </AppView>
        <AppView style={styles.btnGroup}>
          <AppText
            style={styles.borderStyle}
            onPress={() => setCount(count + 1)}
          >
            Add
          </AppText>
          <TouchableOpacity
            style={styles.borderStyle}
            onPress={() => setCount(count - 1)}
          >
            <AppText>Minus</AppText>
          </TouchableOpacity>
        </AppView>
        <Button onPress={() => setCount(0)} title="Reset" />
      </AppView>
      <Pressable
        onPressIn={() => setText('onPressIn')}
        onPressOut={() => setText('onPressOut')}
        onPress={() => setText('onPress')}
        onLongPress={() => setText('onLongPress')}
      >
        <AppText centered>{text}</AppText>
      </Pressable>
    </AppView>
  );
};

const styles = StyleSheet.create({
  counterContainer: {
    margin: 20,
    borderWidth: 2,
    borderColor: 'red',
    borderRadius: 12,
    padding: 4,
    display: 'flex',
    justifyContent: 'center',
  },
  btnGroup: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  borderStyle: {
    textAlign: 'center',
    borderWidth: 1,
  },
});

export default Demo1;
