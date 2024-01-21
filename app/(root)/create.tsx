import { View } from 'react-native';

import WordForm from '../../components/WordForm';

function CreateWord() {
	return (
		<View className="flex-1 px-4 bg-white">
			<WordForm type="NEW" />
		</View>
	);
}

export default CreateWord;
