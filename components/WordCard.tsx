import { Link } from 'expo-router';
import { ChevronDownIcon, PencilIcon, TrashIcon } from 'lucide-react-native';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

type WordState = string | 0;

type WordCardProps = {
	id: string | number[];
	word: string;
	meaning: string;
	examples: string[];
	activeWord: WordState;
	setActiveWord: React.Dispatch<React.SetStateAction<WordState>>;
};

function WordCard({ id, word, meaning, examples, activeWord, setActiveWord }: WordCardProps) {
	return (
		<View style={styles.container}>
			<View style={styles.wordContainer}>
				<Text style={styles.word}>{word}</Text>

				{/* Dropdown button */}
				<TouchableOpacity style={styles.dropDownButton} onPress={() => setActiveWord(id as string)}>
					<ChevronDownIcon
						size={20}
						color="#0D9488"
						style={activeWord === id && { transform: [{ rotate: '180deg' }] }}
					/>
				</TouchableOpacity>
			</View>

			<Text style={styles.meaning}>{meaning}</Text>

			{activeWord === id && (
				<View style={[styles.collapsedView]}>
					{examples && examples.length > 0 ? (
						<View style={styles.examples}>
							<Text style={styles.examplesHeading}>Examples</Text>

							{/* Example Items */}
							<View className="gap-1">
								{examples.map((example, index) => (
									<Text key={`list-item-${index}`} style={styles.example}>
										{'\u00B7'} {example}
									</Text>
								))}
							</View>
						</View>
					) : (
						// Fallback text if there are no examples found
						<View style={styles.examples}>
							<Text style={styles.fallbackExamplesHeading}>No Examples Found {':('}</Text>
						</View>
					)}

					{/* Word actions */}
					<View style={styles.actions}>
						{/* Edit Word Button */}
						<Link href={`/update/${id}`} asChild>
							<TouchableOpacity
								style={[styles.actionButton, { backgroundColor: 'hsl(175, 85%, 75%)' }]}>
								<PencilIcon size={15} color="hsl(175, 80%, 30%)" />
								<Text style={[{ color: 'hsl(175, 80%, 30%)' }, styles.actionButtonText]}>Edit</Text>
							</TouchableOpacity>
						</Link>

						{/* Delete Word Button */}
						<TouchableOpacity
							style={[styles.actionButton, { backgroundColor: 'hsl(0, 85%, 92%)' }]}>
							<TrashIcon size={15} color="hsl(0, 85%, 50%)" />
							<Text style={[{ color: 'hsl(0, 85%, 50%)' }, styles.actionButtonText]}>Delete</Text>
						</TouchableOpacity>
					</View>
				</View>
			)}
		</View>
	);
}

export default WordCard;

const styles = StyleSheet.create({
	container: {
		padding: 14,
		gap: 15,
		borderWidth: 1,
		borderColor: '#19E5D6',
		backgroundColor: '#E7FDFA',
		borderRadius: 8,
	},
	wordContainer: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
	},
	word: {
		color: '#14B8A6',
		fontSize: 18,
		fontFamily: 'PoppinsMedium',
	},
	dropDownButton: {
		padding: 2,
		backgroundColor: '#B8F9E9',
		borderRadius: 4,
	},
	meaning: {
		fontSize: 15,
		fontFamily: 'Poppins',
	},
	collapsedView: {},
	examples: {
		gap: 5,
		paddingVertical: 15,
		borderTopWidth: 1,
		borderBottomWidth: 1,
		borderColor: '#5EEAD4',
	},
	examplesHeading: {
		fontSize: 16,
		fontWeight: '600',
		color: '#0D9488',
		fontFamily: 'PoppinsMedium',
	},
	fallbackExamplesHeading: {
		marginTop: 5,
		color: 'hsl(175, 80%, 30%)',
		fontSize: 14,
		fontFamily: 'PoppinsItalic',
	},
	example: {
		color: '#0F766E',
		fontSize: 15,
		fontFamily: 'Poppins',
	},
	actions: {
		marginTop: 15,
		flexDirection: 'row',
		justifyContent: 'flex-end',
		alignItems: 'center',
		gap: 10,
	},
	actionButton: {
		paddingVertical: 8,
		paddingHorizontal: 10,
		flexDirection: 'row',
		alignItems: 'center',
		gap: 5,
		borderRadius: 6,
	},
	actionButtonText: {
		marginTop: 5,
		fontFamily: 'Poppins',
		lineHeight: 16,
	},
});
