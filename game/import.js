
import * as Font from 'expo-font';

export const loadCustomFont = async () => {
  await Font.loadAsync({
    'CustomFont': require('./assets/fonts/BoldPixels.ttf'),
  });
};

export const images = {
  'background' : require('./assets/images/background.png'),
};

export const palette = {
  primary: 'rgba(106,190,238,1)',
  secondary: 'rgba(0,88,185,1)', 
  dark : 'rgba(0,31,79,1)', 
  backgroundprimary : 'rgba(106,190,238,0.6)',
  backgroundsecondary: 'rgba(0,88,185,0.6)',
  backgrounddark : 'rgba(0,31,79,0.6)',
}