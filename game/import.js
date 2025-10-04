
import * as Font from 'expo-font';

export const loadCustomFont = async () => {
  await Font.loadAsync({
    'CustomFont': require('../assets/fonts/BoldPixels.ttf'),
  });
};