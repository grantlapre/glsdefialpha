import Moralis from 'moralis';
import {abi} from '..constants/abi';
const  {REACT_APP_MORALIS_KEY} = process.env;


export default function Supply(){
Moralis.start({
    apiKey: REACT_APP_MORALIS_KEY
}).then(async() => {

    const response = await Moralis.EvmApi.utils.runContractFunction({
        address: "0xd41DD996Ad1a0da8922A8182A64586307136a37c",
        functionName: totalSupply,
        abi: abi,


    });
    console.log(response.raw);
});
}