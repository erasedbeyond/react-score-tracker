import { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import { addPlayers, removeGame, selectGame, showScoreBoard } from "../action";

import '../css/EnterPlayer.css'


//custom hooks usePlayer to use Alert or setPlayer values and functionality
function usePlayer(){

    const [player,setPlayer] = useState('');
    const [alert,setAlert] = useState('hide')

    function handleChange(e){
        let name = e.target.value;

        //slicing the lengthy input
        if(name.length>12){
            name= name.slice(0,13)+'.'
        }
        setPlayer(name)
        setAlert('hide')
    }

    return {
        name:player,
        onChange:handleChange,
        setAlert,
        alert
    }
}

function EnterPlayers(){

    const playerOne = usePlayer();
    const playerTwo = usePlayer();

    //refs to use value and current focus
    const inputP1 = useRef(null);
    const inputP2 = useRef(null);
    const gameInput = useRef(null);


    const game = useSelector(state=>state.players.game)

    const dispatch = useDispatch();

    //updating the game-name entry in player reducer
    function updateGame(e){
        e.preventDefault()

        let name=gameInput.current.value;

        //slicing the lengthy input
        if(name.length>10){
            name= name.slice(0,11)
            console.log(" if hello ",name)
        }

        dispatch(selectGame(name))
    }

    //resetting the all the values (players and game name)
    function reset(){
        console.log('reset')
        inputP1.current.value=''
        inputP2.current.value=''
        dispatch(removeGame())
    }

    //updating players state
    function updatePlayerState(e){
        e.preventDefault()

        //show alert if player-one name entry is not filled
        if(playerOne.name===""){
            playerOne.setAlert('show')
            inputP1.current.focus()
            return
        }
        //show alert if player-two name entry is not filled
        if(playerTwo.name===""){
            playerTwo.setAlert('show')
            inputP2.current.focus()
            return
        }
        //alert and focus on gameInput if not entered
        if(game===''){
            document.getElementById('game-alert').classList.add('color-two')
            gameInput.current.focus();
            return
        }

        const value =[playerOne.name,playerTwo.name];
        dispatch(addPlayers(value))
        dispatch(showScoreBoard(true))
    }

    return(<div className='enter-players'>
        <h2>Start New Game</h2>
        
        <div className='game-form'>
            {game===""
            ?<form className='enter-game'>
                <input ref={gameInput} type='text'/>
                <button className='btn' onClick={updateGame}>Enter</button>
                <span id='game-alert'>Enter the Game or select from the list</span>
            </form>
            :<div className='game-entered'>{game}</div>
            }
            <form className='player-form'>

                <label>
                    Player One
                    <input ref={inputP1} type='text' onChange={playerOne.onChange}/>
                    <span  className={'alert-'+playerOne.alert}>Alert! Enter Player One Name</span>
                </label>
                <label>
                    Player Two
                    <input ref={inputP2} type='text' onChange={playerTwo.onChange}/>
                    <span className={'alert-'+playerTwo.alert}>Alert! Enter Player Two Name</span>
                </label>

                <button className='btn' onClick={updatePlayerState}>Continue</button>
            </form>
            <button className='btn reset' onClick={reset}>reset</button>
        </div>
    </div>)
}

export default EnterPlayers