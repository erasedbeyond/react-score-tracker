import { combineReducers } from "redux";
import{ ADD_PLAYERS,
        ADD_SCORE_PLAYER_ONE,
        ADD_SCORE_PLAYER_TWO,
        SHOW_SCORE_BOARD,
        ADD_SAVE_GAME,
        DELETE_GAME,
        SELECT_GAME,
        REMOVE_GAME

    } from "../action";


//player reducer
const initialPlayerState = {
    playerOne:{
        name:'',
        score:0
    },
    playerTwo:{
        name:'',
        score:0
    },
    game:'',
    showScoreBoard:false,
   
}
export function players(state=initialPlayerState,action){
    switch(action.type){
        case SELECT_GAME:
            return{
                ...state,
                game:action.value
            }
        case REMOVE_GAME:
            return{
                ...state,
                game:''
            }
        case ADD_PLAYERS:
            return {
                ...state,
                playerOne :{
                    name:action.value[0],
                    score:0
                },
                playerTwo:{
                    name:action.value[1],
                    score:0
                }
            }
        case SHOW_SCORE_BOARD:
            return{
                ...state,
                showScoreBoard:action.value
            }
        case ADD_SCORE_PLAYER_ONE:
            return{
                ...state,
                playerOne :{
                    ...state.playerOne,
                    score:++state.playerOne.score
                }
            }
        case ADD_SCORE_PLAYER_TWO:
            return{
                ...state,
                playerTwo :{
                    ...state.playerTwo,
                    score:++state.playerTwo.score
                }
            }
        default:
            return state
    }
}


//gameHistory reducer

export function gameHistory(state=[],action){
    switch(action.type){
        case ADD_SAVE_GAME:
            return [
                ...state,
                action.value
            ]
        case DELETE_GAME:
            return state.filter(game=>game.date !== action.value)
        default:
            return state
    }
}

//combining reducer
export default combineReducers({
    players,
    gameHistory
})