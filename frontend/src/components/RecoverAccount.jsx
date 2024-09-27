import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Input } from "antd";
import { ethers } from "ethers";
import { BulbOutlined } from "@ant-design/icons";

const { TextArea } = Input;

const RecoverAccount = ({ setWallet, setSeedPhrase }) => {
  const navigate = useNavigate();
  const [typedSeed, setTypedSeed] = useState("");
  return (
    <div>
      <div className="flex flex-col items-center justify-center p-10">
        <BulbOutlined className="text-orange-500 text-6xl mb-4" />
        <p className="text-sm text-center ">
          Type your seed phrase below to recover your wallet. (It should 12
          words seperated with spaces)
        </p>
        <textarea
          value={typedSeed}
          onChange={(e) => setTypedSeed(e.target.value)}
          rows="4"
          placeholder="Type your seed phrase here..."
          className="w-[300px] mt-4 border-2 bg-[#262626] text-sm p-3 rounded-md font-medium"
        />
        <h4
          disabled={
            typedSeed.split(" ").length !== 12 || typedSeed.slice(-1) === " "
          }
          className={`text-[15px] mt-6 bg-white text-gray-800 px-2.5 cursor-pointer border-white border-2 rounded-md ${
            typedSeed.split(" ").length !== 12 || typedSeed.slice(-1) === " "
              ? "cursor-not-allowed opacity-60"
              : "hover:bg-[#1B1B1B] hover:text-white"
          }`}
          onClick={() => recoverWallet()}
        >
          Recover Wallet
        </h4>

        <div
          className="text-[14px] mt-24 text-center ml-1.5 bg-[#1B1B1B] text-white px-2 cursor-pointer hover:bg-white border-2 hover:text-black rounded-md"
          onClick={() => navigate("/")}
        >
          Back to Home
        </div>
      </div>
    </div>
  );
};

export default RecoverAccount;
