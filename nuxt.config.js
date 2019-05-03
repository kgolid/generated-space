const pkg = require('./package');
const sanityClient = require('@sanity/client');

module.exports = {
  mode: 'universal',

  /*
   ** Headers of the page
   */
  head: {
    title: pkg.name,
    script: [
      { src: 'https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.5.10/p5.js' },
      { src: 'https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.5.10/addons/p5.dom.js' }
    ],
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [
      { rel: 'icon', type: 'image/png', href: '/favicon.png' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Tajawal:400,600,800' }
    ]
  },

  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#FFFFFF' },

  /*
   ** Global CSS
   */
  css: ['@/static/global.css'],

  /*
   ** Plugins to load before mounting the App
   */
  plugins: [],

  /*
   ** Nuxt.js modules
   */
  modules: [
    [
      '@nuxtjs/google-analytics',
      {
        id: 'UA-47794848-2',
        autoTracking: {
          pageviewOnLoad: false
        }
      }
    ]
  ],

  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  },

  generate: {
    routes: function() {
      const sanity = sanityClient({
        projectId: '0jzrcm4a',
        dataset: 'production',
        useCdn: true
      });
      return sanity.fetch(`*[_type == "sketch"]{slug}[0...100]`).then(sketches => {
        return sketches.map(sketch => {
          return '/sketch/' + sketch.slug.current;
        });
      });
    }
  }
};
