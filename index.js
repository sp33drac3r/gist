const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 3000
const db = require('./queries')

const gist = require('./proto/gist_pb')

let message = new gist.Gist()

message.setId('thisismyid')
message.setUserId('thisismyuserid')

console.log(message)

var bytes = message.serializeBinary();

var message2 = gist.Gist.deserializeBinary(bytes);

console.log(message2.getId())

// app.use(bodyParser.json())

// app.use(
//   bodyParser.urlencoded({
//     extended: true,
//   })
// )

// app.get('/', (_request, response) => {
//   response.json(message2)
// })

// app.listen(port, () => {
//   console.log(`App running on port ${port}.`)
// })

// app.get('/:user_id', db.gistsForUser)

// app.get('/:user_id/:gist_id', db.editGistById)

// app.get('/:user_id/:gist_id/revisions', db.revisionsByGistId)

// app.put('/:user_id/:gist_id/edit', db.editGistById)

// app.delete('/:user_id/:gist_id/delete')