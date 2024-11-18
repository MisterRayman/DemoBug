import Components from 'unplugin-vue-components/webpack';
import {BootstrapVueNextResolver} from 'bootstrap-vue-next'

export default {
  productionSourceMap: process.env.NODE_ENV != "production",
  configureWebpack: {
    devtool: "source-map",
    plugins: [
      Components({
        resolvers: [
          BootstrapVueNextResolver(),
        ],
      }),
    ],
  },
}