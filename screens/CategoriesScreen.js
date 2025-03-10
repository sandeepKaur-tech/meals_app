import { FlatList,Text,StyleSheet } from 'react-native';
import {CATEGORIES} from '../data/dummy-data'
import CategoryGridTile from '../components/CategoryGridTile';

function renderCatergoryItem(itemData){
     return <CategoryGridTile title={itemData.item.title}  color= {itemData.item.color}/>
  
   // return <Text>{itemData.item.title}</Text>
}
const data = ['Apple', 'Banana', 'Cherry', 'Date', 'Elderberry'];
function CategoriesScreen(){
    
return <FlatList
data={CATEGORIES}  
renderItem={renderCatergoryItem} 
keyExtractor={(item) => item.id} 
/>

}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      paddingTop: 50,
    },
    item: {
      padding: 20,
      fontSize: 18,
      borderBottomWidth: 1,
      borderColor: '#ccc',
    },
  });
 export default CategoriesScreen;