import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, Text, TextInput, TouchableOpacity } from 'react-native';
import { useProjectsQuery } from '../queries/projects';
import { useState } from 'react';
import DatePicker from 'react-native-date-picker';

export default function HomeScreen() {
  const [projectName, setProjectName] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [deadline, setDeadline] = useState(new Date());
  const [totalPrice, setTotalPrice] = useState();
  const [description, setDescription] = useState('');
  const [needsDeploy, setNeedsDeploy] = useState(false);

  const { createProject } = useProjectsQuery();

  const project = {
    name: projectName,
    company: companyName,
    deadline,
    totalPrice,
    description,
    needsDeploy
  };

  return (
    <SafeAreaView className='flex-1 bg-white items-center justify-center'>
      <Text>Criar novo projeto</Text>
      <TextInput
        onChangeText={setProjectName}
        value={projectName}
        placeholder="Nome do projeto"
      />
      <TextInput
        onChangeText={setCompanyName}
        value={companyName}
        placeholder="Nome da empresa"
      />
      <DatePicker date={deadline} onDateChange={setDeadline} />
      <TextInput
        onChangeText={setTotalPrice}
        value={totalPrice}
        placeholder="Valor total"
        inputMode='numeric'
        keyboardType='numeric'
      />
      <TextInputs
        onChangeText={setDescription}
        value={description}
        placeholder="Descrição"
      />
      <BouncyCheckbox
        size={30}
        fillColor={'#5EBAF7'}
        unFillColor={'transparent'}
        isChecked={needsDeploy}
        text="Precisa de deploy?"
        onPress={() => setNeedsDeploy(!needsDeploy)}
      />

      <TouchableOpacity onPress={createProject(project)}>Criar</TouchableOpacity>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
};
