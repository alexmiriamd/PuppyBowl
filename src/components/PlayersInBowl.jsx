import React from 'react';

const PlayersInBowl = (props) => {
    const allPlayers = props.allPlayers;

    return(
        <div>
            <h1>Puppies</h1>
            {
                allPlayers.length 
                ? allPlayers.map((player, idx)=>{
                    return(
                        <div className="puppyCard" key={`Puppy ID is: ${idx}`}>
                            <h3>
                                {player.name}
                            </h3>
                            <img src = {player.imageUrl} className = "puppyPics"/>
                            <button>
                                More Details 
                            </button>
                        </div>    
                    )
                })
                :<h1> loading... </h1>
            }
        </div>
            )
}
export default PlayersInBowl;