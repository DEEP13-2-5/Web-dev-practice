import { useState } from "react";
import {genTicket,sum} from "./helper";
import Ticket from "./Ticket";

export default function lottery({n=3,winCondition}){
    let[ticket,setticket]=useState(genTicket(n));
    let isWinning =winCondition(ticket);

    let buyTicket=()=>{
        setticket(genTicket(n))
    }
    return(
    <div>
        <h1>Lottery Game</h1>
        <div className="ticket">
           <Ticket ticket={ticket}/>
        </div>
        <button onClick={buyTicket}>By ticket</button>
        <h3>{isWinning && "congratulation you won"}</h3>
    </div>
    )
}