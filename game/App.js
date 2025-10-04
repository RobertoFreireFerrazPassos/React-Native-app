import { StyleSheet, Text, View, ImageBackground } from 'react-native';
import { useEffect, useState } from 'react';
import { loadCustomFont, images } from './import';
import CustomText from './components/CustomText';

export default function App() {
  const [fontLoaded, setFontLoaded] = useState(false);

  useEffect(() => {
    loadCustomFont().then(() => setFontLoaded(true));
  }, []);

  if (!fontLoaded) {
    return <View style={styles.container}><Text>Loading...</Text></View>;
  }

  return (
    <View style={styles.container}>
        <ImageBackground
          source={images.background}
          style={styles.image}
          resizeMode="cover"
        >
          <CustomText style={styles.text}>
              Main page
          </CustomText>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 24,
    color: '#fafafa',
  },
});