import './App.css';
import reactlogo from './images/react-logo.PNG';
import Screen from './components/screen';
import Buttton from './components/button';
import ButttonClear from './components/buttonclear';
import {useState} from 'react';
import {evaluate} from 'mathjs';

function App() {

  const [input, seInput] = useState('');

  const addInput = value =>{
    seInput(input + value);
  };

  const calculateValue = () =>{
   try{
      if(input){
        seInput(evaluate(input));
      }else{
        window.alert("Completa tu calculo");
      }
    }catch{
      window.alert("Calculo erroneo");
      seInput('');
    }
  };

  return (
    <div className="App">
      <div className="logo-content">
        <img className='img-logo' src={reactlogo} alt='logo'/>
      </div>
      <div className="calculator-content">
        <div className="fila">
          <Screen input = {input}/> 
        </div>
        <div className="fila">
          <Buttton addInput ={addInput}>1</Buttton>
          <Buttton addInput ={addInput}>2</Buttton>
          <Buttton addInput ={addInput}>3</Buttton>
          <Buttton addInput ={addInput}>+</Buttton>
        </div>
        <div className="fila">
          <Buttton addInput ={addInput}>4</Buttton>
          <Buttton addInput ={addInput}>5</Buttton>
          <Buttton addInput ={addInput}>6</Buttton>
          <Buttton addInput ={addInput}>-</Buttton>
        </div>
        <div className="fila">
          <Buttton addInput ={addInput}>7</Buttton>
          <Buttton addInput ={addInput}>8</Buttton>
          <Buttton addInput ={addInput}>9</Buttton>
          <Buttton addInput ={addInput}>*</Buttton>
        </div>
        <div className="fila">
          <Buttton addInput ={calculateValue}>=</Buttton>
          <Buttton addInput ={addInput}>0</Buttton>
          <Buttton addInput ={addInput}>.</Buttton>
          <Buttton addInput ={addInput}>/</Buttton>
        </div>      
        <div className="fila">
          <ButttonClear clearScreen ={()=> seInput('')}>Clear</ButttonClear>
        </div>
      </div>
    </div>
  );
}

export default App;
