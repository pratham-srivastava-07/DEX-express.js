"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
let ETH_BALANCE = 200;
let USDC_BALANCE = 70000;
// app.post('/liquidity-asset', (req, res)=> {
// })
app.post('/buy-asset', (req, res) => {
    const quantity = req.body.quantity;
    const updatedEthQuantity = ETH_BALANCE - quantity;
    const updatedUsdcQuantity = ETH_BALANCE * USDC_BALANCE / updatedEthQuantity;
    const paidAmount = updatedUsdcQuantity - USDC_BALANCE;
    ETH_BALANCE = updatedEthQuantity;
    USDC_BALANCE = updatedUsdcQuantity;
    res.json({
        messege: `You paid ${paidAmount} USDC for ${quantity} ETH`
    });
});
app.post('/sell-asset', (req, res) => {
    const quantity = req.body.quantity;
    const updatedEthQuantity = ETH_BALANCE - quantity;
    const updatedUsdcQuantity = ETH_BALANCE * USDC_BALANCE / updatedEthQuantity;
    const gottenAmount = updatedUsdcQuantity - USDC_BALANCE;
    ETH_BALANCE = updatedEthQuantity;
    USDC_BALANCE = updatedUsdcQuantity;
    res.json({
        messege: `You got ${gottenAmount} USDC for ${quantity} ETH`
    });
});
app.listen(3000);
