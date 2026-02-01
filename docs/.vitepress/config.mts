import { defineConfig } from 'vitepress'
import albrooksPriceActionSidebar from './albrooksPriceActionSidebar'
import tradingSystemSidebar from './tradingSystemSidebar'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "筝观潮汐",
  description: "于纷繁市声中，捕捉真心见解。观资金潮汐，析交易节奏",
  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      { text: 'Brooks价格行为', link: '/albrooks-price-action' },
      { text: '交易系统', link: '/trading-system/期货短线交易系统v2版' },
    ],
    sidebar: {
      '/albrooks-price-action/': albrooksPriceActionSidebar,
      '/trading-system/': tradingSystemSidebar,
    },
    outline: [2, 3],
  },
})
