
import { StyleSheet, Text, View } from 'react-native';
import CategoriesScreen from './screens/CategoriesScreen'
import MealsOverviewScreen from './screens/MealsOverviewScreen';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack'

const Stack =  createNativeStackNavigator();
export default function App() {

  return (
    <>
    <StatusBar style='dark'/>
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="MealsContainer" component={CategoriesScreen}/>

                <Stack.Screen name="MealsOverview" component={MealsOverviewScreen}/>
            </Stack.Navigator>
           
        </NavigationContainer>
     
   </>
  );
}


