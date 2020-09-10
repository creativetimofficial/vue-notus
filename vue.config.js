// vue.config.js
module.exports = {
  runtimeCompiler: true,
  publicPath:
    process.env.NODE_ENV === "production" ? "/vue-tailwind-webapp/" : "/",
};
