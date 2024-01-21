import { BlurView } from 'expo-blur';
import { Link } from 'expo-router';
import { useState } from 'react';
import {
	Image,
	ImageBackground,
	StyleSheet,
	Text,
	TextInput,
	TouchableOpacity,
	View,
} from 'react-native';

function LoginScreen() {
	const [formData, setFormData] = useState({ email: '', password: '' });

	const handleSubmit = () => {
		const { email, password } = formData;

		if (!email || !password) return;

		// Do something with the form data here...
	};

	return (
		<ImageBackground
			source={require('../../assets/images/auth-bg.png')}
			className="flex-1 justify-center items-center gap-5"
		>
			<View className="w-[250px] h-[250px]">
				<Image
					source={require('../../assets/images/login.png')}
					resizeMode="contain"
					className="w-full h-full"
				/>
			</View>

			<View className="items-center gap-2">
				<Text className="font-poppins-bold text-4xl">Login</Text>
				<Text className="font-poppins text-[15px]">Welcome back! Hope you were doing well</Text>
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

				<TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
					<Text className="font-poppins-medium text-lg text-center text-white">Submit</Text>
				</TouchableOpacity>

				<View className="flex-row justify-center items-center gap-1">
					<Text className="font-poppins text-[15px]">Don't have an account?</Text>
					<Link href="/auth/signup" style={styles.link}>
						Create.
					</Link>
				</View>
			</BlurView>
		</ImageBackground>
	);
}

export default LoginScreen;

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
