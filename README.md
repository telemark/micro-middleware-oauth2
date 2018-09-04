# micro-middleware-oauth2

## Example

```js
const Router = require('router')
const finalhandler = require('finalhandler')

const oauthOptions = {
  url: 'https://namidp01.rogfk.no/nidp/oauth/nam/token',
  client_id: '6e1cf7b4-b107-42b3-9435-8fda70726c6a',
  client_secret: '6y4FUuP9BfAXeVqguNKT0ofToIwN5RdB1PaUvx_nCMiQbH9NeGq3pp0jQB9zOQ0APOxEbodzJXp',
  username: 'pwfatut',
  password: 'pwfatut'
}

const oauth2 = require('micro-middleware-oauth2')(oauthOptions)

const router = Router()

router.use(oauth2)

module.exports = (request, response) => {
  router(request, response, finalhandler(request, response))
}

```
