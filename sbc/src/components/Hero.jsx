import React, {useState, useEffect} from 'react'
import Biography from './Biography'

const Hero = props => {
    return (
        <div>
            <h2>Name: {props.heroes.name}</h2>
            {console.log("Biography: ", props.heroes.biography)}
            <Biography biography = {props.heroes.biography} />
        </div>

    )
}

export default Hero