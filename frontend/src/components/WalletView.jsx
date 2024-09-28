import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FiLogOut } from "react-icons/fi";
import { Tabs, Tooltip } from "antd";

const tokens = [
  {
    symbol: "ETH",
    name: "Ethereum",
    balance: 100000000000,
    decimals: 18,
  },
  {
    symbol: "LINK",
    name: "Chainlink",
    balance: 100000000000,
    decimals: 18,
  },
  {
    symbol: "UNI",
    name: "Uniswap",
    balance: 100000000000,
    decimals: 18,
  },
  {
    symbol: "MATIC",
    name: "Polygon",
    balance: 100000000000,
    decimals: 18,
  },
];

const nfts = [
  "https://nft-preview-media.s3.us-east-1.amazonaws.com/evm/0x1/0xd774557b647330c91bf44cfeab205095f7e6c367/0xfb76f9ef3adabc27d77c615959f9e22dea24ac7d6a10af3458b3481e5f5e0f10/high.png",
  ,
  "https://nft-preview-media.s3.us-east-1.amazonaws.com/evm/0x1/0x749f5ddf5ab4c1f26f74560a78300563c34b417d/0x90cae88ffc909feab8e4df76abd0652dee98b7bffab29597d898260d91c20aa1/high.jpeg",
];

const items = [
  {
    key: "3",
    label: <span className="text-white font-bold">Tokens</span>,
    children: <>Tokens</>,
  },
  {
    key: "4",
    label: <span className="text-white font-bold">NFTs</span>,
    children: <>NFTs</>,
  },
  {
    key: "5",
    label: <span className="text-white font-bold">Transactions</span>,
    children: <>Transactions</>,
  },
];

function WalletView({
  wallet,
  setWallet,
  seedPhrase,
  setSeedPhrase,
  selectedChain,
}) {
  const navigate = useNavigate();

  function logout() {
    setSeedPhrase(null);
    setWallet(null);
    navigate("/");
  }

  return (
    <>
      <div>
        <div className="flex justify-end p-3">
          <Tooltip title="Logout">
            <FiLogOut className="text-[24px] cursor-pointer" onClick={logout} />
          </Tooltip>
        </div>

        <div className="flex flex-col">
          <div className="text-[24px] whitespace-pre-wrap text-center items-center font-semibold">
            My Wallet
          </div>
          <Tooltip
            title={wallet}
            className="cursor-pointer mt-1 text-center items-center font-medium text-[16px]"
          >
            {wallet.slice(0, 4)}...{wallet.slice(38)}
          </Tooltip>
        </div>
        <hr className="my-4 border-gray-600" />
        <Tabs
          defaultActiveKey="1"
          items={items}
          className="w-full text-center items-center"
          style={{ color: "white" }}
        />
      </div>
    </>
  );
}

export default WalletView;
