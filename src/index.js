const getToken = require('fint-get-token')

module.exports = (options = {}) => {
  const tokenOptions = {
    url: options.url,
    credentials: {
      client: {
        client_id: options.client_id,
        client_secret: options.client_secret
      },
      auth: {
        username: options.username,
        password: options.password,
        grant_type: 'password'
      }
    }
  }
  return async (request, response, next) => {
    try {
      const { access_token: accessToken } = await getToken(tokenOptions)
      response.locals = { accessToken }
      next()
    } catch (error) {
      response.writeHead(401)
      response.end(error.message)
    }
  }
}
