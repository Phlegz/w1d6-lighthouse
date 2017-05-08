var https = require('https')

var options = {
  host: 'stream-large-file.herokuapp.com',
  path: '/give-me-stuff-now'
}

var callback = (response) => {
  response.on('data', (chunk) => {
  console.log('[-- CHUNK OF LENGTH ' + chunk.length + ' --]');
  console.log(chunk.toString());
});
}

https.request(options,callback).end()
