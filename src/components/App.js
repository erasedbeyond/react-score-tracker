import { useSelector } from "react-redux";
import EnterPlayers from "./EnterPlayers";
import GameHistory from "./GameHistory";
import ScoreBoard from "./ScoreBoard";
import SelectGame from "./SelectGame";

import "../css/App.css"

function App() {

  //Whether to scoreboard or entry page
  const showScoreBoard =useSelector(state=>state.players.showScoreBoard )

  return (
    <div className="App">
      <GameHistory/>
      {showScoreBoard 
        ? <ScoreBoard/>
        : <EnterPlayers/>
      }
      {!showScoreBoard && <SelectGame/>}
    </div>
  );
}

export default App;
