import React from "react";
import SearchBar from "./SearchBar";

const Navbar = (props) => {
  return (
    <div id="navbar">
      <SearchBar allPlayers = {props.allPlayers} setUpdatePlayers = {props.setUpdatePlayers}/>
    </div>
  );
};

export default Navbar;