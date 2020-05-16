import React, { Component } from 'react';
import {
  StyleSheet,

} from 'react-native';
import CounterApp from './CounterApp';
import {createStore} from 'redux'
import {Provider} from 'react-redux'

const initialState = {
  counter : 0
}

const reducer = (state = initialState, action) => {
  switch (action.type)
  {
    case 'INCREASE_COUNTER':
      return { counter : state.counter + 1}
    case 'DECREASE_COUNTER' :
      return {counter : state.counter - 1}
  }
 return state
}

const store = createStore(reducer)

// class App extends Component {
//   render () {
//     return(  )
//   }
// }

const App: () => React$Node = () => {
  return (
    <Provider store={store}>
    <CounterApp></CounterApp>
    </Provider>
  );
};

const styles = StyleSheet.create({
  container:{
flex:1,
alignContent:'center',
justifyContent:'center',
alignItems:'center'
  }
});

export default App;
