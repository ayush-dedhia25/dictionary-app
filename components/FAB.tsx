import { Link } from 'expo-router';
import { PlusIcon } from 'lucide-react-native';
import { TouchableOpacity, View } from 'react-native';

type FABProps = { onPressHandler?: () => void };

function FAButton({ onPressHandler }: FABProps) {
	return (
		<View className="absolute right-5 bottom-[30px] p-[15px] mr-5 shadow-md shadow-black rounded-full bg-[#14B8A6]">
			<Link href={`/(root)/create`} asChild>
				<TouchableOpacity onPress={onPressHandler}>
					<PlusIcon size={30} color={'white'} />
				</TouchableOpacity>
			</Link>
		</View>
	);
}

export default FAButton;
