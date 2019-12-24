const contentful = require('contentful')

module.exports = {
  createClient(params) {
    return contentful.createClient({
      space: process.env.CTFL_SPACE
        ? process.env.CTFL_SPACE
        : params.CTFL_SPACE,
      accessToken: process.env.CTFL_ACCESS_TOKEN
        ? process.env.CTFL_ACCESS_TOKEN
        : params.CTFL_ACCESS_TOKEN
    })
  }
}
