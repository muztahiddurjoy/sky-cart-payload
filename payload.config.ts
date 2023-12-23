import { buildConfig } from 'payload/config';
import dotenv from 'dotenv';
import Page from './collections/Page';
import Media from './collections/Media';
import Product from './collections/Product';
import Category from './collections/Category'
import Dashboard from './views/Dashboard/Dashboard';
import path from 'path'
import OfferSection from './collections/OfferSection';
import Slider from './collections/Slider';
dotenv.config();

export default buildConfig({
  serverURL: process.env.PAYLOAD_PUBLIC_SERVER_URL,
  admin:{
    // css: path.resolve(__dirname, './css/compiledTailwind.css'),
    components:{
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
  collections: [
    Media,
    Slider,
    Product,
    Category,
    Page,
    OfferSection
  ],
  graphQL:{
    disable:true
  }
});
