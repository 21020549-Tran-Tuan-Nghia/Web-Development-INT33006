import React from 'react'
import { useState } from 'react'

const Product = (props) => {
    const [isBookmarked, setIsBookmarked] = useState(props.status)
    const handleClick = () => {
        setIsBookmarked((isBookmarked) => !isBookmarked)
    }
    return (
        <div style={{ border: '1px solid red', backgroundColor: isBookmarked ? 'yellow' : 'white'}}>
        <h1>{props.name}</h1>
        <p>{props.origin}</p>
        <button onClick={handleClick}>
            {isBookmarked ? "Remove bookmark" : "Set bookmark"}
        </button>
        </div>
    )
}

export default Product
