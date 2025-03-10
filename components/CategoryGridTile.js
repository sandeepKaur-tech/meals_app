import { Pressable, StyleSheet,View ,Text} from "react-native";


function CategoryGridTile({title,color, onPress}){
   
return (
<View style={[styles.displayGrid,{backgroundColor:color}]}>
     <Pressable android_ripple={{color:'#ccc'}} style={({pressed})=>[styles.button, pressed? styles.buttonPressed:null]} onPress={onPress}>
    <View style={styles.innerContainer}>
        <Text>
            {title}
        </Text>
    </View>
     </Pressable>
 </View>);
}
const styles = StyleSheet.create({
  displayGrid:{
   flex:1,
   margin:16,
   height:150,
   borderRadius:8,
   elevation:4,
   backgroundColor:'white',
   shadowColor:'black',
   shadowOpacity:0.25,
  },
  button:{
    flex:1
  },
  buttonPressed:{
   opacity:0.2,
  },
  innerContainer:{
    flex:1,
    padding:16,
    alignItems:'center',
    justifyContent:'center'
  }
  });
  

export default CategoryGridTile;