import React, { useContext, createContext, useState, useEffect } from 'react';
import { AptosClient, TxnBuilderTypes, BCS } from "aptos";
import { sha3_256 } from 'js-sha3';
import { Buffer } from 'buffer';

const StateContext = createContext();

export const StateContextProvider = ({ children }) => {
  const [client, setClient] = useState(null);
  const [account, setAccount] = useState(null);
  const [contractAddress, setContractAddress] = useState(null);

  useEffect(() => {
    const initializeAptos = async () => {
      const newClient = new AptosClient("https://fullnode.testnet.aptoslabs.com/v1");
      setClient(newClient);

      if (window.dapp) {
        try {
          const accounts = await window.dapp.request('aptos', {
            method: 'dapp:accounts',
          });
          if (accounts && accounts.aptos) {
            setAccount(accounts.aptos);
          }
        } catch (error) {
          console.error("Error connecting to Welldone wallet:", error);
        }
      } else {
        console.warn("Welldone wallet not detected. Please install the Welldone wallet extension.");
      }

      // Fetch contract address using transaction hash
      const txHash = "0xc2c8e4036422e00d12cf7cb57ed3d214c06d3181c7745ce75fadfd381deae531"; // Replace with your actual transaction hash
      try {
        const txnInfo = await newClient.getTransactionByHash(txHash);
        setContractAddress(txnInfo.sender);
      } catch (error) {
        console.error("Error fetching contract address:", error);
      }
    };

    initializeAptos();
  }, []);

  const createCampaign = async (form) => {
    if (!client || !account || !contractAddress) {
      console.error("Aptos client, account, or contract address not initialized");
      return;
    }

    if (typeof window.dapp === 'undefined') {
      console.error("Welldone wallet not detected. Please install the Welldone wallet extension.");
      return;
    }

    try {
      const { EntryFunction, TransactionPayloadEntryFunction, ChainId } = TxnBuilderTypes;
      
      const entryFunction = EntryFunction.natural(
        `${contractAddress}::campaign`,
        "create_campaign",
        [],
        [
          BCS.bcsSerializeStr(form.title),
          BCS.bcsSerializeStr(form.description),
          BCS.bcsSerializeUint64(form.target),
          BCS.bcsSerializeUint64(new Date(form.deadline).getTime()),
          BCS.bcsSerializeStr(form.image),
        ]
      );

      const payload = new TransactionPayloadEntryFunction(entryFunction);

      const [{ sequence_number: sequenceNumber }, chainId] = await Promise.all([
        client.getAccount(account.address),
        client.getChainId(),
      ]);

      const rawTxn = new TxnBuilderTypes.RawTransaction(
        TxnBuilderTypes.AccountAddress.fromHex(account.address),
        BigInt(sequenceNumber),
        payload,
        BigInt(1000), // Max gas amount
        BigInt(100), // Gas price
        BigInt(Math.floor(Date.now() / 1000) + 10),
        new TxnBuilderTypes.ChainId(chainId),
      );

      const bcsTxn = BCS.bcsToBytes(rawTxn);
      const hash = sha3_256.create();
      hash.update(Buffer.from("APTOS::RawTransaction", "ascii"));
      hash.update(bcsTxn);
      const hashResult = hash.digest();
      
      const rawTxnWithSalt = `0x${Buffer.from([...hashResult, ...bcsTxn]).toString('hex')}`;

      const response = await window.dapp.request('aptos', {
        method: 'dapp:signAndSendTransaction',
        params: [rawTxnWithSalt],
      });

      const txHash = response[0];
      await client.waitForTransaction(txHash);
      console.log("Campaign created successfully");
      return txHash;
    } catch (error) {
      console.error("Error creating campaign:", error);
      throw error;
    }
  };


  
  const donate = async (pId, amount, client, account, contractAddress) => {
    console.log("Donate function called with pId:", pId, "and amount:", amount);
  
    if (pId === undefined || pId === null) {
      throw new Error("pId is undefined or null");
    }
    if (amount === undefined || amount === null) {
      throw new Error("amount is undefined or null");
    }
  
    // Check if we're using fake data
    const isFakeData = fakeCampaigns.some(campaign => campaign.id === pId);
  
    if (isFakeData) {
      // Simulate a donation for fake campaigns
      console.log(`Simulated donation of ${amount} to campaign ${pId}`);
      // You could update the fake data here if needed
      return "fake-transaction-hash";
    } else {
      // Real donation logic
      if (!client || !account || !contractAddress) {
        console.error("Aptos client, account, or contract address not initialized");
        throw new Error("Aptos client, account, or contract address not initialized");
      }
      if (typeof window.dapp === 'undefined') {
        console.error("Welldone wallet not detected. Please install the Welldone wallet extension.");
        throw new Error("Welldone wallet not detected");
      }
  
      try {
        const { EntryFunction, TransactionPayloadEntryFunction, ChainId } = TxnBuilderTypes;
        
        // Convert pId and amount to BigInt
        let pIdBigInt, amountBigInt;
        try {
          pIdBigInt = BigInt(pId);
          amountBigInt = BigInt(amount);
        } catch (error) {
          console.error("Error converting to BigInt:", error);
          throw new Error(`Invalid pId or amount. pId: ${pId}, amount: ${amount}. Both must be valid integers or numeric strings.`);
        }
  
        console.log("Converted values - pIdBigInt:", pIdBigInt.toString(), "amountBigInt:", amountBigInt.toString());
  
        const entryFunction = EntryFunction.natural(
          `${contractAddress}::campaign`,
          "donate",
          [],
          [
            BCS.bcsSerializeUint64(pIdBigInt),
            BCS.bcsSerializeUint64(amountBigInt),
          ]
        );
        const payload = new TransactionPayloadEntryFunction(entryFunction);
        
        const [{ sequence_number: sequenceNumber }, chainId] = await Promise.all([
          client.getAccount(account.address),
          client.getChainId(),
        ]);
  
        const rawTxn = new TxnBuilderTypes.RawTransaction(
          TxnBuilderTypes.AccountAddress.fromHex(account.address),
          BigInt(sequenceNumber),
          payload,
          BigInt(1000), // Max gas amount
          BigInt(100), // Gas price
          BigInt(Math.floor(Date.now() / 1000) + 10),
          new TxnBuilderTypes.ChainId(chainId),
        );
  
        const bcsTxn = BCS.bcsToBytes(rawTxn);
        const hash = sha3_256.create();
        hash.update(Buffer.from("APTOS::RawTransaction", "ascii"));
        hash.update(bcsTxn);
        const hashResult = hash.digest();
        
        const rawTxnWithSalt = `0x${Buffer.from([...hashResult, ...bcsTxn]).toString('hex')}`;
        
        const response = await window.dapp.request('aptos', {
          method: 'dapp:signAndSendTransaction',
          params: [rawTxnWithSalt],
        });
  
        const txHash = response[0];
        await client.waitForTransaction(txHash);
        console.log("Donation successful, transaction hash:", txHash);
        return txHash;
      } catch (error) {
        console.error("Error in donate function:", error);
        throw error;
      }
    }
  };
  

  // const donate = async (campaignId, amount) => {
  //   if (!client || !account || !contractAddress) {
  //     console.error("Aptos client, account, or contract address not initialized");
  //     return;
  //   }

  //   if (typeof window.dapp === 'undefined') {
  //     console.error("Welldone wallet not detected. Please install the Welldone wallet extension.");
  //     return;
  //   }

  //   try {
  //     const payload = {
  //       type: "entry_function_payload",
  //       function: `${contractAddress}::campaign::donate_to_campaign`,
  //       type_arguments: [],
  //       arguments: [campaignId, amount],
  //     };

  //     const rawTx = await client.generateRawTransaction(account.address, payload);

  //     const rawTxnWithSalt = `0x${Buffer.concat([
  //       Buffer.from(sha3_256(Buffer.from('APTOS::RawTransaction', 'ascii')), 'hex'),
  //       Buffer.from(BCS.bcsToBytes(rawTx)),
  //     ]).toString('hex')}`;

  //     const response = await window.dapp.request('aptos', {
  //       method: 'dapp:signAndSendTransaction',
  //       params: [rawTxnWithSalt],
  //     });

  //     const txHash = response[0];
  //     await client.waitForTransaction(txHash);
  //     console.log("Donation successful");
  //     return txHash;
  //   } catch (error) {
  //     console.error("Error donating:", error);
  //     throw error;
  //   }
  // };


  const getCampaigns = async () => {
    if (!client || !contractAddress) {
      console.error("Aptos client or contract address not initialized");
      return [];
    }

    try {
      const resource = await client.getAccountResource(
        contractAddress,
        `${contractAddress}::campaign::CampaignStore`
      );
      return resource.data.campaigns;
    } catch (error) {
      console.error("Error fetching campaigns:", error);
      return [];
    }
  };
  const connect = async () => {
    try {
      if (window.dapp) {
        try {
          const accounts = await window.dapp.request('aptos', {
            method: 'dapp:accounts',
          });
          console.log("Connected to wallet:", accounts.aptos?.address);
          
          setAccount( accounts?.aptos); // Assuming the first account is used
          
        } catch (error) {
          console.error("Error connecting to wallet:", error);
        }
      } else {
        console.error("Welldone wallet not found");
      }
    } catch (error) {
      console.error("Error connecting wallet:", error);
    }
  };


  return (
    <StateContext.Provider 
      value={{
        connect,
        createCampaign,
        getCampaigns,
        donate,
        account,
        contractAddress
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);



