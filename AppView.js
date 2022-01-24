import React from 'react';
import { View } from 'react-native';

const AppView = props => {
  const getBorder = () => {
    if (props.bordered) {
      return {
        textAlign: 'center',
        borderWidth: 1,
        borderColor: 'black',
      };
    }
  };

  return (
    <View
      style={{
        ...getBorder(),
        margin: 10,
        padding: 10,
        ...props.style,
      }}
    >
      {props.children}
    </View>
  );
};

export default AppView;
