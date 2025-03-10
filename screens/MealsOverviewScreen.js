import { View ,Text} from 'react-native';
import {MEALS} from '../data/dummy-data'

function MealsOverviewScreen({route}){

return (
    <View><Text>Meals overview{route.params.categoryId}</Text></View>
);
}
export default MealsOverviewScreen;