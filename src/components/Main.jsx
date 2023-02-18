import React, {useState, useEffect} from "react";
import { MoreDetails, Navbar, SearchBar } from "./";
import { fetchPlayers } from "../api-adapter";
import { PlayersInBowl } from "./";
import { Outlet } from "react-router-dom";

function Main(){
    const [allPlayers, setAllPlayers] = useState([]);
    const [updatePlayers, setUpdatePlayers] = useState([])

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
            <Navbar allPlayers = {allPlayers} setUpdatePlayers = {setUpdatePlayers}/>
            <PlayersInBowl allPlayers = {allPlayers} updatePlayers = {updatePlayers}/>
            <Outlet/>
        </div>
    )
}

export default Main