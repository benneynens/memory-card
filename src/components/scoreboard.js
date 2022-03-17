import React from "react";

const ScoreBoard = (props) => {

    return (
        <div>
            <div className="currentScore">
                Current Score is {props.currentScore}
            </div>
            <div className="highScore">
                Previous High Score is {props.highScore}
            </div>

        </div>
    );
}

export default ScoreBoard;