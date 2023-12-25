
import {useWeb3Contract} from 'react-moralis';
import {abi} from '../constants/abi';

export default function Supply() {
const {runContractFunction} = useWeb3Contract();
  const supplyItems = {
    abi: abi, 
    contractAddress:"0xd41DD996Ad1a0da8922A8182A64586307136a37c",
    functionName:"totalSupply",
  };
  const currentSupply = runContractFunction({params: supplyItems}); 




  return (
    <div>
      <p>{`Current SUpply: ${currentSupply} NFT tokens`}</p>
    </div>
  );
}