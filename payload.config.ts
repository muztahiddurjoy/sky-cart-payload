import { buildConfig } from 'payload/config';
import dotenv from 'dotenv';
import Page from './collections/Page';
import Media from './collections/Media';
import Product from './collections/Product';
import Category from './collections/Category'
import Dashboard from './views/Dashboard/Dashboard';
import path from 'path'
// import OfferSection from './collections/OfferSection';
import Slider from './collections/Slider';
import VariantCollection from './collections/Variant';
import Shades from './collections/Shade';
import Offer from './global/OfferSection';
import Customer from './collections/Customer';
import Sales from './collections/Sales';
import Social from './global/Socials';
import { Logo } from './views/Logo';
dotenv.config();

export default buildConfig({
  serverURL: process.env.PAYLOAD_PUBLIC_SERVER_URL,
  admin:{
    // css: path.resolve(__dirname, './css/compiledTailwind.css'),
    meta:{
      titleSuffix: '- SkyCart',
      favicon: '/logo/favicon.ico',
      ogImage: '/logo/logo.png',
    },
    components:{
      graphics:{
        Icon:Logo,
        Logo:Logo
      },
      views:{
        Dashboard:Dashboard
      }
    },
    webpack: (config) => {
      return {
        ...config,
        module: {
          ...config.module,
          rules: [
            ...config.module.rules,
            {
              test: /\tailwind.css$/i,
              use: ['css-loader', 'postcss-loader'],
            },
          ],
        },
      }
    },
  },
  globals:[
    Social,
    Offer
  ],
  collections: [
    Sales,
    Media,
    Slider,
    Product,
    Category,
    Customer,
    VariantCollection,
    Shades
  ],
  graphQL:{
    disable:true
  }
});
