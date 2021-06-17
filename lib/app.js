const net = require('net');
const parseRequest = require('./utils/parseRequest');
const createResponse = require('./utils/createResponse');
const fsPromises = require('fs').promises;

const app = net.createServer(socket => {
  socket.on('data', data => {
    const request = parseRequest(data.toString());
    if(request.path === '/' && request.method === 'GET') {
      socket.end(createResponse({ body: 'hi', status: '200 OK', contentType: 'text/plain' }));
    } 
    
    else if(request.path === '/echo' && request.method === 'POST') {
      socket.end(createResponse({ body: request.body, status: '200 OK', contentType: 'text/plain' }));
    } 
    
    else if(request.path === '/red' && request.method === 'GET') {
      socket.end(createResponse({ body: '<h1>red</h1>', status: '200 OK', contentType: 'text/html' }));
    }

    else if(request.path === '/green' && request.method === 'GET') {
      socket.end(createResponse({ body: '<h1>green</h1>', status: '200 OK', contentType: 'text/html' }));
    }

    else if(request.path === '/blue' && request.method === 'GET') {
      socket.end(createResponse({ body: '<h1>blue</h1>', status: '200 OK', contentType: 'text/html' }));
    } 

    else if(request.path === '/index.html' && request.method === 'GET') {
      fsPromises.readFile('./public/index.html', 'utf8')
        .then(content => socket.end(createResponse({ body: content, status: '200 OK', contentType: 'text/html' })))
        .catch(() => socket.end(createResponse({ body: 'Not Found', status: '404 Not Found', contentType: 'text/plain' })));
    }

    else socket.end(createResponse({ body: 'Not Found', status: '404 Not Found', contentType: 'text/plain' }));
  });
});

module.exports = app;
