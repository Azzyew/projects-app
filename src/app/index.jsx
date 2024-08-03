import { StatusBar } from 'expo-status-bar';
import { Text, TouchableOpacity, View } from 'react-native';
import { useProjectsQuery } from '../queries/projects';
import { Link } from 'expo-router';

export default function HomeScreen() {
  const { getAllProjects } = useProjectsQuery();

  return (
    <View className='flex-1 bg-white items-center justify-center'>
      <Text>Projects app</Text>
      <Link href={'/create'} asChild >
        <TouchableOpacity>
          <Text>
            +
          </Text>
        </TouchableOpacity>
      </Link>
      <StatusBar style="auto" />
    </View>
  );
};
