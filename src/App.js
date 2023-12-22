
import logo from './logo.svg';
import './App.css';
import Header from './components/Header'; 
import {useWeb3Contract} from 'react-moralis';
import {abi} from './constants/abi';


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
