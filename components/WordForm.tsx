import { useNavigation } from 'expo-router';
import { useCallback, useEffect, useState } from 'react';
import { ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import uuid from 'react-native-uuid';

import { words } from '../constants/words';
import InputField from './InputField';

type WordFormProps = { type: 'NEW' } | { type: 'UPDATE'; id: string };

function WordForm(props: WordFormProps) {
	const [word, setWord] = useState('');
	const [meaning, setMeaning] = useState('');
	const [examples, setExamples] = useState<{ id: string; value: string }[]>([]);

	const navigation = useNavigation();

	useEffect(() => {
		if (props.type === 'UPDATE' && props.id) {
			const localWord = words.find((w) => w.id === props.id);

			setWord(localWord?.word ?? '');
			setMeaning(localWord?.meaning ?? '');
			setExamples(localWord?.examples.map((w) => ({ id: uuid.v4().toString(), value: w })) || []);
		}
	}, [props.type === 'UPDATE' && props.id]);

	const addExample = useCallback(
		(exampleItem: string) => {
			setExamples((prevExamples) => [
				...prevExamples,
				{ id: uuid.v4().toString(), value: exampleItem },
			]);
		},
		[setExamples]
	);

	const handleTextChange = (id: string, text: string) => {
		setExamples((prevExamples) => {
			return prevExamples.map((e) => (e.id === id ? { ...e, value: text } : e));
		});
	};

	const handleWordFormSubmit = () => {
		console.log({ word, meaning, examples });

		// if (navigation.canGoBack()) {
		// 	navigation.goBack();
		// }
	};

	return (
		<ScrollView>
			<View className="gap-6 py-5">
				<View className="gap-3">
					<Text className="text-[#14B8A6] text-[20px] font-poppins-medium">Word</Text>
					<View className="gap-3">
						<InputField placeholder="Word" value={word} onChangeText={(text) => setWord(text)} />
						<InputField
							placeholder="Meaning"
							value={meaning}
							onChangeText={(text) => setMeaning(text)}
						/>
					</View>
				</View>

				<View className="gap-4">
					<View className="flex-row justify-between items-center">
						<Text className="text-[#14B8A6] text-[20px] font-poppins-medium">Examples</Text>
						<TouchableOpacity style={styles.addButton} onPress={() => addExample('')}>
							<Text className="text-[15px] font-poppins text-[#334155]">Add</Text>
						</TouchableOpacity>
					</View>

					{/* Render Examples */}
					<View className="gap-3">
						{examples.length > 0 ? (
							examples.map((example, index) => (
								<View key={example.id} className="p-3 rounded-md border border-[#C9D6E8]">
									<TextInput
										placeholder={`Example - ${index + 1}`}
										value={example.value}
										className="text-[15px] font-poppins placeholder:text-[#A3B0C2]"
										onChangeText={(text) => handleTextChange(example.id, text)}
									/>
								</View>
							))
						) : (
							<Text className="font-poppins text-gray-400 text-md mt-2">
								{props.type === 'NEW'
									? 'Give some examples for the word'
									: 'There are no examples set for this word. Why not you add them here?'}
							</Text>
						)}
					</View>
				</View>

				<TouchableOpacity style={styles.submitButton} onPress={handleWordFormSubmit}>
					<Text className="font-poppins-medium text-center text-[#085E57]">Update</Text>
				</TouchableOpacity>
			</View>
		</ScrollView>
	);
}

export default WordForm;

const styles = StyleSheet.create({
	addButton: {
		backgroundColor: '#B8F9EF',
		paddingVertical: 5,
		paddingHorizontal: 15,
		borderRadius: 8,
		shadowColor: '#085E57',
		elevation: 2,
	},
	submitButton: {
		paddingVertical: 15,
		backgroundColor: '#71F4E8',
		borderRadius: 8,
		shadowColor: '#085E57',
		elevation: 3,
	},
});
