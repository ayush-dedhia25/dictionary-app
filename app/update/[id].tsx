import { useLocalSearchParams } from 'expo-router';
import { View } from 'react-native';

import WordForm from '../../components/WordForm';

const UpdateWord = () => {
	const { id } = useLocalSearchParams();

	return (
		<View className="flex-1 px-4 bg-white">
			<WordForm type="UPDATE" id={id as string} />
		</View>
	);
};

export default UpdateWord;
