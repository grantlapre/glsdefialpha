import {abi} from '../constants/abi';
import {useWeb3Contract} from 'react-moralis';
import { useMoralis } from "react-moralis";
require("dotenv").config();
const Moralis = require("moralis").default;

export default function Supply(){
    

    const {runContractFunction} = useWeb3Contract();
    const { Moralis } = useMoralis();
Moralis.start({
    apiKey: process.env.REACT_APP_MORALIS_KEY
}).then(async() => {

    const response = await Moralis.EvmApi.utils.runContractFunction({
        contractAddress: "0xd41DD996Ad1a0da8922A8182A64586307136a37c",
        abi: abi,
        functionName: "totalSupply"
  
    });
    console.log(response.raw);
});
}