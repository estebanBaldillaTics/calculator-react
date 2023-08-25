import React from "react";
import '../stylesheet/screen.css';

const screen = ({input}) => (
    <div className="screen">
        <p className="result">
            {input}
        </p>
    </div>
);

export default screen;