import {combineReducers} from 'redux';
import SelectionReducer from './selection';
import PlanReducer from './plan';
import SocialsReducer from './socials';

const allReducers = combineReducers({
    selection: SelectionReducer,
    plan: PlanReducer,
    socials: SocialsReducer
});

export default allReducers;