module.exports = {

  apiEndpoint: 'https://zero-waste.prismic.io/api/v2',

  // -- Access token if the Master is not open
  // accessToken: 'xxxxxx',

  // OAuth
  // clientId: 'xxxxxx',
  // clientSecret: 'xxxxxx',

  snipcartKey: 'NTY2NzQwYWEtNjAyZi00ZjY3LWIwMDAtMWRhNGE1ZmM0NDA2NjM2ODc1NjU1NzQxODUyMzkw',

  // -- Links resolution rules
  // This function will be used to generate links to Prismic.io documents
  // As your project grows, you should update this function according to your routes
  linkResolver: function (doc) {
    if (doc.type == 'category') {
      return '/category/' + doc.uid;
    }
    if (doc.type == 'product') {
      return '/product/' + doc.uid;
    }
    return '/';
  }
};
