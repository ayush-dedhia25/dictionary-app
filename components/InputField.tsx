import { TextInput, View, type TextInputProps } from 'react-native';

function InputField({ placeholder, value, onChangeText }: TextInputProps) {
	return (
		<View className="border border-gray-400 rounded-md px-4 py-3">
			<TextInput
				placeholder={placeholder || 'Default placeholder'}
				className="font-poppins p-0 tracking-wider text-[15px] leading-1"
				value={value}
				onChangeText={onChangeText}
			/>
		</View>
	);
}

export default InputField;
