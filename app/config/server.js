const app = require('./app')

const port = process.env.PORT || 3200

//app setup
app.listen(port, function() {
console.log('Listening on port ' + port + '...')
});