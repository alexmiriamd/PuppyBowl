import React, { useState } from "react";

const SearchBar = (props) => {

    const [name , setName] = useState("");

    async function SendPuppySearch(name){
        try{
            console.log(props.allPlayers[0].name)
            console.log("Puppy Found");

            props.allPlayers.map((props.allPlayers[index]))

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