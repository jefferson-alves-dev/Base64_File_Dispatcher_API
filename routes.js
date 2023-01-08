const route = require('express').Router();
const path = require('path');
const indexRoute = require(routePathResolve('indexRoute'));
const fileRoute = require(routePathResolve('fileRoute'));

route.use('/', indexRoute);
route.use('/file', fileRoute);

function routePathResolve(fileName) {
  return path.resolve(__dirname, 'src', 'routes', String(fileName));
}

module.exports = route;
