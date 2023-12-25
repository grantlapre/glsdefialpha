import React, { useState } from "react";
import {useWeb3Contract} from 'react-moralis';
import { useMoralis } from "react-moralis";
import {abi} from '../constants/abi';

export default function Amount() {
const {runContractFunction} = useWeb3Contract();
  const { Moralis } = useMoralis();
  const mintTokena = {
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
  const mintTokenb = {
    abi: abi, 
    contractAddress:"0xd41DD996Ad1a0da8922A8182A64586307136a37c",
    functionName:"publicSaleMint",
    msgValue: Moralis.Units.ETH("0.12"),
    gasPrice:"30000000",
    gas: "5000000",
    params:{
      _symAmount : 2,
    }
  };
  const mintTokenc = {
    abi: abi, 
    contractAddress:"0xd41DD996Ad1a0da8922A8182A64586307136a37c",
    functionName:"publicSaleMint",
    msgValue: Moralis.Units.ETH("0.18"),
    gasPrice:"30000000",
    gas: "5000000",
    params:{
      _symAmount : 3,
    }
  };
  const mintTokend = {
    abi: abi, 
    contractAddress:"0xd41DD996Ad1a0da8922A8182A64586307136a37c",
    functionName:"publicSaleMint",
    msgValue: Moralis.Units.ETH("0.24"),
    gasPrice:"30000000",
    gas: "5000000",
    params:{
      _symAmount : 4,
    }
  };
  const mintTokene = {
    abi: abi, 
    contractAddress:"0xd41DD996Ad1a0da8922A8182A64586307136a37c",
    functionName:"publicSaleMint",
    msgValue: Moralis.Units.ETH("0.3"),
    gasPrice:"30000000",
    gas: "5000000",
    params:{
      _symAmount : 5,
    }
  };
  const mintTokenf = {
    abi: abi, 
    contractAddress:"0xd41DD996Ad1a0da8922A8182A64586307136a37c",
    functionName:"publicSaleMint",
    msgValue: Moralis.Units.ETH("0.36"),
    gasPrice:"30000000",
    gas: "5000000",
    params:{
      _symAmount : 6,
    }
  };
  const mintTokeng = {
    abi: abi, 
    contractAddress:"0xd41DD996Ad1a0da8922A8182A64586307136a37c",
    functionName:"publicSaleMint",
    msgValue: Moralis.Units.ETH("0.42"),
    gasPrice:"30000000",
    gas: "5000000",
    params:{
      _symAmount : 7,
    }
  };
  const mintTokenh = {
    abi: abi, 
    contractAddress:"0xd41DD996Ad1a0da8922A8182A64586307136a37c",
    functionName:"publicSaleMint",
    msgValue: Moralis.Units.ETH("0.48"),
    gasPrice:"30000000",
    gas: "5000000",
    params:{
      _symAmount : 8,
    }
  };
  const mintTokeni = {
    abi: abi, 
    contractAddress:"0xd41DD996Ad1a0da8922A8182A64586307136a37c",
    functionName:"publicSaleMint",
    msgValue: Moralis.Units.ETH("0.54"),
    gasPrice:"30000000",
    gas: "5000000",
    params:{
      _symAmount : 9,
    }
  };
  const mintTokenj = {
    abi: abi, 
    contractAddress:"0xd41DD996Ad1a0da8922A8182A64586307136a37c",
    functionName:"publicSaleMint",
    msgValue: Moralis.Units.ETH("0.6"),
    gasPrice:"30000000",
    gas: "5000000",
    params:{
      _symAmount : 10,
    }
  };
  const getInitialState = () => {
    const value = "1";
    return value;
  };

  const [value, setValue] = useState(getInitialState);

  const handleChange = (e) => {
    setValue(e.target.value);
    const symAmount = parseInt(e.target.value);
    console.log(symAmount);
    switch(symAmount){
    case 1:
        runContractFunction({params: mintTokena});
        break;
    case 2:
        runContractFunction({params: mintTokenb});
        break;
    case 3:
        runContractFunction({params: mintTokenc});
        break;
    case 4:
        runContractFunction({params: mintTokend});
        break;
    case 5:
        runContractFunction({params: mintTokene});
        break;
    case 6:
        runContractFunction({params: mintTokenf});
        break;
    case 7:
        runContractFunction({params: mintTokeng});
        break;
    case 8:
        runContractFunction({params: mintTokenh});
        break;
    case 9:
        runContractFunction({params: mintTokeni});
        break;
    case 10:
        runContractFunction({params: mintTokenj}); 
        break;
    default:
  };
    };

  return (
    <div>
        <p>Mint Now by selecting number of tokens</p>
      <select value={value} onChange={handleChange}>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
        <option value="6">6</option>
        <option value="7">7</option>
        <option value="8">8</option>
        <option value="9">9</option>
        <option value="10">10</option>
      </select>
      <p></p>
      <p>{`You selected to mint ${value} NFT tokens`}</p>
    </div>
  );
}