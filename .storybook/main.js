const preprocess = require('svelte-preprocess');



const sveltekitAlias = (config) => {
  // Set SvelteKit aliases.
  config.resolve.alias = {
    ...config.resolve.alias,
    svelte: `${__dirname}/../node_modules/svelte`,
    $lib: `${__dirname}/../src/lib`,
  };
  return config;
};

module.exports = {
	stories: [
		'./**/*.stories.mdx',
		'../src/**/*.stories.@(js|jsx|ts|tsx|svelte|mdx)',
	],
	addons: [
		'@storybook/addon-links',
		'@storybook/addon-essentials',
    '@storybook/addon-svelte-csf',
    {
      name: '@storybook/addon-postcss',
      options: {
        cssLoaderOptions: {
          // When you have splitted your css over multiple files
          // and use @import('./other-styles.css')
          importLoaders: 1,
        },
        postcssLoaderOptions: {
          // When using postCSS 8
          implementation: require('postcss'),
        },
      },
    },
	],
	svelteOptions: {
		preprocess: preprocess(),
  },
  webpackFinal: async (config) => {
    config = sveltekitAlias(config);
    return config;
  },
};
