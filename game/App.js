import { StyleSheet, Text, View } from 'react-native';
import { useEffect, useState } from 'react';
import { loadCustomFont } from './import';
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
      <CustomText style={{ fontSize: 24, color: '#fafafa' }}>
        Main page
      </CustomText>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#011a1e',
    alignItems: 'center',
    justifyContent: 'center',
  },
});