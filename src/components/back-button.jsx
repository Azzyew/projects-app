import { TouchableOpacity, Text } from 'react-native';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import { useRouter } from 'expo-router';
import colors from 'tailwindcss/colors';

export const BackButton = () => {
  const router = useRouter();

  return (
    <TouchableOpacity className='flex-row mb-7 items-center' onPress={() => router.push('/')}>
      <FontAwesome5 name='arrow-left' size={20} color={colors.sky[800]} />
      <Text className='ml-2 font-semibold text-sky-800'>Voltar</Text>
    </TouchableOpacity>
  )
}