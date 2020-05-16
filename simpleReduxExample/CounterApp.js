import React, { Component } from 'react'
import {Text, StyleSheet, View, TextInput, TouchableOpacity} from 'react-native'
import {connect} from 'react-redux'

 class CounterApp extends Component {



// constructor(props){
// super(props)

// }

render(){
    return (
        <View style={styles.container}>
        <View styles={{flexDirection:'row' }}>
   <TouchableOpacity onPress={()=>this.props.increaseCounter()}>
   <Text style={{fontSize:20}}>Increase</Text>
   </TouchableOpacity>
    <Text>{this.props.counter}</Text>
   <TouchableOpacity onPress={()=>this.props.decreaseCounter()}>
   <Text style={{fontSize:20}}>Decrease</Text>
   </TouchableOpacity>
        </View>
      </View>
    );
}
}
function mapStateToProps(state){
    return{
        counter: state.counter
    }
}

function mapDispatchToProps(dispatch){
return{
    increaseCounter : () => dispatch({type:'INCREASE_COUNTER'}),
    decreaseCounter : () => dispatch({type:'DECREASE_COUNTER'})
}
}


export default connect(mapStateToProps,mapDispatchToProps)(CounterApp)
const styles = StyleSheet.create({
    container:{
        flex:1,
        alignContent:'center',
        justifyContent:'center',
        alignItems:'center'
          }
})

