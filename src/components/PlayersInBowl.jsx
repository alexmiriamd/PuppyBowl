import React from 'react';
import { Outlet, Link } from 'react-router-dom';


const PlayersInBowl = (props) => {
    const allPlayers = props.allPlayers;
    const updatePlayers = props.updatePlayers;

    return(
        <>
        <h1>Puppies</h1>
        <div className = "contentContainer">
            {
                updatePlayers.length ? 
                        
                        <div className="puppyCard">
                            <h3 className = "puppyName">
                                {updatePlayers[0].name}
                            </h3>
                            <img src = {updatePlayers[0].imageUrl} className = "puppyPics"/>
                            <div className = "moreDetailsButton">
                            <Link to = {`player/${updatePlayers[0].id}`}>
                            <button >More Details</button>
                            </Link>
                            </div>
                        </div>
                :
                allPlayers.length 
                ? allPlayers.map((player, idx)=>{
                    return(
                        <div className="puppyCard" key={`Puppy ID is: ${idx}`}>
                            <h3 className = "puppyName">
                                {player.name}
                            </h3>
                            <img src = {player.imageUrl} className = "puppyPics"/>
                            <div className = "moreDetailsButton">
                            <Link to = {`player/${player.id}`}>
                            <button >More Details</button>
                            </Link>
                            </div>
                        </div>  
                    )
                })
                :<h1> loading... </h1>
            }
            
            <Outlet />
        </div>
        </>
            )
}
export default PlayersInBowl;