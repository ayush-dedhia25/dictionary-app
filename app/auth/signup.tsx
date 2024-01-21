import { BlurView } from 'expo-blur';
import { Link } from 'expo-router';
import { useState } from 'react';
import { ImageBackground, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

function SigninScreen() {
	const [formData, setFormData] = useState({ email: '', password: '', confirmPassword: '' });

	const handleSubmit = () => {
		const { email, password, confirmPassword } = formData;

		if (!email || !password || !confirmPassword) return;

		if (password !== confirmPassword) return;

		// Do something with the form data here...
	};

	return (
		<ImageBackground
			source={require('../../assets/images/auth-bg.png')}
			className="flex-1 justify-center items-center gap-5 px-4"
		>
			<View className="items-center gap-2">
				<Text className="font-poppins-bold text-4xl">Create Account</Text>
				<Text className="font-poppins text-center">
					Is always a great thing to take first steps towards your goals
				</Text>
			</View>

			<BlurView style={styles.blurView}>
				<View className="gap-2">
					<Text className="font-poppins-medium text-[15px]">Email Address</Text>
					<View className="border px-4 py-3 rounded-lg">
						<TextInput
							keyboardType="email-address"
							placeholder="Email"
							className="font-poppins text-[15px]"
							cursorColor={'black'}
							value={formData.email}
							onChangeText={(text) => setFormData((prev) => ({ ...prev, email: text }))}
						/>
					</View>
				</View>

				<View className="gap-2">
					<Text className="font-poppins-medium text-[15px]">Password</Text>
					<View className="border px-4 py-3 rounded-lg">
						<TextInput
							secureTextEntry={true}
							placeholder="Input password"
							className="font-poppins text-[15px]"
							cursorColor={'black'}
							value={formData.password}
							onChangeText={(text) => setFormData((prev) => ({ ...prev, password: text }))}
						/>
					</View>
				</View>

				<View className="gap-2">
					<Text className="font-poppins-medium text-[15px]">Confirm Password</Text>
					<View className="border px-4 py-3 rounded-lg">
						<TextInput
							secureTextEntry={true}
							placeholder="Re-enter the password"
							className="font-poppins text-[15px]"
							cursorColor={'black'}
							value={formData.confirmPassword}
							onChangeText={(text) => setFormData((prev) => ({ ...prev, confirmPassword: text }))}
						/>
					</View>
				</View>

				<TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
					<Text className="font-poppins-medium text-lg text-center text-white">Submit</Text>
				</TouchableOpacity>

				<View className="flex-row justify-center items-center gap-1">
					<Text className="font-poppins text-[15px]">Already have an account?</Text>
					<Link href="/auth/login" style={styles.link}>
						Login.
					</Link>
				</View>
			</BlurView>
		</ImageBackground>
	);
}

export default SigninScreen;

const styles = StyleSheet.create({
	blurView: {
		width: '100%',
		paddingVertical: 20,
		paddingHorizontal: 15,
		gap: 20,
	},
	submitButton: {
		paddingVertical: 14,
		backgroundColor: '#EB4798',
		borderRadius: 6,
		shadowColor: 'rgba(235, 71, 152, 0.35)',
		elevation: 2,
	},
	link: {
		color: 'white',
		fontSize: 15,
		fontFamily: 'PoppinsItalic',
		borderBottomColor: 'white',
		borderBottomWidth: 1,
	},
});
