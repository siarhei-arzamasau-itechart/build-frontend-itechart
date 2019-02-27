module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          /*
            browser list section
          */
          // edge: '17',
          // firefox: '60',
          // chrome: '67',
          // safari: '11.1',
        },
        /*
          polyfills section
        */
        // "useBuiltIns": "entry", imports all polyfills
        useBuiltIns: 'usage', // imports only required polyfills
      },
    ],
  ],
  // list of plugins
  plugins: [
    ['@babel/plugin-proposal-pipeline-operator', { proposal: 'minimal' }],
  ],
};
