import { useFonts } from 'expo-font';
import { StatusBar } from 'react-native';
import Text from './src/components/text/text';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './src/screens/home';
import Details from './src/screens/details';


const Stack = createNativeStackNavigator();

export default function App() {
  const [loaded] = useFonts({
    'Antonio-Medium': require('./assets/fonts/Antonio-Medium.ttf'),
    'Spartan-Bold': require('./assets/fonts/Spartan-Bold.ttf'),
    'Spartan-Regular': require('./assets/fonts/Spartan-Regular.ttf')
  })

  if (!loaded) {
    return (
      <Text>Font is loading...</Text>
    )
  }

  return (
    <>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Details" component={Details} />
        </Stack.Navigator>
      </NavigationContainer>
      <StatusBar style="light" />
    </>
  );
}
