import{useState} from "react";
export default function Board(){
    let[Moves,setMoves] = useState({blue:0,red:0,green:0,yellow:0});
    let[Arr,SetArr] = useState(["no moves"])
    let updateBlue=() =>{
        console.log(`Moves = ${Moves}`);
        setMoves((PrevMoves) =>{
            return{...PrevMoves,blue : PrevMoves.blue+1};
    });
    Arr.push("blue moves")
    SetArr((prevArr)=>{
        return [...prevArr,"blue moves"]
    });
    console.log(Arr);
}
    return(
        <div>
            <p>game begins</p>
            <div className="board">
                    <p>Blue move ={Moves.blue}</p>
                    <button style={{backgroundColor:"blue"}}onClick={updateBlue}>+1</button>
                    <p>Yellow move ={Moves.yellow} </p>
                    <button style={{backgroundColor:"yellow"}}>+1</button>
                    <p>Green move = {Moves.green}</p>
                    <button style={{backgroundColor:"green"}}>+1</button>
                    <p>Red move ={Moves.red} </p>
                    <button style={{backgroundColor:"red"}}>+1</button>
            </div>
        </div>
    )
}