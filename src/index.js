import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App';
import logger from 'redux-logger';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';


/* state = {
    currentPitcher: 'Maud Nelson',
    currentCatcher: 'Elston Howard',
    pitcherList: ['Maud Nelson', 'Ila Borders', 'Don Newcombe', 'CC Sabathia'],
    catcherList: ['Roy Campanella', 'Elston Howard', 'Kenji Jojima'],
    newPitcher: '',
    newCatcher: '',
  } */

const addPitcher = (state=[
        'Maud Nelson', 
        'Ila Borders', 
        'Don Newcombe', 
        'CC Sabathia'], action) => {
            if(action.type === 'ADD_PITCHER'){
                console.log('added pitcher', action.payload);
                return [...state, action.payload];
            }
            return state;
}

const addCatcher = (state=[
    'Roy Campanella', 
    'Elston Howard', 
    'Kenji Jojima'], action) => {
        if(action.type === 'ADD_CATCHER'){
            console.log('added catcher', action.payload);
            return [...state, action.payload];
        }
        return state;

}

const selectPitcher = (state= 'Maud Nelson', action) => {
    if(action.type === 'SELECT_PITCHER'){
        console.log('selecting pitcher', action.payload);
        return [action.payload];
        
    }
    return state;
}

const storeInstance = createStore(
    combineReducers(
   {     addPitcher,
        addCatcher,
        selectPitcher,
    }
    ),
    applyMiddleware(logger)
);

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, document.getElementById('root'));
