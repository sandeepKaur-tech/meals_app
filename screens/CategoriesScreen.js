import { FlatList,Text,StyleSheet } from 'react-native';
import {CATEGORIES} from '../data/dummy-data'
import CategoryGridTile from '../components/CategoryGridTile';


function CategoriesScreen({navigation}){
    
    function renderCatergoryItem(itemData){
         function onPressHandler(){
          navigation.navigate('MealsOverview',{
            categoryId:itemData.item.id
          })
         }
  return <CategoryGridTile title={itemData.item.title}  color= {itemData.item.color} onPress={onPressHandler}/>
}
  return <FlatList
  data={CATEGORIES}  
  renderItem={renderCatergoryItem} 
  keyExtractor={(item) => item.id} 
  numColumns={2}
  />

}

 export default CategoriesScreen;