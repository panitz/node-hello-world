const app = require('./lib/app');

const PORT = process.env.PORT || 3000;

app.listen(3000, '0.0.0.0', function () {
  console.log(`Service listening on port ${PORT}.`);
});
