import {StyleSheet} from "react-native"
import {Constants} from "expo";
var styling = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop:Constants.statusBarHeight,
  },
  displayContainer:{
    flex:2,
    backgroundColor: '#193441'
  },
  inputContainer:{
    flex: 8, 
    backgroundColor: '#3E606F',
    alignItems:"center"
  },
  inputButton: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 0.5,
        borderColor: '#91AA9D'
    },

    inputButtonText: {
        fontSize: 22,
        fontWeight: 'bold',
        color: 'white'
    },
    displayText:{
        color:"white",
        fontSize:38,
        fontWeight:"bold",
        textAlign:"right",
        padding:20
    },
   inputRow: {
        flex: 1,
        flexDirection: 'row'
    }
});

export default styling;