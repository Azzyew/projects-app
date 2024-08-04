import { View, Text, TouchableOpacity } from "react-native";
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import colors from "tailwindcss/colors";
import { Link } from "expo-router";
import { useProjectsQuery } from "../queries/projects";

export const Card = ({ id, projectName, companyName, totalPrice, description, deadline, needsDeploy }) => {
  const { removeProject } = useProjectsQuery();

  return (
    <View className='mt-4 border border-sky-800 bg-white px-8 py-6 rounded-md w-[80vw]'>
      <View className='flex-row justify-between items-center'>
        <Text className='text-lg font-semibold'>{projectName}</Text>
        <Text className='text-sky-800 text-lg font-semibold'>R$ {totalPrice}</Text>
      </View>
      <Text className='text-slate-500'>{companyName}</Text>

      <Text className='mt-3'>{description}</Text>
      {needsDeploy && <Text className='mt-3'>Precisa de deploy</Text>}

      <Text className='mt-3 font-semibold text-sky-800'>Data de entrega: {deadline}</Text>

      <View className='mt-5 flex-row justify-between'>
        <Link href={`/${id}`} asChild>
          <FontAwesome5 name="edit" size={24} color={colors.sky[800]} />
        </Link>

        <TouchableOpacity onPress={() => removeProject(id)}>
          <FontAwesome5 name="trash-alt" size={24} color={colors.red[600]} />
        </TouchableOpacity>
      </View>
    </View>
  );
}