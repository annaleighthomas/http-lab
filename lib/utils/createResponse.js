module.exports = ({ body = '', contentType = 'text/html', status = '200 OK' }) => {
  const bodyLength = body.length;
 
  return `HTTP/1.1 ${status}\nAccept-Ranges: bytes\nContent-Length: ${bodyLength}\nContent-Type: ${contentType}\r\n\r\n${body}`;
};
