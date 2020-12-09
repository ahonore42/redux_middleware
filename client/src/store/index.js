import { createStore, combineReducers, applyMiddleware } from 'redux'
import DepartmentReducer from './reducers/DepartmentReducer'
import ProductReducer from './reducers/ProductReducer';
import thunk from 'redux-thunk';

const store = createStore(
  combineReducers({
    departmentState: DepartmentReducer,
    productState: ProductReducer
  }),
  applyMiddleware(thunk)
);

export default store;
