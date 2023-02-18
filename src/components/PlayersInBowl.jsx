import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import MoreDetails from './MoreDetails';

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
                            <>
                            <Link to = {`http://localhost:3000/player/${updatePlayers[0].id}`}>
                            <button >More Details</button>
                            </Link>
                            </>
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
                            <>
                            <Link to = {`http://localhost:3000/player/${player.id}`}>
                            <button >More Details</button>
                            </Link>
                            </>
                        </div>    
                    )
                })
                :<h1> loading... </h1>
            }
            <MoreDetails allPlayers = {props.allPlayers}/>
            <Outlet />
        </div>
            )
}
export default PlayersInBowl;