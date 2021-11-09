module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "safariSwap",
    titleTemplate:'%s · The Best ',
    description:'Best crptyo website',
  },
  plugins: [ {
    resolve: `gatsby-plugin-manifest`,
    options: {
      name: 'Safariswap',
      short_name: 'Safariswap',
      start_url: '/',
      title: 'Safariswap',
      background_color: '#f7f0eb',
      theme_color: '#a2466c',
      display: 'standalone',
      icon: 'src/images/logo/safariswap_logo.png',
    },
  },
    'gatsby-plugin-react-helmet',
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    'gatsby-plugin-sass'
  ],
  // plugins: [
  //   {
  //     resolve: `gatsby-source-filesystem`,
  //     options: {
  //       name: `backgrounds`,
  //       path: `${__dirname}/src/images/freelance/freelance1.png`, // wherever background images are stored
  //     },
  //   }
  // ]

};
