# Pools
---

The core functionality of Sprinx is to allow users to trade digital assets in a secure way, with very low fees and low slippage.

Slippage is the difference between the current market price of an asset and the price at which the actual trade/transaction is executed. This difference could result in a smaller amount (higher price paid) or a higher amount (smaller price paid) of desired tokens returned from a trade.

To provide access to the best rates on the market, we identified two types of assets:
 - correlated - for example stable coins (`$USDC`, `$USDT`, etc.)
 - uncorrelated - for example `$DIA` and `$QUICK`

Sprinx offers two different liquidity pool types based on token pair needs, Stable Pools and Volatile Pools.

The protocol router evaluates both pool types to determine the most efficient price quotation and trade execution route available. To protect against flashloan attacks, the router will use 30-minute TWAPs (time-weighted average prices). The router doesn't require upkeep (external maintenance).

The deeper the liquidity of a given pool (higher value locked), the smaller the slippage it will offer.

## Stable Pools

Stable pools are designed for assets which have little to no volatility. This means that the formula used for pricing the assets allows for low slippage even on large traded volumes. 
> x³y + y³x ≥ k

## Volatile Pools

Volatile pools are designed for assets with high price volatility. These pools use a generic AMM formula.
> x × y ≥ k

## A Visual Representation Of The Formulas

The mathematical formulas are used to keep the total pool liquidity the same at all times.

Refer to this [link](https://www.desmos.com/calculator/vx6bvczwiy) for a visual comparison between the stable (red) and volatile (green) AMM pricing equations, where:
 - `x` is the amount of first asset in the pool
 - `y` is the amount of second asset in the same pool
 - `k` is a fixed constant

## Fees

On Sprinx the trading fees are kept in the originally traded tokens (*if you trade **$USDC** and **$SPX** the fees will be kept in the same tokens*).

The trading fees are **0.02%** (stable pools) and **0.2%** (volatile pools) by default, and all can be adjusted for up to **0.3%.**

The Volatile and Stable liquidity pools can be assigned different trading fees on Sprinx Protocol.

## More Pool types incoming

We believe these two pools are simple and efficient enough to help users get started on Somnia. As we upgrade our protocol, we will introduce more pool types, like concentrated liquidity and multi-token pools.

---