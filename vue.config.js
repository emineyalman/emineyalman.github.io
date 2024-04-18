const { defineConfig } = require('@vue/cli-service');

module.exports = defineConfig({
  transpileDependencies: true,
  pluginOptions: {
    configureWebpack: {
      plugins: [],
    },
    chainWebpack: (config) => {
      config.plugin("define").tap((definitions) => {
        definitions[0].__VUE_PROD_HYDRATION_MISMATCH_DETAILS__ = false;
        return definitions;
      });
    },
    },
    vuetify: {
      theme: {
        dark: true,
        themes: {
          light: {
            primary: '#1976D2',
            secondary: '#424242',
            accent: '#82B1FF',
            error: '#FF5252',
          },
          dark: {
            primary: '#2196F3',
            secondary: '#616161',
            accent: '#FF4081',
            error: '#FF5252',
          },
          night: {
            primary: '#1976D2',
            secondary: '#212121',
            accent: '#607D8B',
            error: '#FF5252',
          },
        },
      },
      icons: {
        iconfont: 'mdi',
      },
    },
  },
});
