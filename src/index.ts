import express from "express";

const  app = express();

app.use(express.json());

let ETH_BALANCE = 200;
let USDC_BALANCE = 70000;

// app.post('/liquidity-asset', (req, res)=> {

// })

app.post('/buy-asset', (req, res)=> {
    const quantity = req.body.quantity;
    const updatedEthQuantity = ETH_BALANCE - quantity;
    const updatedUsdcQuantity = ETH_BALANCE * USDC_BALANCE / updatedEthQuantity;
    const paidAmount = updatedUsdcQuantity - USDC_BALANCE;

    ETH_BALANCE = updatedEthQuantity;
    USDC_BALANCE  = updatedUsdcQuantity;

    res.json({
        messege: `You paid ${paidAmount} USDC for ${quantity} ETH`
    })
})

app.post('/sell-asset', (req, res)=> {
    const quantity = req.body.quantity;
    const updatedEthQuantity = ETH_BALANCE + quantity;
    const updatedUsdcQuantity = ETH_BALANCE * USDC_BALANCE / updatedEthQuantity;
    const gottenAmount = USDC_BALANCE - updatedUsdcQuantity;

    ETH_BALANCE = updatedEthQuantity;
    USDC_BALANCE  = updatedUsdcQuantity;

    res.json({
        messege: `You got ${gottenAmount} USDC for ${quantity} ETH`
    })
})

app.listen(3000)