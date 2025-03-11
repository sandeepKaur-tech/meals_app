import { View ,Text,FlatList} from 'react-native';
import { useEffect } from 'react';
import {MEALS, CATEGORIES} from '../data/dummy-data'
import MealItem from '../components/MealItem';

function MealsOverviewScreen({route , navigation}){
const catId=route.params.categoryId;

const displayMeals = MEALS.filter((meal)=>
{
    return (meal.categoryIds.indexOf(catId)>=0)

})

useEffect(()=>
{
    const catTitle= CATEGORIES.find((category)=>category.id ===catId).title;
    navigation.setOptions({
        title:catTitle
    })
},[catId,navigation]

)

function renderMealItem(itemData){

    return <MealItem 
                    id={itemData.item.id}
                    title={itemData.item.title}
                     imageUrl={itemData.item.imageUrl}
                     duration = {itemData.item.duration}
                     complexity={itemData.item.complexity}
                     affordablitiy={itemData.item.affordability}
                
                     />
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