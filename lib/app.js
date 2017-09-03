const os = require('os');
const v8 = require('v8');
const morgan = require('morgan');
const express = require('express');
const pkg = require('../package.json');
const app = express();

if (process.env.NODE_ENV !== 'test') {
  if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'));
  } else {
    app.use(morgan('combined'));
  }
}

let healthy = true;

app.get('/', function (req, res) {
  res.json({ server: os.hostname() });
});

app.get('/health', function (req, res) {
  if (healthy) {
    if (req.query.full === 'true') {
      res.json({
        version: pkg.version,
        arch: os.arch(),
        platform: os.platform(),
        host: os.hostname(),
        nodeVersion: process.versions.node,
        memoryUsage: process.memoryUsage(),
        uptime: process.uptime(),
        totalMem: os.totalmem(),
        freeMem: os.freemem(),
        loadAvg: os.loadavg(),
        heap: v8.getHeapStatistics(),
      });
    } else {
      res.json({ status: 'OK' });
    }
  } else {
    res.status(500).json({ status: 'ERROR' });
  }

});

app.get('/env', function (req, res) {
  res.json(process.env);
});

app.post('/toggle-health', function (req, res) {
  healthy = !healthy;
  res.json({ message: 'Service marked ' + (healthy ? 'healthy' : 'unhealthy') });
});

module.exports = app;
