import {React, useState, useEffect} from 'react';
import { useParams, Link } from 'react-router-dom';
import { fetchPlayers } from '../api-adapter';

const MoreDetails = (props)=>{

    const [allPlayers, setAllPlayers] = useState([])
    
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

    let { id } = useParams();

    return(
    <div className = "moreDetailsContainer">
        {allPlayers.map((player, idx)=>{
        
        console.log(id)
        if(player.id == id){
            return(
                <div className= "contentContainer">
                    <div className="puppyCard">
                                <h3 className = "puppyName">
                                    {player.name}
                                </h3>
                                <img src = {player.imageUrl} className = "moreDetailPic"/>
                                <ul>
                                    <li> Breed: {player.breed} </li>
                                    <li> Status: {player.status} </li>
                                    <li> Team: {player.teamId} </li>
                                </ul>
                                
                    </div>  
            </div>  
            )
        }
    })}   
    <Link to="http://localhost:3000/" className="goBack">Go Back</Link>
    </div>
    )
}
export default MoreDetails