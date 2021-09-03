import { useState } from "react"
import { useDispatch } from "react-redux"
import { selectGame } from "../action"
import { gamesData } from "../assets/gamesData"

import '../css/SelectGame.css'

function SelectGame(){

    const [toggle,setToggle] = useState('hide')
    const dispatch  = useDispatch();
    

    //function to show and hide the select-game component
    function toggleSelectGame(){
        if(toggle==='hide'){
            setToggle('show')
        }else{
            setToggle('hide')
        }
    }

    return(<div className='select-game'>
       <div className={'toggle-select-game '+toggle}>
            <h2>Sports Available</h2>
            <div className='all-sports' >
                <div>
                {gamesData.map(game=>(
                    <div className='sport-container' key={game.name} onClick={()=>dispatch(selectGame(game.name))}>
                        <img src={game.img} alt={game.name}/>
                        <span>{game.name}</span>
                    </div>
                ))}
                </div>
            </div>
       </div>
       <div className='show-detail-btn' onClick={toggleSelectGame}>select game</div>

    </div>)
}

export default SelectGame