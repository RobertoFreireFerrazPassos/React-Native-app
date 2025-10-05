import { StyleSheet, Text, View, ImageBackground } from 'react-native';
import { useEffect, useState } from 'react';
import { loadCustomFont, images } from './Import';
import CustomButton from './components/CustomButton';

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
            {[{ 'name' : 'Button 1'},{ 'name' : 'Button 2'}].map((item, index) => (
              <CustomButton key={index} title={item.name} onPress={() => {}} />
            ))}
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
    justifyContent: 'flex-start',
    paddingHorizontal: 12,
    paddingTop: 50,
    paddingBottom: 20,
  },
});