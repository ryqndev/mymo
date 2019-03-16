import {combineReducers} from 'redux';
import SelectionReducer from './selection';
import SocialsReducer from './socials';

const allReducers = combineReducers({
    selection: SelectionReducer,
    socials: SocialsReducer
});

export default allReducers;