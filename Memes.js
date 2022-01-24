import axios from 'axios';
import React, { useEffect, useState } from 'react';
import {
  ActivityIndicator,
  Alert,
  Image,
  ScrollView,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import AppText from './AppText';
import AppView from './AppView';

const Memes = props => {
  const [memes, setMemes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [title, setTitle] = useState('');
  const [imageURL, setImageURL] = useState('');

  useEffect(() => {
    getMemes();
  }, []);

  const getMemes = async () => {
    try {
      let response = await axios.get(
        'https://heroku-w21.herokuapp.com/api/memes',
      );
      setMemes(response.data);
      setLoading(false);
    } catch (err) {
      Alert.alert(
        'Error occured',
        'My Alert Msg',
        [
          {
            text: 'Cancel',
            onPress: () => Alert.alert('Cancel Pressed'),
            style: 'cancel',
          },
        ],
        {
          cancelable: true,
          onDismiss: () =>
            Alert.alert(
              'This alert was dismissed by tapping outside of the alert dialog.',
            ),
        },
      );
      setLoading(false);
    }
  };

  const renderMemes = () => {
    return memes.map(m => {
      return (
        <AppView bordered>
          <AppText large>{m.title}</AppText>
          <Image
            style={{ width: 300, height: 300 }}
            source={{ uri: m.image_url }}
          />
        </AppView>
      );
    });
  };

  const addMeme = async () => {
    try {
      let response = await axios.post('/memes', {
        title: title,
        image_url: imageURL,
      });
    } catch (err) {
      setMemes([{ title: title, image_url: imageURL }, ...memes]);
    }
  };

  return (
    <AppView bordered>
      <AppText large centered>
        Memes
      </AppText>
      <AppText>New Title</AppText>
      <TextInput
        value={title}
        onChangeText={setTitle}
        style={{ height: 40, borderWidth: 1 }}
      />
      <AppText>Image URL</AppText>
      <TextInput
        value={imageURL}
        onChangeText={setImageURL}
        style={{ height: 40, borderWidth: 1 }}
      />
      <TouchableOpacity onPress={addMeme}>
        <AppText>Add</AppText>
      </TouchableOpacity>
      {loading && <ActivityIndicator size="large" />}
      {!loading && renderMemes()}
      {/* <AppText>{JSON.stringify(memes)}</AppText> */}
    </AppView>
  );
};

export default Memes;
