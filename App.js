import { StatusBar } from 'expo-status-bar';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { HomeScreen, PhotoScreen, AboutScreen, Photodetails, SearchScreen } from './screens';
import { NavigationTabs } from './navigation';
import { SafeAreaProvider } from 'react-native-safe-area-context';

const Stack = createStackNavigator();
export default function App() {
  return (
    <SafeAreaProvider>
          <NavigationContainer>
      <StatusBar style="auto" />
      <Stack.Navigator  >
         <Stack.Screen
          name="NavigationTabs"
          component={NavigationTabs}
          options={{ headerShown: false, }}
           />
        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
        
          
          
       />
        <Stack.Screen
          name="AboutScreen"
          component={AboutScreen}
          
           />
         <Stack.Screen
          name="PhotoScreen"
          component={PhotoScreen} 
        
        />
        <Stack.Screen
          name="Photodetails"
          component={Photodetails}
          options={{ headerShown: false, }}
         
 />
        <Stack.Screen
          name="SearchScreen"
          component={SearchScreen}
           
 />
          

      </Stack.Navigator>
    </NavigationContainer>
    </SafeAreaProvider>

  );
}


