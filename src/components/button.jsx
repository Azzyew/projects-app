import { TouchableOpacity, Text } from "react-native";

export const Button = ({ buttonText, ...rest }) => {
  return (
    <TouchableOpacity
      className='mt-3 h-10 bg-sky-800 rounded-md items-center justify-center px-4'
      activeOpacity={0.5}
      {...rest}
    >
      <Text className='text-white font-bold'>{buttonText}</Text>
    </TouchableOpacity>
  );
}