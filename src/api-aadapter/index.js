const BASE_URL =  "https://fsa-puppy-bowl.herokuapp.com/api/2301-ftb-et-web-ft/players";

export const fetchPuppies = async ()=>{
    try{
        const response = await fetch(BASE_URL)
        const result = await response.json()
        const players = result.players
        return players
    } catch (error){
        console.log(error)
    }
}
