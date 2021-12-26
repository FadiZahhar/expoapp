import React from 'react';
import { Text, View } from 'react-native';
import { createStore, combineReducer } from 'react-redux';
import { Provider } from 'react-redux';

import productReducer from './store/reducers/products';

const rootReducer = combineReducers({
  products: productsReducer
});

const store = createStore(rootReducer);

export default function App() {
  return(
    <Provider store={store}>
      <View>

      </View>
    </Provider>
  )
}