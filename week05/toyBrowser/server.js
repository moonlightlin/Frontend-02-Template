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
                        '#app { border: 1px solid red; padding: 5px; font-size: 14px; display: flex; width: 400px}' +
                        '#app .content { font-size: 20px; width: 100px } ' +
                      '</style>' +
                    '</head>' +
                    '<body>' +
                      '<div id="app">Hello Moon' +
                        '<div class="content">Main</div>' +
                        '<div class="content">Second</div>' +
                        '<div class="content">Third</div>' +
                      '</div>' +
                    '</body>' +
                  '</html>'
    response.end(html);
  });
}).listen(8088);

console.log('server started');