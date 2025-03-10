import { Pressable, View ,Text} from "react-native";


function CategoryGridTile(data){
    console.log(data.title)
return (
<View>
     <Pressable>
    <View>
        <Text>
            {data.title}
        </Text>
    </View>
     </Pressable>
 </View>);
}

export default CategoryGridTile;