
import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './src/reducers';
import ReduxThunk from 'redux-thunk';
import AppNavigator from './src/navigation/AppNavigator'
import { YellowBox } from 'react-native';


export default class App extends Component {
  
  componentWillMount() {
    YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated']); // https://github.com/react-navigation/react-navigation/issues/3956
  }

  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
    return (
      <Provider store={store} >
          <AppNavigator/>
      </Provider>
    );
  }
}