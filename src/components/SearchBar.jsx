import React, { useState } from "react";

const SearchBar = (props) => {

    const [name , setName] = useState("");

    async function SendPuppySearch(name){
        try{
            props.allPlayers.filter((player, index) => {
                player.name.includes(name) ? console.log("name found"): console.log("name NOT found")
            })
            setName(" ")
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