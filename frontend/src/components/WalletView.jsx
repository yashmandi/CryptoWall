import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FiLogOut } from "react-icons/fi";
import { Tabs, Tooltip, List, Avatar } from "antd";
import logo from "../assets/image.png";

const tokens = [
  {
    symbol: <span className="text-white font-medium">ETH</span>,
    name: <span className="text-white font-medium">Ethereum</span>,
    balance: 100000000000,
    decimals: 18,
    logo: "https://cryptologos.cc/logos/ethereum-eth-logo.svg",
  },
  {
    symbol: <span className="text-white font-medium">LINK</span>,
    name: <span className="text-white font-medium">Chainlink</span>,
    balance: 100000000000,
    decimals: 18,
    logo: "https://cryptologos.cc/logos/chainlink-link-logo.svg",
  },
  {
    symbol: <span className="text-white font-medium">UNI</span>,
    name: <span className="text-white font-medium">Uniswap</span>,
    balance: 100000000000,
    decimals: 18,
    logo: "https://cryptologos.cc/logos/uniswap-uni-logo.svg",
  },
  {
    symbol: <span className="text-white font-medium">MATIC</span>,
    name: <span className="text-white font-medium">Polygon</span>,
    balance: 100000000000,
    decimals: 18,
    logo: "https://cryptologos.cc/logos/polygon-matic-logo.svg",
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
    children: (
      <>
        {tokens ? (
          <List
            bordered
            itemLayout="horizontal"
            className="w-[290px] shadow-lg shadow-[#161616] border-2 border-[#222222] rounded-lg mt-1"
            dataSource={tokens}
            renderItem={(item, index) => (
              <List.Item style={{ textAlign: "left" }}>
                <List.Item.Meta
                  avatar={<Avatar src={item.logo} />}
                  title={<span style={{ color: "white" }}>{item.symbol}</span>}
                  description={
                    <span style={{ color: "white" }}>{item.name}</span>
                  }
                />
                <div style={{ color: "white" }}>
                  {(Number(item.balance) / 10 ** Number(item.decimals)).toFixed(
                    2
                  )}{" "}
                  Tokens
                </div>
              </List.Item>
            )}
          />
        ) : (
          <>
            <span className="font-semibold text-white">
              You seem to not have any tokens yet
            </span>
            <p className="text-sm font-semibold mt-3 text-white">
              Get some coins on{" "}
              <a
                href="https://coinmarketcap.com"
                target="_blank"
                className="text-blue-300 hover:text-white hover:underline"
              >
                CoinMarketCap
              </a>
            </p>
          </>
        )}
      </>
    ),
  },
  {
    key: "4",
    label: <span className="text-white font-bold">NFTs</span>,
    children: (
      <>
        {nfts ? (
          <>
            {nfts.map((e, i) => {
              return (
                <>
                  {e && (
                    <img
                      key={i}
                      className="w-[130px] shadow-lg shadow-[#161616] border-2 border-[#222222] mb-6 rounded-lg mt-1"
                      alt="nft"
                      src={e}
                    />
                  )}
                </>
              );
            })}
          </>
        ) : (
          <>
            <>
              <span className="font-semibold text-white">
                You seem to not have any NFTs yet
              </span>
              <p className="text-sm font-semibold mt-3 text-white">
                Get some coins on{" "}
                <a
                  href="https://opensea.io"
                  target="_blank"
                  className="text-blue-300 hover:text-white hover:underline"
                >
                  OpenSea
                </a>
              </p>
            </>
          </>
        )}
      </>
    ),
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
      <div className="w-full mx-auto">
        {" "}
        {/* Increase width and center */}
        <div className="flex flex-col">
          <div className="flex justify-between mt-6 items-center text-[24px] font-semibold text-white">
            {" "}
            {/* Set font color to white */}
            <div></div>
            <div className="ml-12">My Wallet</div>
            <Tooltip title="Logout">
              <FiLogOut
                className="text-[35px] mr-3 cursor-pointer hover:bg-white hover:text-black rounded-full p-1.5"
                onClick={logout}
              />
            </Tooltip>
          </div>
          <Tooltip
            title={wallet}
            className="cursor-pointer mt-1 text-center items-center font-medium hover:underline text-[16px] text-white" // Set font color to white
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
