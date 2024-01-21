import uuid from 'react-native-uuid';

export const words = [
	{
		id: uuid.v4(),
		word: 'Stroll',
		meaning: 'Walking in a free time.',
		examples: [],
	},
	{
		id: uuid.v4(),
		word: 'Leisure',
		meaning: 'Free time.',
		examples: [],
	},
	{
		id: uuid.v4(),
		word: 'Oasis',
		meaning: 'Place in dessert where water is found and where plants grow.',
		examples: [],
	},
	{
		id: uuid.v4(),
		word: 'Dilemma',
		meaning: 'Difficult situation where you have to choose between this or that.',
		examples: ["I don't want a dilemma of picking food", 'What kind of a dilemma is this?'],
	},
];
