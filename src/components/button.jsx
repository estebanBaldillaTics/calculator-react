import React from "react";
import '../stylesheet/button.css';

function button(props){
    const isOperator = valor => {
      return isNaN(valor) && (valor !== '.') && (valor !== '=');
    };
    return(
        <div className={`button-content ${isOperator(props.children) ? 'operator' : ''}`.trimEnd()} onClick={() => props.addInput(props.children)}>
          {props.children}
        </div>
    );
}

export default button;