import { MenuEntry } from '@pancakeswap-libs/uikit'

const config: MenuEntry[] = [
  {
    label: 'Home',
    icon: 'HomeIcon',
    href: 'https://hopperswap.io/',
  },
  {
    label: 'Trade',
    icon: 'TradeIcon',
    initialOpenState: true,
    items: [
      {
        label: 'Exchange',
        href: '/swap',
      },
      {
        label: 'Liquidity',
        href: '/pool',
      },
    ],
  },
  {
    label: 'Farms',
    icon: 'FarmIcon',
    href: 'https://hopperswap.io/farms',
  },
  {
    label: 'Pools',
    icon: 'PoolIcon',
    href: 'https://hopperswap.io/pools',
  },

  // {
  //   label: 'Lottery',
  //   icon: 'TicketIcon',
  //   href: 'https://hopperswap.io/lottery'
  // },
  {
    label: 'Socials',
    icon: 'InfoIcon',
    items: [
      {
        label: 'Telegram',
        href: 'https://t.me/hopperswap',
      },
      {
        label: 'Twitter',
        href: 'https://twitter.com/hopper_swap',
      },
      {
        label: 'Facebook',
        href: 'https://www.facebook.com/hopperswap',
      },
      {
        label: 'Github',
        href: 'https://github.com/hopperswap/hopperswap',
      },
      {
        label: 'Instagram',
        href: 'https://www.instagram.com/hopper_swap/',
      },
      {
        label: 'Reddit',
        href: 'https://www.reddit.com/user/hopperswap',
      },
      {
        label: 'Medium',
        href: 'https://medium.com/@hopperswap ',
      },
      {
        label: 'Discord',
        href: 'https://discord.gg/54hdTjqCrt',
      },
    ],
  },
  {
    label: 'More',
    icon: 'MoreIcon',
    items: [
      {
        label: 'Info',
        href: 'https://hopper-swap-dex.gitbook.io/hopper-swap/',
      },
      {
        label: 'Road Map',
        href: '',
      },
      {
        label: 'NFT (Soon..)',
        href: '',
      },
      {
        label: 'LaunchPad (Soon..)',
        href: '',
      },
      {
        label: 'Prediction (Soon..)',
        href: '',
      },
    ],
  },
]

export default config
