import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { handleDeletingGame } from "../action";
import '../css/GameHistory.css'

function GameHistory(){

    let logs = useSelector(state=>state.gameHistory)
   
    const [search,setSearch] = useState('');
    const [sort,setSort] = useState('descending')
    const [toggle,setToggle] = useState('hide')

    const dispatch = useDispatch();

    //sorting the gameHistory with timestamp
    if(sort==='ascending'){
        logs.sort((a,b)=> a.date-b.date);
    }
    if(sort==='descending'){
        logs.sort((a,b)=> b.date-a.date);
    }

    //filtering the gameHistory if search text is presentt
    if(search!==''){
        let result=[];
        logs.forEach(log => {
            let players = log.players[0].toLowerCase()+" "+log.players[1].toLowerCase()+" "+log.game.toLowerCase()
            const searchArr = search.toLowerCase().split(" ");
            let flag = true;
            searchArr.forEach(searchItem=>{
                if(!players.includes(searchItem) && searchItem !== 'vs' ){
                    flag=false;
                }
            })
            if(flag){
                result=[...result,log]
            } 
        });
        logs=result
    }

    //function to show and hide the game-history component

    function toggleGameHistory(){
        if(toggle==='hide'){
            setToggle('show')
        }else{
            setToggle('hide')
        }
    }

    let timerId;
    const delayUpdate = function updateSearch(e){
        clearTimeout(timerId)
        timerId= setTimeout(()=>{
            setSearch(e.target.value)
        },1000)
    }

    return(<div className='game-history'>
        <div className={toggle+" toggle-history"}>

            <div className='game-search-bar'>
                    <h2>Game History</h2>
                    <input type='text' placeholder='search game' onChange={delayUpdate}/>
                    <div className='new-btn' onClick={()=>setSort('descending')}>NEW</div>
                    <div className='old-btn' onClick={()=>setSort('ascending')}>OLD</div>

            </div>

            <div className='all-games'>
            {logs.length!==0
            ?<div>
                {logs.map(item=><div className='game-played' key={item.date}>
                    <div className='game-players'> <span>{item.players[0]}</span> vs <span>{item.players[1]}</span></div>
                    <div className='game-detail'>
                        <div className='game-winner'><span className='color-two'>Winner: </span>{item.winner}</div>
                        <div className='game-win-score'><span className='color-two'>Win By: </span>{item.winScore} points</div>
                        <span className='game-name'>{item.game}</span>

                    </div>
                    <div className='game-delete'>
                        <div className='game-time-stamp'>
                            <span className='game-date'>{(new Date(item.date)).getDate()+'/'+((new Date(item.date)).getMonth()+1)+"/"+(new Date(item.date)).getFullYear()}</span>
                            <span className='game-time'>{(new Date(item.date)).getHours()+':'+((new Date(item.date)).getMinutes())+':'+(new Date(item.date)).getSeconds()}</span>

                        </div>
                        <button className='delete-btn' onClick={()=>dispatch(handleDeletingGame(item.date))} >Delete</button>
                    </div>
                </div>)}
            </div>
            :<div className='no-games'>
                No Match Played
            </div>
            }
            </div>
       </div>
       <div className='pop-btn' onClick={toggleGameHistory}>game history</div>
    </div>)
}

export default GameHistory