
import {abi} from '..constants/abi';
require("dotenv").config();
import { useMoralis } from "react-moralis";

export default function Supply(){
    const { Moralis } = useMoralis();
Moralis.start({
    apiKey: REACT_APP_MORALIS_KEY.process.env
}).then(async() => {

    const response = await Moralis.EvmApi.utils.runContractFunction({
        address: "0xd41DD996Ad1a0da8922A8182A64586307136a37c",
        functionName: totalSupply,
        abi: abi,


    });
    console.log(response.raw);
});
}