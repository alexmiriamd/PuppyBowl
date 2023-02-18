import {React, useState, useEffect} from 'react';
import { useParams, Link } from 'react-router-dom';
import { fetchPlayers } from '../api-adapter';

const MoreDetails = (props)=>{

    // const [allPlayers, setAllPlayers] = useState([])
    
    // async function getAllPlayers(){
    //     try{
    //         const data = await fetchPlayers();
    //         setAllPlayers(data);
            
    //     } catch (err){
    //         console.log(err);
    //     }
    // }

    // useEffect(() => {
    //     getAllPlayers();
    // }, []);

    // let { id } = useParams();

    // // // allPlayers.filter((player, idx)=>{
    // //     console.log(player)
    // //     player.id.includes(id) ? console.log("id matches"): <h1>Nothing</h1>

    // // })
    return(
    <div>
        
        <Link to="http://localhost:3000/">Go Back</Link>
    </div>
    )
}
export default MoreDetails