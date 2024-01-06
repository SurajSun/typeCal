import React from 'react';
import Button from './module/button/Button';
import './App.css';
import Input from './module/input/Input';


function App() {

const numarr: string[] =['1','2','3','4','5','6','7','8','9','0'];

//type inference
const numbt:JSX.Element[] =  numarr.map((num: string ) => <Button btname={num}/>)

  return (
    <div className="App">
      <h1>Hello react typescript</h1>
      <br />
      <Input />
      <br />
      {numbt}      
    </div>
  );
}

export default App;
