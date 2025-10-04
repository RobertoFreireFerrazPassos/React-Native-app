import { Text, StyleSheet } from 'react-native';
import { palette } from '../Import';

export default function CustomText(props) {
  return (
    <Text {...props} style={[styles.text, props.style]}>
      {props.children}
    </Text>
  );
}

const styles = StyleSheet.create({
  text: {
    fontFamily: 'CustomFont',
    fontSize: 24,
    color: palette.primary,
    letterSpacing: 2,
  },
});