import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { useEffect, useState } from 'react';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import colors from 'tailwindcss/colors';
import { Input } from '../components/input';
import { Button } from '../components/button';
import { useProjectsQuery } from '../queries/projects';
import RNDateTimePicker from '@react-native-community/datetimepicker';

export default function EditProject() {
  const router = useRouter();

  const { id } = useLocalSearchParams();
  const { data, isLoading } = useProjectsQuery().getProjectById(id);
  const { mutate: editProject } = useProjectsQuery().editProject();

  const handleEditProject = () => {
    editProject({ id, project });
    router.push('/');
  };

  const [projectName, setProjectName] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [deadline, setDeadline] = useState(new Date());
  const [totalPrice, setTotalPrice] = useState();
  const [description, setDescription] = useState('');
  const [needsDeploy, setNeedsDeploy] = useState(false);

  useEffect(() => {
    if (data) {
      setProjectName(data.name || '');
      setCompanyName(data.company || '');
      setDeadline((data.deadline) || new Date());
      setTotalPrice(data.totalPrice || '');
      setDescription(data.description || '');
      setNeedsDeploy(data.needsDeploy || false);
    }
  }, [data]);

  const handleSelectDeadline = (event, date) => {
    setDeadline(date);
  }

  if (isLoading) {
    return <Text>Carregando...</Text>;
  };

  const project = {
    name: projectName,
    company: companyName,
    deadline,
    totalPrice,
    description,
    needsDeploy
  };

  return (
    <SafeAreaView className='flex-1 bg-sky-100'>
      <View className='px-12 py-24'>
        <TouchableOpacity className='flex-row mb-7 items-center' onPress={() => router.push('/')}>
          <FontAwesome5 name='arrow-left' size={20} color={colors.sky[800]} />
          <Text className='ml-2 font-semibold text-sky-800'>Voltar</Text>
        </TouchableOpacity>
        <ScrollView>
          <Text className='text-sky-800 text-lg font-semibold'>Editar projeto</Text>
          <Input
            onChangeText={setProjectName}
            value={projectName}
            placeholder="Nome do projeto"
          />
          <Input
            onChangeText={setCompanyName}
            value={companyName}
            placeholder="Nome da empresa"
          />
          <RNDateTimePicker value={new Date(deadline)} onChange={handleSelectDeadline} />
          <Input
            onChangeText={setTotalPrice}
            value={totalPrice?.toString()}
            placeholder="Valor total"
            inputMode='numeric'
            keyboardType='numeric'
          />
          <Input
            onChangeText={setDescription}
            value={description}
            placeholder="Descrição"
            multiline
          />
          <BouncyCheckbox
            size={25}
            fillColor={colors.sky[800]}
            unFillColor={'transparent'}
            isChecked={needsDeploy}
            text="Precisa de deploy?"
            onPress={() => setNeedsDeploy(!needsDeploy)}
          />

          <Button buttonText="Salvar" onPress={handleEditProject} />
          <StatusBar style="auto" />
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};
