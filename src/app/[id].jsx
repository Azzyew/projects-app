import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, ScrollView, Text, View } from 'react-native';
import { useLocalSearchParams } from 'expo-router';
import { useEffect, useState } from 'react';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import colors from "tailwindcss/colors";
import { Input } from '../components/input';
import { Button } from '../components/button';
import { useProjectsQuery } from '../queries/projects';
import RNDateTimePicker from '@react-native-community/datetimepicker';

export default function EditProject() {
  const { id } = useLocalSearchParams();
  const { getProjectById, editProject } = useProjectsQuery();

  useEffect(() => {
    getProjectById(id);
  }, [])

  const [projectName, setProjectName] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [deadline, setDeadline] = useState(new Date());
  const [totalPrice, setTotalPrice] = useState();
  const [description, setDescription] = useState('');
  const [needsDeploy, setNeedsDeploy] = useState(false);

  const { data, isLoading } = getProjectById(id);

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
          <RNDateTimePicker value={deadline} onChange={setDeadline} />
          <Input
            onChangeText={setTotalPrice}
            value={totalPrice}
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

          <Button buttonText="Salvar" onPress={() => editProject(project)} />
          <StatusBar style="auto" />
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};
