import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'Sprinx Documentation',
  tagline: 'Sprinx Docs',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://docs.sprinx.xyz',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/docs',

  customFields: {
    freeTierAmount: process.env.FREE_TIER_AMOUNT || '$20',
  },


  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          routeBasePath: '/',
          showLastUpdateTime: false,
        },
        blog: false, // Disable blog feature
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themes: [
    [
      require.resolve("@easyops-cn/docusaurus-search-local"),
      {
        hashed: true,
        language: ["en"],
        highlightSearchTermsOnTargetPage: false,
        explicitSearchResultPath: true,
        docsRouteBasePath: "/",
      },
    ],
  ],

  plugins: [
    ...(process.env.POSTHOG_API_KEY ? [
      [
        "posthog-docusaurus",
        {
          apiKey: process.env.POSTHOG_API_KEY,
          appUrl: "https://us.i.posthog.com",
          enableInDevelopment: true,
        },
      ],
    ] : []),
    [
      '@docusaurus/plugin-client-redirects',
      {
        redirects: [
          // Files moved from advanced-usage to features
        ],
      },
    ],
  ],

  themeConfig: {
    image: 'img/logo.png',
    navbar: {
      title: 'Sprinx Docs',
      logo: {
        alt: 'Kilo Code Logo',
        src: 'img/logo.png',
        srcDark: 'img/logo.png',
        href: '/',
        target: '_self'
      },
      items: [
        {
          type: 'doc',
          docId: 'index',
          position: 'right',
          label: 'Docs',
        },
        {
          href: 'https://app.sprinx.xyz/',
          position: 'right',
          label: 'App',
        },
        {
          href: "https://github.com/sprinxxyz",
          label: 'GitHub',
          position: 'right',
        },
        {
          href: "https://docs.sprinx.xyz/",
          label: 'SDKs',
          position: 'right',
        },
        {
          type: 'localeDropdown',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Community',
          items: [
            {
              label: 'Discord',
              href: "#",
            },
            {
              label: 'Twitter',
              href: "https://x.com/sprinx_xyz",
            },
            {
              label: 'Blog',
              href: "https://medium.com/@sprinxxyz",
            },
          ],
        },
        {
          title: 'Developers',
          items: [
            {
              label: 'GitHub',
              href: "https://github.com/sprinxxyz",
            },
          ],
        },
        {
          title: 'Support',
          items: [
            {
              label: 'Email',
              href: "mailto:gm@sprinx.xyz",
              target: '_self',
            },
          ],
        },
      ],
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
