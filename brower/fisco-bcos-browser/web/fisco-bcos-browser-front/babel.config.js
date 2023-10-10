module.exports = {
  presets: [

    "@vue/babel-preset-jsx",
    ["@babel/preset-env", {
      modules: false,
      corejs: 3,
      useBuiltIns: "usage",
      debug: false
    }]
  ],

  plugins: [
    "@babel/plugin-transform-arrow-functions",
    "@babel/plugin-proposal-optional-chaining",
    
  ]
}
