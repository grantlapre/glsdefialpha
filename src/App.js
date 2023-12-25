import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header'; 
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import {useWeb3Contract} from 'react-moralis';
import { useMoralis } from "react-moralis";
import {abi} from './constants/abi';
import Cards from './components/cards';


function App() {
  const {runContractFunction} = useWeb3Contract();
  const { Moralis } = useMoralis();
  const mintToken = {
    abi: abi, 
    contractAddress:"0xd41DD996Ad1a0da8922A8182A64586307136a37c",
    functionName:"publicSaleMint",
    msgValue: Moralis.Units.ETH("0.06"),
    gasPrice:"30000000",
    gas: "5000000",
    params:{
      _symAmount : 1,
    }
  };
  const pausedSt= {
    abi: abi, 
    contractAddress:"0xd41DD996Ad1a0da8922A8182A64586307136a37c",
    functionName:"setSaleState",
    params:{
      _newState : 0,
    }
  };
  const saleSt = {
    abi: abi, 
    contractAddress:"0xd41DD996Ad1a0da8922A8182A64586307136a37c",
    functionName:"setSaleState",
    params:{
      _newState : 2,
    }
  };


  return (
    <div className="App">
      <Header />
      <Container>
       
          <h1 classname="header">GLSDefi Alpha Project</h1>
 
       
          <h4>Sale State...</h4>
          <ButtonGroup>
            <Button onClick={()=> runContractFunction({params: pausedSt})}>Paused</Button>
            <Button onClick={()=> runContractFunction({params: saleSt})}>Public Sale</Button>
          </ButtonGroup>
 
      </Container>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Real World Asset Tokenization Symmetricalv2 NFT  
        </p>
        <Cards />
        <a
          className="App-link"
          href="https://glsdefi.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          GLSDefi Alpha Project Launching 17/2/2024
        </a>
      </header>
      
    </div>
    
  );
}

export default App;
