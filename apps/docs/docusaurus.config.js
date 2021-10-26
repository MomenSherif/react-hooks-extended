const lightCodeTheme = require('prism-react-renderer/themes/nightOwl');
const darkCodeTheme = require('prism-react-renderer/themes/nightOwl');

module.exports = {
  title: 'React Hooks Extended',
  tagline: 'The tagline of my site',
  url: 'https://momensherif.github.io',
  baseUrl: '/react-hooks-extended/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'MomenSherif', // Usually your GitHub org/user name.
  projectName: 'react-hooks-extended', // Usually your repo name.
  trailingSlash: false,
  themeConfig: {
    navbar: {
      title: 'React Hooks Extended',
      logo: {
        alt: 'React',
        src: 'img/logo.svg',
      },
      items: [
        {
          href: 'https://github.com/MomenSherif/react-hooks-extended',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      copyright: `Made with ❤, React, TypeScript, Nx and Docusaurus`,
    },
    prism: {
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          routeBasePath: '/',
          // Please change this to your repo.
          editUrl:
            'https://github.com/MomenSherif/react-hooks-extended/tree/master/apps/docs/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
  themes: ['@docusaurus/theme-live-codeblock'],
};
