import { useDispatch, useSelector } from "react-redux"
import { addScorePlayerOne,addScorePlayerTwo, handleSavingGame } from "../action";
import '../css/ScoreBoard.css'

function ScoreBoard(){

    const players = useSelector((state)=>state.players);

    const scoreOne=players.playerOne.score;
    const scoreTwo=players.playerTwo.score;

    let winnerName;
    let winScore;
    //current winner and points calculation
    if(scoreOne>scoreTwo){
        winnerName = players.playerOne.name;
        winScore = scoreOne-scoreTwo;
    }else if(scoreOne<scoreTwo){
        winnerName = players.playerTwo.name;
        winScore = scoreTwo-scoreOne;
    }else{
        winnerName = "Match Draw";
        winScore = 0;
    }

    const dispatch = useDispatch();

    //updating the the gameHistory state and saving it in local storage
    function updateGameLogs(){

        const value = {
            game:players.game,
            players:[players.playerOne.name, players.playerTwo.name],
            winner:winnerName,
            winScore:winScore,
            date:Date.now(),

        }
        dispatch(handleSavingGame(value));  
    }

    return(<div className="score-board">
        <h2>Score Board</h2>
        <div className='scoreboard'>
            
            <div className='scoreboard-section'>
                <div  className='score-sec-one'>
                    <div>{players.playerOne.name}</div>
                    <button className='btn' onClick={()=>dispatch(addScorePlayerOne())}>Add Win</button>
                </div>
                <div  className='score-sec-two'>
                    <div>wins</div>
                    <div className='score'>{players.playerOne.score}</div>
                </div>

            </div>

            <div className='scoreboard-section'>
                <div className='score-sec-one'>
                    <div>{players.playerTwo.name}</div>
                    <button className='btn' onClick={()=>dispatch(addScorePlayerTwo())}>Add Win</button>
                </div>
                <div  className='score-sec-two'>
                    <div>wins</div>
                    <div className='score'>{players.playerTwo.score}</div>
                </div>
                
            </div>

            <div className='scoreboard-section last-sec'>
                <div>
                    <span>Current Winner:</span>
                    <span>{winnerName}</span>
                </div>
                <div>
                    <span>Win Difference:</span>
                    <span>{winScore}</span>
                </div>
            </div>
            <button className='btn' onClick={updateGameLogs}>Save Game</button>

        </div>
    </div>)
}

export default ScoreBoard