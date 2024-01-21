import { useState } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';

import FAButton from '../../components/FAB';
import WordCard from '../../components/WordCard';
import { words } from '../../constants/words';

function HomeScreen() {
	const [activeWord, setActiveWord] = useState<string | 0>(0);

	return (
		<View className="flex-1 bg-white">
			<FlatList
				data={words}
				keyExtractor={(item) => item.id as string}
				contentContainerStyle={styles.wordsContainer}
				renderItem={({ item }) => (
					<WordCard {...item} setActiveWord={setActiveWord} activeWord={activeWord} />
				)}
			/>

			<FAButton
				onPressHandler={() => {
					console.log('FAB was clicked!');
				}}
			/>
		</View>
	);
}

export default HomeScreen;

const styles = StyleSheet.create({
	wordsContainer: {
		flex: 1,
		paddingVertical: 20,
		paddingHorizontal: 12,
		gap: 12,
	},
});
