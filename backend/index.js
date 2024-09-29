const express = require('express');
const Moralis = require('moralis').default;
const app = express();
const cors = require('cors');
require('dotenv').config();
const port = 3001;

app.use(cors());
app.use(express.json());

app.get("/getTokens", async (req, res) => {
    const { userAddress, chain } = req.query;

    if (!userAddress || !chain) {
        return res.status(400).json({ error: "Missing userAddress or chain parameter" });
    }

    try {
        const tokens = await Moralis.EvmApi.token.getWalletTokenBalances({
            chain: chain,
            address: userAddress,
        });

        const jsonResponse = {
            tokens: tokens.raw
        };

        return res.status(200).json(jsonResponse);
    } catch (error) {
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