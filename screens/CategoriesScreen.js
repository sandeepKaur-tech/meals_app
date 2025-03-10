import { FlatList,Text,StyleSheet } from 'react-native';
import {CATEGORIES} from '../data/dummy-data'
import CategoryGridTile from '../components/CategoryGridTile';

function renderCatergoryItem(itemData){
     return <CategoryGridTile title={itemData.item.title}  color= {itemData.item.color}/>
  

}

function CategoriesScreen(){
    
return <FlatList
data={CATEGORIES}  
renderItem={renderCatergoryItem} 
keyExtractor={(item) => item.id} 
numColumns={2}
/>

}

 export default CategoriesScreen;