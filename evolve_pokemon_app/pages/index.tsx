import { ConnectWallet, ThirdwebNftMedia, Web3Button, useAddress, useContract, useOwnedNFTs } from "@thirdweb-dev/react";
import type { NextPage } from "next";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  const { contract } = useContract(
    "0xc30B9Bb2E6849Ab9bbFe5c6b253D8f0b8f48ADaA"
  );

  const address = useAddress();

  const {data: nfts} = useOwnedNFTs(contract, address);

  return (
    <div>
      <ConnectWallet theme="light" />
      <br />
      {nfts?.map((nft) => (
        <div key={nft.metadata.id.toString()}>
          <ThirdwebNftMedia metadata={nft.metadata}/>
          {nft.metadata.name}
        </div>
      ))}
      <br />
      <Web3Button
        contractAddress={"0xc30B9Bb2E6849Ab9bbFe5c6b253D8f0b8f48ADaA"}
        action={(contract) => contract.erc1155.claim(0, 1)}
      >
        Claim a Squirtle
      </Web3Button>
      <br />
      <Web3Button
        contractAddress={"0xc30B9Bb2E6849Ab9bbFe5c6b253D8f0b8f48ADaA"}
        action={(contract) => contract.call("evolve")}
      >
        Evolve
      </Web3Button>
    </div>
  );
};

export default Home;
