import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, ScrollView, Text, View } from 'react-native';
import { useProjectsQuery } from '../queries/projects';
import { useState } from 'react';
import DatePicker from 'react-native-date-picker';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import { Input } from '../components/input';
import { Button } from '../components/button';
import colors from "tailwindcss/colors";

export default function CreateProject() {
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
    <SafeAreaView className='flex-1 bg-sky-100'>
      <View className='px-12 py-24'>
        <ScrollView>
          <Text className='text-sky-800 text-lg font-semibold'>Criar novo projeto</Text>
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
          <DatePicker date={deadline} onDateChange={setDeadline} />
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

          <Button buttonText="Criar" onPress={() => createProject(project)} />
          <StatusBar style="auto" />
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};
