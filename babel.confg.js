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
  //             '@h-comps': 'vue-components/lib'
  //           }
  //         }
  //       ]
  //     ]
  //   }
  // }
};
