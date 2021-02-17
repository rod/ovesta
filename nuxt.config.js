const metaTitle = 'Rod Dennis — Design loving developer based in Chicago'
const metaDescription = 'The personal website of Rod Dennis, a developer based in Chicago. Cares about user interfaces and experiences, design systems, and such and so on. '
const metaWebsite = 'https://rod.sh/'
const metaImage = 'https://rod.sh/meta.png'

export default {
  env: {
    baseUrl: process.env.BASE_URL || "http://localhost:3000",
  },
  head: {
    title: metaTitle,
    htmlAttrs: {
      lang: "en",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: 'title',
        name: 'title',
        content: metaTitle
      },
      {
        hid: "description",
        name: "description",
        content: metaDescription,
      },
      // Open graph / Facebook
      { hid: "og:type", property: "og:type", content: "website" },
      { hid: "og:url", property: "og:url", content: metaWebsite },
      {
        hid: "og:title",
        property: "og:title",
        content: metaTitle,
      },
      {
        hid: "og:description",
        property: "og:description",
        content: metaDescription,
      },
      {
        hid: "og:image",
        property: "og:image",
        content: metaImage,
      },

      // Twitter
      {
        hid: "twitter:card",
        property: "twitter:card",
        content: "summary_large_image",
      },
      {
        hid: "twitter:url",
        property: "twitter:url",
        content: metaWebsite,
      },
      {
        hid: "twitter:title",
        property: "twitter:title",
        content: metaTitle,
      },
      {
        hid: "twitter:description",
        property: "twitter:description",
        content: metaDescription,
      },
      {
        hid: "twitter:image",
        property: "twitter:image",
        content: metaImage,
      },
    ],
    script: [
      {
        acync: true,
        src: 'https://www.googletagmanager.com/gtag/js?id=G-GLKNN0JW20',
      },
      {
        innerHMTL: "window.dataLayer = window.dataLayer || [];function gtag(){dataLayer.push(arguments);}gtag('js', new Date());gtag('config', 'G-GLKNN0JW20');"
      }
    ]
  },
};
