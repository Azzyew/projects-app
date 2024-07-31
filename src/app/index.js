import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';

export default function HomeScreen() {
  return (
    <View className='flex-1 bg-white items-center justify-center'>
      <Text>Projects app</Text>
      <StatusBar style="auto" />
    </View>
  );
};
