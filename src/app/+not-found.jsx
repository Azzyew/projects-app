import { useNavigation } from 'expo-router';
import { Text, View } from 'react-native';
import { Button } from '../components/button';

export default function NotFoundScreen() {
  const navigation = useNavigation();

  return (
    <>
      <View className='flex-1 pt-12 justify-center items-center'>
        <Text className='text-sky-800 font-semibold text-lg'>Essa tela não existe...</Text>

        <Button buttonText='Voltar' onPress={() => navigation.goBack()} />

      </View>
    </>
  );
}