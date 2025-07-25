---
description: Voting on Sprinx Protocol
---

# Voting
---

`$veSPX` holders decide which liquidity pools receive emissions in a given epoch by voting on their preferred liquidity pool _gauges_. `$SPX` emissions will be distributed proportionally to the total votes a liquidity pool receives.

In return, voters receive **100%** of the trading fees and bribes collected through the liquidity pool they vote for.

Voting for gauges, or in fact any action related to the `$veSPX` NFT is allowed only once per epoch. This means that calling `Voter.vote()` (used to cast the votes for the current epoch in order to direct emissions and earn bribes) or `Voter.reset()` (used for resetting an NFT vote state and usually required before transfering or merging it into another `$veSPX` NFT) counts as an action for the current epoch.

While limiting the protocol participants to one action per epoch is not ideal, it does make the protocol safer against potential exploitative behaviour.

Unused `veSPX` voting power is still taken into account as we calculate the weight of the vote upon epoch flip and based on the locked vesting slope.
 > Please make sure you always cast 100% of your voting power to avoid unexpected outcomes!

---