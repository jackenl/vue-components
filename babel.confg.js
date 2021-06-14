module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        loose: true,
        modules: false
      }
    ]
  ],
  // env: {
  //   utils: {
  //     presets: [
  //       [
  //         '@babel/preset-env',
  //         {
  //           loose: true,
  //           modules: false
  //         }
  //       ]
  //     ],
  //     plugins: [
  //       [
  //         'babel-plugin-module-resolver',
  //         {
  //           root: ['comps'],
  //           alias: {
  //             '@i-comps': 'vue-components/lib'
  //           }
  //         }
  //       ]
  //     ]
  //   }
  // }
};
