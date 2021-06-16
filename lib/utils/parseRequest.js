module.exports = rawRequest => {

  const splitString = rawRequest.split(' ');
  const methodValue = splitString[0];
  const pathValue = splitString[1];
  const bodyVar = rawRequest.split('\r\n\r\n');
  const bodyValue = bodyVar[1];

  return { method: methodValue, path: pathValue, body: bodyValue };
};
