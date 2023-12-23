
import {useWeb3Contract} from 'react-moralis';
import {abi} from './constants/abi';

export default function mintFour() {
        const mintF = {
            abi: abi, 
            contractAddress:"0xd41DD996Ad1a0da8922A8182A64586307136a37c",
            functionName:"AllowOwnerMint",
            params:{
              _symAmount : 4,
          },
        };
        
        const {runContractFunction} = useWeb3Contract();
        return(
            runContractFunction({params:mintF})
        );   

}