import React from "react";
import { ExclamationCircleOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { ethers } from "ethers";

const CreateAccount = () => {
  const [newSeedPhrase, setNewSeedPhrase] = useState("");
  const navigate = useNavigate();

  function generateWallet() {
    const mnemonic = ethers.Wallet.createRandom().mnemonic.phrase;
    setNewSeedPhrase(mnemonic);
  }

  return (
    <div>
      <div className="flex flex-col items-center justify-center p-10">
        <ExclamationCircleOutlined className="text-orange-500 text-6xl mb-4" />
        <p className="text-sm text-center ">
          Once you generate the seed phrase, save it securely in order to
          recover your wallet in future.
        </p>
        <h4
          className="text-[15px] mt-12 bg-white text-gray-800 px-2.5 cursor-pointer hover:bg-[#1B1B1B] border-white border-2 hover:text-white rounded-md"
          onClick={() => generateWallet()}
        >
          Generate a Seed Phrase{" "}
        </h4>
        <div className="w-[300px] mt-4 border-2 bg-[#262626] text-sm p-3 rounded-md font-medium">
            {newSeedPhrase && <pre className="text-white whitespace-pre-wrap text-center items-center">{newSeedPhrase}</pre>}
        </div>
        <h4
          className="text-[15px] mt-6 bg-white text-gray-800 px-2.5 cursor-pointer hover:bg-[#1B1B1B] border-white border-2 hover:text-white rounded-md"
          //   onClick={() => setWalletAndMnemonic()}
        >
          Open a New Wallet{" "}
        </h4>
        <div
          className="text-[14px] mt-12 text-center ml-1.5 bg-[#1B1B1B] text-white px-2 cursor-pointer hover:bg-white border-2 hover:text-black rounded-md"
          onClick={() => navigate("/")}
        >
          Back to Home
        </div>
      </div>
    </div>
  );
};

export default CreateAccount;
