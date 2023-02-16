import React, {useState, useEffect} from "react";
import { Navbar } from "./";
import { fetchPlayers } from "../api-adapter";
import { PlayersInBowl } from "./";

function Main(){
    const [allPlayers, setAllPlayers] = useState([]);
    
    async function getAllPlayers(){
        try{
            const data = await fetchPlayers();
            setAllPlayers(data);
            
        } catch (err){
            console.log(err);
        }
    }

    useEffect(() => {
        getAllPlayers();
    }, []);

    return(
        <div id="main">
            <Navbar />
            <PlayersInBowl allPlayers = {allPlayers}/>
        </div>
    )
}

export default Main