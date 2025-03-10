import { View ,Text,FlatList} from 'react-native';
import {MEALS} from '../data/dummy-data'
import MealItem from '../components/MealItem';

function MealsOverviewScreen({route}){
const catId=route.params.categoryId;

const displayMeals = MEALS.filter((meal)=>
{
    return (meal.categoryIds.indexOf(catId)>=0)
})
function renderMealItem(itemData){
    return <MealItem title={itemData.item.title}
                     imageUrl={itemData.item.imageUrl}
                     duration = {itemData.item.duration}
                     complexity={itemData.item.complexity}
                     affordablitiy={itemData.item.affordability}/>
}

return (
    <View>
        <FlatList
        data = {displayMeals}
        renderItem={renderMealItem}
        keyExtractor={(meal)=>meal.id}
        />
    </View>
);
}
export default MealsOverviewScreen;