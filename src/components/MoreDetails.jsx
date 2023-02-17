import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { default as main } from './Main'

const MoreDetails = (props)=>{
console.log(props)
    let { id } = useParams();
    return(
    <div>

        <h1>{}</h1>
        <Link to="http://localhost:3000/">Go Back</Link>
    </div>
    )
}
export default MoreDetails