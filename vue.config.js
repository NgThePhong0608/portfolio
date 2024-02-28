const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
    transpileDependencies: true,

    pluginOptions: {
        vuetify: {
            // https://github.com/vuetifyjs/vuetify-loader/tree/next/packages/vuetify-loader
        },
    },
    publicPath:
        process.env.NODE_ENV === "production"
            ? "/portfolio/" // Thay tên repository của các bạn vào đây nhé
            : "/",
});
