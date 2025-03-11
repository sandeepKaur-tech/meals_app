
import { StyleSheet, Text, View } from 'react-native';
import CategoriesScreen from './screens/CategoriesScreen'
import MealsOverviewScreen from './screens/MealsOverviewScreen';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import MealDetailScreen from './screens/MealDetailScreen';
import { createDrawerNavigator } from '@react-navigation/drawer';
import FavoritesScreen from './screens/FavoritesSceen'

const Stack =  createNativeStackNavigator();
const Drawer = createDrawerNavigator();
function drawerNavigator(){
  return <Drawer.Navigator>
    <Drawer.Screen  name="Categories" component={CategoriesScreen}></Drawer.Screen>
    <Drawer.Screen  name="Favorites" component={FavoritesScreen}></Drawer.Screen>
    
  </Drawer.Navigator>
}
export default function App() {

  return (
    <>
    <StatusBar style='dark'/>

        <NavigationContainer>
            <Stack.Navigator screenOptions={{
                 // title: 'All Categories',
                  headerStyle: {backgroundColor:'pink'}
                }}>
                <Stack.Screen name="MealsContainer" 
                component={drawerNavigator}      
                />

                <Stack.Screen name="MealsOverview" component={MealsOverviewScreen}/>
                <Stack.Screen name="MealDetailScreen" component={MealDetailScreen}/>
            </Stack.Navigator>
           
        </NavigationContainer>
     
   </>
  );
}


