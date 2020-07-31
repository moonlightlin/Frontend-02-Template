const http = require('http');

http.createServer((request, response) => {
  let body = [];
  request.on('error', (err) => {
    console.error(err);
  }).on('data', (chunk) => {
    body.push(chunk);
  }).on('end', () => {
    body = Buffer.concat(body).toString();
    response.writeHead(200, { 'Content-Type': 'text/html', 'custom': 'moon' });

    const html =  '<html>' +
                    '<head>' +
                      '<meta charset="utf-8"/>' +
                      '<meta name="viewport" content="width=device-width,initial-scale=1.0"/>' +
                      '<title>Test</title>' +
                      '<style>' +
                        '#app { border: 1px solid red; padding: 5px; }' +
                      '</style>' +
                    '</head>' +
                    '<body>' +
                      '<div id="app" style="color: blue; font-size: 20px;">Hello Moon</div>' +
                    '</body>' +
                  '</html>'
    response.end(html);
  });
}).listen(8088);

console.log('server started');