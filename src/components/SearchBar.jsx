import React, { useState } from "react";

const SearchBar = (props) => {

    const [name , setName] = useState("");

    async function SendPuppySearch(name){
        
        try{
            const filteredArray = props.allPlayers.filter((player, index) => {
                return player.name === name;
            })
            setName(" ");
            props.setUpdatePlayers(filteredArray);

        } catch (error) {
            console.log(error);
        }
    }
    return(
        <form id = "searchBar"
        onSubmit={(event) => {
          event.preventDefault();
          SendPuppySearch(name);
        }}
      >
        <label>
        search:
        <input
          name="name"
          type="text"
          value={name}
          onChange={(event) => {
          console.log(event.target.value);
          setName(event.target.value);
          }}
        />
      </label>

      </form>
    )
}
export default SearchBar