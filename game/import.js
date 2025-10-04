
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
  green : 'rgba(67,169,158,1)',
  pink : 'rgba(166,100,213,1)',
  brown : 'rgba(143,126,136,1)',
  backgroundprimary : 'rgba(106,190,238,0.6)',
  backgroundsecondary: 'rgba(0,88,185,0.6)',
  backgrounddark : 'rgba(0,31,79,0.6)',
  backgroundgreen : 'rgba(67,169,158,0.6)',
  backgroundpink : 'rgba(166,100,213,0.6)',
  backgroundbrown : 'rgba(143,126,136,0.6)',
}