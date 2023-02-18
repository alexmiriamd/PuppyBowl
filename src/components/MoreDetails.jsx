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
    <div>
        {allPlayers.map((player, idx)=>{
        
        console.log(id)
        if(player.id == id){
            return(
                <div className="puppyCard" key={`Puppy ID is: ${idx}`}>
                            <h3>
                                {player.name}
                            </h3>
                            <img src = {player.imageUrl} className = "puppyPics"/>
                            
                        </div>    
            )
        }

    })}

        <Link to="http://localhost:3000/">Go Back</Link>
    </div>
    )
}
export default MoreDetails