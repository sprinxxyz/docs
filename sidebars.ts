import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebars: SidebarsConfig = {
  tutorialSidebar: [
    "index",
    {
      type: "category",
      label: "Protocol Design",
      items: [
        "protocol-design/overview",
        {
          type: "doc",
          id: "protocol-design/liquidity-market",
          label: "Liquidity Market",
        },
        {
          type: "doc",
          id: "protocol-design/pools",
          label: "Pools",
        },
        {
          type: "doc",
          id: "protocol-design/voting",
          label: "Voting",
        },
        {
          type: "doc",
          id: "protocol-design/rewards",
          label: "Rewards",
        },
      ],
    },
    {
      type: "doc",
      id: "tokenomics",
      label: "Tokenomics",
    },
    {
      type: "doc",
      id: "contract-address",
      label: "Contract Address",
    },
    {
      type: "doc",
      id: "governance",
      label: "Governance",
    },
    {
      type: "doc",
      id: "disclaimer",
      label: "Legal Disclaimer",
    },
  ],
};

export default sidebars;
