const express = require("express");
const Moralis = require("moralis").default;
const app = express();
const cors = require("cors");
require("dotenv").config();
const port = 3001;

app.use(cors());
app.use(express.json());

app.get("/getTokens", async (req, res) => {
  const { userAddress, chain } = req.query;

  // Input validation
  if (!userAddress || !chain) {
    return res.status(400).json({ error: "Missing userAddress or chain parameter" });
  }

  try {
    // Fetch wallet token balances
    const tokens = await Moralis.EvmApi.token.getWalletTokenBalances({
      chain: chain,
      address: userAddress,
    });

    // Fetch wallet NFTs
    const nfts = await Moralis.EvmApi.nft.getWalletNFTs({
      chain: chain,
      address: userAddress,
      mediaItems: true,
    });

    // Log the NFTs received
    console.log("NFTs:", nfts.raw.result);

    // Construct the response
    const jsonResponse = {
      tokens: tokens.raw,
      nfts: nfts.raw.result,
    };

    // Return the response
    return res.status(200).json(jsonResponse);
  } catch (error) {
    // Catch any errors from the Moralis API
    console.error("Error fetching tokens or NFTs:", error);
    return res.status(500).json({ error: error.message });
  }
});

Moralis.start({
  apiKey: process.env.MORALIS_KEY,
}).then(() => {
  app.listen(port, () => {
    console.log("Listening on port: " + port);
  });
});