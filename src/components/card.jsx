import { View, Text, TouchableOpacity } from "react-native";
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import colors from "tailwindcss/colors";
import { Link } from "expo-router";
import { useProjectsQuery } from "../queries/projects";

export const Card = (data) => {
  const { id, name, company, totalPrice, description, deadline, needsDeploy } = data.data;

  const { mutate: removeProject } = useProjectsQuery().removeProject();

  const handleRemoveProject = () => {
    removeProject(id);
  }

  return (
    <View className='mt-4 border border-sky-800 bg-white px-8 py-6 rounded-md w-[80vw]'>
      <View className='flex-row justify-between items-center'>
        <Text className='text-lg font-semibold'>{name}</Text>
        <Text className='text-sky-800 text-lg font-semibold'>
          {new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL',
          }).format(+totalPrice)}
        </Text>
      </View>
      <Text className='text-slate-500'>{company}</Text>

      <Text className='mt-3'>{description}</Text>
      {needsDeploy && <Text className='mt-3 italic'>Precisa de deploy</Text>}

      <Text className='mt-3 font-semibold text-sky-800'>Data de entrega: {new Date(deadline).toLocaleDateString('pt-BR')}</Text>

      <View className='mt-5 flex-row justify-between'>
        <Link href={`/${id}`} asChild>
          <FontAwesome5 name="edit" size={24} color={colors.sky[800]} />
        </Link>

        <TouchableOpacity onPress={handleRemoveProject}>
          <FontAwesome5 name="trash-alt" size={24} color={colors.red[600]} />
        </TouchableOpacity>
      </View>
    </View>
  );
}