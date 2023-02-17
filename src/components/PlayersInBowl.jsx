import React from 'react';
import { MoreDetails } from './';

const PlayersInBowl = (props) => {
    const allPlayers = props.allPlayers;
    const updatePlayers = props.updatePlayers;

    return(
        <div>
            <h1>Puppies</h1>
            {
                updatePlayers.length ? 
                        <div className="puppyCard">
                            <h3>
                                {updatePlayers[0].name}
                            </h3>
                            <img src = {updatePlayers[0].imageUrl} className = "puppyPics"/>
                            <button >More Details</button>
                        </div> 

                :
                allPlayers.length 
                ? allPlayers.map((player, idx)=>{
                    return(
                        <div className="puppyCard" key={`Puppy ID is: ${idx}`}>
                            <h3>
                                {player.name}
                            </h3>
                            <img src = {player.imageUrl} className = "puppyPics"/>
                            <button >More Details</button>
                        </div>    
                    )
                })
                :<h1> loading... </h1>
            }
        </div>
            )
}
export default PlayersInBowl;