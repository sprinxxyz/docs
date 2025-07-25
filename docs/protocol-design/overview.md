# Overview
---
Sprinx uses **SPX** as a utility token and **veSPX** as governance token.

  **SPX** is used for rewarding liquidity providers through emissions. **veSPX** is used for governance. Any **SPX** holder can vote-escrow their tokens for up to 4 years and receive a **veSPX** NFT in the protocol

## Core Mechanics

The protocol is designed to enable token swaps and generate fees (from **Traders**) by attracting liquidity.

Every epoch liquidity providers (**LPs**) receive **SPX** token emissions proportionally to the votes the pools accumulate. Only staked (in the protocol gauges) liquidity receive emissions.

Participants can lock their **SPX** to be able to vote on the next epoch distribution of emissions, becoming **veSPX Voters**. **veSPX Voters** are rewarded (proportionally to locked amounts) for their votes with 100% of the protocol trading fees from the previous epoch and any additional voters incentives from the current epoch.

Protocols on Somnia looking to incentivize liquidity can incentivize **veSPX** voters (i.e., deposit token rewards for voters of a pool) and accumulate **veSPX** to vote directly.

---