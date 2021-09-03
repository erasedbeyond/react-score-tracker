export const loadState = ()=>{

    try{
        const serializedState = localStorage.getItem('gameHistory');
        if(serializedState === null){
            return undefined;
        }
        return JSON.parse(serializedState);
    }catch(err){
        return undefined;
    }
}

export const saveState = (gameHistory)=>{
    try{
        const serializedState = JSON.stringify(gameHistory);
        localStorage.setItem('gameHistory',serializedState)
    }catch(err){
        console.log('error accessing local storage',err)
    }
}