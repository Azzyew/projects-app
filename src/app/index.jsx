import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, ScrollView, Text, View } from 'react-native';
import { useProjectsQuery } from '../queries/projects';
import { Link } from 'expo-router';
import { Button } from '../components/button';
import { Card } from '../components/card';

export default function HomeScreen() {
  const { getAllProjects } = useProjectsQuery();

  const { data, isLoading } = getAllProjects();

  if (isLoading) (
    <Text>Carregando...</Text>
  );

  return (
    <SafeAreaView className='flex-1 bg-sky-100 items-center'>
      <View className='p-8'>
        <View className='flex-row items-center justify-between'>
          <Text className='text-xl font-semibold mt-2.5 mr-2'>Meus projetos</Text>
          <Link href={'/create'} asChild>
            <Button buttonText='Novo projeto' />
          </Link>
        </View>

        {data?.length > 0 ? (
          <ScrollView className='mt-4'>
            {/* cards here */}
          </ScrollView>
        )
          : (
            <View className='h-1/3 items-center justify-center'>
              <Text className='text-lg'>Nenhum projeto encontrado... 😔</Text>
            </View>
          )
        }

        <StatusBar style="auto" />
      </View >
    </SafeAreaView >
  );
};
