
import * as Font from 'expo-font';

export const loadCustomFont = async () => {
  await Font.loadAsync({
    'CustomFont': require('./assets/fonts/BoldPixels.ttf'),
  });
};

export const images = {
  'background' : require('./assets/images/background.png'),
};