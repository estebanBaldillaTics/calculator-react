import React from "react";
import '../stylesheet/buttonclear.css';

const buttonclear = (props) =>(
    <div className="button-content clear" onClick={props.clearScreen}>
        {props.children}
    </div>
);

export default buttonclear;