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
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="#">Pokemon Evolve NFT</a> club!
        </h1>

        <p className={styles.description}>
          Get started by connecting your wallet and claim (2) Squirtle NFTs
        </p>

        <div className={styles.connect}>
          <ConnectWallet theme="light" />
        </div>

        <div className={styles.grid}>
          {nfts?.map((nft) => (
            <div key={nft.metadata.id.toString()} className={styles.card}>
              <ThirdwebNftMedia metadata={nft.metadata} width={250} height={250}/>
              <br />
              {nft.metadata.name}
            </div>
          ))}
        </div>

        {/* <br /> */}
        
        <br />

        <Web3Button
          contractAddress={"0xc30B9Bb2E6849Ab9bbFe5c6b253D8f0b8f48ADaA"}
          action={(contract) => contract.erc1155.claim(0, 1)}
          className={styles.claimBtn}
        >
          Claim a Squirtle
        </Web3Button>

        <p className={styles.descriptionTwo}>
        Click the Evolve button to combine your Squirtles and a get brand new NFT
        </p>

        <Web3Button
          contractAddress={"0xc30B9Bb2E6849Ab9bbFe5c6b253D8f0b8f48ADaA"}
          action={(contract) => contract.call("evolve")}
          className={styles.evolveBtn}
        >
          Evolve
        </Web3Button>

      </main>
    </div>

    // <div className={styles.container}>
    // <main className={styles.main}>
    //   <h1 className={styles.title}>
    //     Welcome to <a href="http://thirdweb.com/">thirdweb</a>!
    //   </h1>

    //   <p className={styles.description}>
    //     Get started by configuring your desired network in{" "}
    //     <code className={styles.code}>pages/_app.tsx</code>, then modify the{" "}
    //     <code className={styles.code}>pages/index.tsx</code> file!
    //   </p>

    //   <div className={styles.connect}>
    //     <ConnectWallet />
    //   </div>

    //   <div className={styles.grid}>
    //     <a href="https://portal.thirdweb.com/" className={styles.card}>
    //       <h2>Portal &rarr;</h2>
    //       <p>
    //         Guides, references and resources that will help you build with
    //         thirdweb.
    //       </p>
    //     </a>

    //     <a href="https://thirdweb.com/dashboard" className={styles.card}>
    //       <h2>Dashboard &rarr;</h2>
    //       <p>
    //         Deploy, configure and manage your smart contracts from the
    //         dashboard.
    //       </p>
    //     </a>

    //     <a
    //       href="https://portal.thirdweb.com/templates"
    //       className={styles.card}
    //     >
    //       <h2>Templates &rarr;</h2>
    //       <p>
    //         Discover and clone template projects showcasing thirdweb features.
    //       </p>
    //     </a>
    //   </div>
    // </main>
    // </div>
  );
};

export default Home;
