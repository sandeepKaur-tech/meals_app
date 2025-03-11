import { View ,Text,Image,StyleSheet} from "react-native";
import { MEALS } from "../data/dummy-data";


function MealDetailScreen({route}){
  const mealId= route.params.mealId
  
  const selectedMeals= MEALS.find((i)=>i.id==mealId)
  
  
  console.log(selectedMeals.imageUrl+"k")
    return (<View style={{backgroundColor:'pink', height:'100%'}}>
        <Image style={styles.imageStyle} source={{uri:selectedMeals.imageUrl}}/>
        <Text>{selectedMeals.title}</Text>
        <View style={styles.details}>
                <Text style={styles.detailItem}>{selectedMeals.duration}m</Text>
                <Text style={styles.detailItem}>{selectedMeals.complexity.toUpperCase()}</Text>
                <Text style={styles.detailItem}>{selectedMeals.affordability.toUpperCase()}</Text>
             
        </View>
        <View style={styles.listdetails}>
                <Text style={{fontWeight:'600',fontSize:25}}>Ingredients :  </Text>
                {selectedMeals.ingredients.map((item, index)=> <Text key={index}>{`${index + 1}. ${item}`}</Text>
                )}    
                 <Text style={{fontWeight:'600',fontSize:25}}>Steps :  </Text>
                 {selectedMeals.steps.map((item, index)=> <Text key={index}>{`${index + 1}. ${item}`}</Text>)}
               
                 </View>
    </View>)

}
const styles = StyleSheet.create({
    listdetails:{
        marginLeft:10
    },
    imageStyle:
    {
        width:'100%' ,
        height:200,
    },
    titleStyle:{
        fontWeight:'bold',
        textAlign:'center',
        fontSize:20,
        margin:8
    },
    mealItem:{
        margin:18,
        borderRadius:8,
        overflow:'hidden',
        backgroundColor:'white'
    },
    details:
    {
        backgroundColor:'pink',
        flexDirection:'row',
        alignItems:'center',
        padding:8,
        justifyContent:'center'
    },
    detailItem:{
        marginHorizontal:4,
        fontSize:12
    }
})
export default MealDetailScreen;