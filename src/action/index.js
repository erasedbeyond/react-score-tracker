import { saveState } from "../config/localStorage";

export const ADD_PLAYERS = 'ADD_PLAYERS';
export const ADD_SCORE_PLAYER_ONE = 'ADD_SCORE_PLAYER_ONE';
export const ADD_SCORE_PLAYER_TWO = 'ADD_SCORE_PLAYER_TWO';
export const SHOW_SCORE_BOARD = 'SHOW_SCORE_BOARD';
export const ADD_SAVE_GAME = 'ADD_SAVE_GAME';
export const DELETE_GAME = 'DELETE_GAME';
export const SELECT_GAME = 'SELECT_GAME';
export const REMOVE_GAME = 'REMOVE_GAME';


// to select game for entry page
export function selectGame(value){
    return{
        type:SELECT_GAME,
        value
    }
}

//to remove the game name in entry page
export function removeGame(){
    return{
        type:REMOVE_GAME,
    }
}

export function addPlayers(value){
    return{
        type:ADD_PLAYERS,
        value
    }
}

export function showScoreBoard(value){
    return{
        type:SHOW_SCORE_BOARD,
        value
    }
}

export function addScorePlayerOne(){
    return{
        type:ADD_SCORE_PLAYER_ONE,
    }
}

export function addScorePlayerTwo(){
    return{
        type:ADD_SCORE_PLAYER_TWO,
    }
}

export function handleSavingGame(value){
    return function(dispatch,getState){
        dispatch(saveGame(value));
        dispatch(removeGame())
        dispatch(showScoreBoard(false))
        saveState(getState().gameHistory)
    }
}

// to save game in gameHistory
export function saveGame(value){
    return{
        type:ADD_SAVE_GAME,
        value
    }
}

export function handleDeletingGame(value){
    return function(dispatch,getState){
        dispatch(deleteGame(value));
        saveState(getState().gameHistory)
    }
}

// to delete game form gameHistory
export function deleteGame(value){
    return{
        type:DELETE_GAME,
        value
    }
}

