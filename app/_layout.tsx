import { useFonts } from 'expo-font';
import { SplashScreen, Stack } from 'expo-router';
import { useEffect } from 'react';

import '../global.css';

export { ErrorBoundary } from 'expo-router';

export const unstable_settings = {
	// Ensure that reloading on `/modal` keeps a back button present.
	initialRouteName: 'index',
};

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
	const [loaded, error] = useFonts({
		SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
		Poppins: require('../assets/fonts/Poppins/Poppins-Regular.ttf'),
		PoppinsItalic: require('../assets/fonts/Poppins/Poppins-Italic.ttf'),
		PoppinsMedium: require('../assets/fonts/Poppins/Poppins-Medium.ttf'),
		PoppinsMediumItalic: require('../assets/fonts/Poppins/Poppins-MediumItalic.ttf'),
		PoppinsBold: require('../assets/fonts/Poppins/Poppins-Bold.ttf'),
		PoppinsSemiBold: require('../assets/fonts/Poppins/Poppins-SemiBold.ttf'),
		PoppinsSemiBoldItalic: require('../assets/fonts/Poppins/Poppins-SemiBoldItalic.ttf'),
	});

	// Expo Router uses Error Boundaries to catch errors in the navigation tree.
	useEffect(() => {
		if (error) throw error;
	}, [error]);

	useEffect(() => {
		if (loaded) {
			SplashScreen.hideAsync();
		}
	}, [loaded]);

	if (!loaded) {
		return null;
	}

	return <RootLayoutNav />;
}

function RootLayoutNav() {
	return (
		<Stack>
			<Stack.Screen
				name="(root)/index"
				options={{ headerShown: false }}
			/>
			<Stack.Screen
				name="(root)/home"
				options={{
					title: 'Home',
					headerTitleStyle: { color: 'white', fontFamily: 'PoppinsMedium' },
					headerLeft: () => '',
					headerStyle: { backgroundColor: '#14B8A6' },
				}}
			/>
			<Stack.Screen
				name="(root)/create"
				options={{
					title: 'Add a Word',
					headerTitleStyle: { color: 'white', fontFamily: 'PoppinsMedium' },
					headerStyle: { backgroundColor: '#14B8A6' },
					headerTintColor: '#FFFFFF',
				}}
			/>
			<Stack.Screen
				name="update/[id]"
				options={{
					title: 'Update a Word',
					headerTitleStyle: { color: 'white', fontFamily: 'PoppinsMedium' },
					headerStyle: { backgroundColor: '#14B8A6' },
					headerTintColor: '#FFFFFF',
				}}
			/>

			<Stack.Screen
				name="auth/login"
				options={{ headerShown: false }}
			/>
			<Stack.Screen
				name="auth/signup"
				options={{ headerShown: false }}
			/>
		</Stack>
	);
}
