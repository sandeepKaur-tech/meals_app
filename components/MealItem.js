import { View, Text ,Pressable,Image,StyleSheet} from "react-native";
import { useNavigation } from "@react-navigation/native";

function MealItem({id,title , imageUrl, duration,complexity,affordablitiy}){
const navigation = useNavigation();
function handler(){
    navigation.navigate("MealDetailScreen",{
        mealId:id
    })
}
    return(
        <View style={styles.mealItem}>
            <Pressable onPress={handler}>
                <View>
                    <Image source={{uri:imageUrl}} style={styles.imageStyle}/>
                </View>
            <Text style={styles.titleStyle}>
                {title}
            </Text>
            <View style={styles.details}>
                <Text style={styles.detailItem}>{duration}m</Text>
                <Text style={styles.detailItem}>{complexity.toUpperCase()}</Text>
                <Text style={styles.detailItem}>{affordablitiy.toUpperCase()}</Text>
            </View>
            </Pressable>
        </View>
    )
}

export default MealItem;

const styles = StyleSheet.create({
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