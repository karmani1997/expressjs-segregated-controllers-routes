const {app} = require('./app')
const port = 3000
process.env.NODE_ENV='production'


app.listen(port, () => {
    console.log(`app is listening on port ${port}`)
});
