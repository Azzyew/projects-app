import { TextInput } from "react-native";
import colors from "tailwindcss/colors";

export const Input = ({ ...rest }) => {
  return (
    <TextInput
      textAlignVertical="top"
      placeholderTextColor={colors.slate[400]}
      className="my-3 h-12 bg-white rounded-md px-4 py-3 text-sm text-sky-800 border border-sky-800"
      {...rest}
    />
  );
}