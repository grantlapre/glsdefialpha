import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header'; 
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import {useWeb3Contract} from 'react-moralis';
import {abi} from './constants/abi';


function App() {
  const {runContractFunction} = useWeb3Contract();
  const mintToken = {
    abi: abi, 
    contractAddress:"0xd41DD996Ad1a0da8922A8182A64586307136a37c",
    functionName:"publicSaleMint",
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
      <button onClick={()=> runContractFunction({params: mintToken})}>Discord coming soon...time for a coffee!</button>
      <Container>
       
          <h1 classname="header">GLSDefi Alpha Project</h1>
          <h4>Mint Amount</h4>
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
            <Button>16</Button>
            <Button>17</Button>
            <Button>18</Button>
            <Button>19</Button>
            <Button>20</Button>
          </ButtonGroup>
 
      </Container>
      <Container>
       
          <h4>Sale State..</h4>
          <ButtonGroup>
            <Button onClick={()=> runContractFunction({params: pausedSt})}>Paused</Button>
            <Button onClick={()=> runContractFunction({params: saleSt})}>Public Sale</Button>
          </ButtonGroup>
 
      </Container>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Real World Asset Tokenization Symmetricalv1 NFT  
        </p>
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
