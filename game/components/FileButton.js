import { TouchableOpacity,  StyleSheet, View } from 'react-native';
import CustomText from './CustomText';
import { palette } from '../Import';

export default function CustomButton({ title, onPress, style }) {
  return (<TouchableOpacity onPress={onPress} style={[styles.button, style]} activeOpacity={0.8}>
    <CustomText>{title}</CustomText>
  </TouchableOpacity>);
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: palette.backgroundsecondary,
    borderColor: palette.primary,
    borderWidth: 4,
    borderRadius: 6,
    paddingVertical: 4,
    paddingHorizontal: 12,
    marginTop: 8,
    width: '100%',
  },
});