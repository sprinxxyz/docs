---
description: 4 Types of Rewards on Sprinx Protocol
---

# Rewards
---

### Emissions

Represent `$SPX` distributed to liquidity pool stakers. The amount of `$SPX` distributed towards every pool is proportional to the voting power received from the voters every epoch.

These rewards are streaming and are available for claim as these accrue.

### Fees

Represent liquidity pool trading fees distributed to voters in pool tokens ( e.g., if the pool is `vAMM-SPX/USDC` the distributed tokens are `$SPX` and `$USDC`).

The tokens are streaming proportionally to the voting power cast by a voter and the accrued amount of trading fees.

These rewards are available for claim as they accrue. They do not need to be claimed each epoch.

### Bribes

In addition to the fees, liquidity pools allow external rewards from anyone (known as _bribes_). Bribes can be added to all _gauged_ pools and are distributed _only_ to voters on that pool, proportionally to their share of pool votes.

Bribes can be deposited at any point in the epoch.

These rewards are available for claim after the epoch flips (after Wednesday 23:59 UTC), and are proportional to the voting power cast by a voter (`$veSPX`).

### Rebases

Represent `$veSPX` distributed to `$veSPX` holders in order to reduce the voting power dilution.

These rewards are available for claim as these accrue and are streaming proportionally to all `$veSPX` holders.

---