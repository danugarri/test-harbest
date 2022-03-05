import {createStore,combineReducers} from 'redux';
import { selectionReducer } from '../reducers/selectionReducer';


// aquí podremos meter todos los reducers que queramos
const reducers= combineReducers(
    {
        productSelected: selectionReducer,
       
    }
)
export const store = createStore(
    reducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);