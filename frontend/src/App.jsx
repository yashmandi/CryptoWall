import { useState } from "react";
import { Select } from "antd";
import logo from "./assets/image1.png";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import CreateAccount from "./components/CreateAccount";
import WalletView from "./components/WalletView";
import RecoverAccount from "./components/RecoverAccount";

function App() {
  const [wallet, setWallet] = useState(null);
  const [seedPhrase, setSeedPhrase] = useState(null);
  const [selectedChain, setSelectedChain] = useState("0x1");
  return (
    <div className="bg-[#1B1B1B] h-[600px] w-[360px] text-white font-bold text-2xl rounded-lg">
      <header className="flex justify-between items-center pr-4 p-2 bg-white rounded-b-md border-2 shadow-md shadow-gray-700">
        <img src={logo} alt="logo" className="h-[60px] w-[220px] pr-5" />
        <Select
          value={selectedChain}
          onChange={setSelectedChain}
          options={[
            {
              label: "Ethereum",
              value: "0x10",
            },
            {
              label: "Mumbai Testnet",
              value: "0x13881",
            },
            {
              label: "Polygon",
              value: "0x89",
            },
            {
              label: "Avalanche",
              value: "0xa86a",
            },
          ]}
          className="w-[150px]" // Adjusted width for the dropdown
        />
      </header>
      {wallet && seedPhrase ? (
        <Routes>
          <Route
            path="/your-wallet"
            element={
              <WalletView
                wallet={wallet}
                setWallet={setWallet}
                seedPhrase={seedPhrase}
                setSeedPhrase={setSeedPhrase}
                selectedChain={selectedChain}
              />
            }
          />
        </Routes>
      ) : (
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/recover"
            element={
              <RecoverAccount
                setSeedPhrase={setSeedPhrase}
                setWallet={setWallet}
              />
            }
          />
          <Route
            path="/your-wallet"
            element={
              <CreateAccount
                setSeedPhrase={setSeedPhrase}
                setWallet={setWallet}
              />
            }
          />
        </Routes>
      )}
    </div>
  );
}

export default App;
