import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header'; 
import {useWeb3Contract} from 'react-moralis';
import {abi} from './constants/abi';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';


function App() {
  
  const {runContractFunction} = useWeb3Contract({
    abi: abi, 
    contractAddress:"0xd41DD996Ad1a0da8922A8182A64586307136a37c",
    functionName:"AllowOwnerMint",
    params:{
      _symAmount : 4,
    },
  });
  return (
    <div className="App">
      
      
      <Header />
      <button onClick={()=> runContractFunction()}>Owner to mint 4</button>
      <Container classname="p-3">
       
          <h1 classname="header">GLSDefi Alpha Project</h1>
          <ButtonGroup>
            <Button>1</Button>
            <Button>2</Button>
            <Button>3</Button>
            <Button>4</Button>
            <Button>5</Button>
            <Button>6</Button>
            <Button>7</Button>
            <Button>8</Button>
            <Button>9</Button>
            <Button>10</Button>
            <Button>11</Button>
            <Button>12</Button>
            <Button>13</Button>
            <Button>14</Button>
            <Button>15</Button>
          </ButtonGroup>
 
      </Container>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      
    </div>
    
  );
}

export default App;
