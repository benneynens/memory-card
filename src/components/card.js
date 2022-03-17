import React, {useState} from "react";

const Card = (props) => {

    const [clicked, setClicked] = useState(false);

    if (clicked && (props.currentScore === 0 || props.currentScore === 5)) setClicked(false);    

    const handleClick = () => {
        props.click(clicked);
        setClicked(true);
    }

    return (
        <div className="card" onClick={handleClick}>{props.title} {clicked && "clicked"}</div>
    )
}

export default Card;