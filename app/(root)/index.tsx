import { Link } from 'expo-router';
import React from 'react';
import { Image, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

function RootScreen() {
	return (
		<ImageBackground
			style={styles.container}
			resizeMode="cover"
			source={require('../../assets/images/gradient.png')}
		>
			<Image
				source={require('../../assets/images/book.png')}
				resizeMode="contain"
				width={300}
				height={300}
			/>
			<View style={{ alignItems: 'center', marginTop: -15 }}>
				<Text style={{ fontSize: 48, fontFamily: 'SpaceMono' }}>I Read</Text>
				<Text style={{ fontSize: 20, fontFamily: 'SpaceMono', color: '#334155' }}>
					Learn. Teach. Create
				</Text>
			</View>

			<Link
				href="/auth/signup"
				asChild
			>
				<TouchableOpacity style={styles.getStartedButton}>
					<Text style={styles.getStartedButtonText}>Get Started</Text>
				</TouchableOpacity>
			</Link>
		</ImageBackground>
	);
}

export default RootScreen;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
	getStartedButton: {
		width: '90%',
		marginTop: 30,
		paddingVertical: 15,
		alignItems: 'center',
		shadowColor: '#fff',
		shadowOffset: {
			width: 0,
			height: 2,
		},
		shadowOpacity: 0.2,
		shadowRadius: 3.84,
		elevation: 5,
		backgroundColor: 'white',
		borderRadius: 8,
	},
	getStartedButtonText: {
		fontSize: 16,
		fontFamily: 'SpaceMono',
	},
});
