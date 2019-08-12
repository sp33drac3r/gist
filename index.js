const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 3000
const db = require('./queries')

app.use(bodyParser.json())

app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)

app.get('/', (_request, response) => {
  response.json({ info: 'Gist API' })
})

app.get('/:user_id', db.gistsForUser)

app.get('/:user_id/:gist_id', db.editGistById)

app.get('/:user_id/:gist_id/revisions', db.revisionsByGistId)

app.put('/:user_id/:gist_id/edit', db.editGistById)

app.delete('/:user_id/:gist_id/delete')

app.listen(port, () => {
  console.log(`App running on port ${port}.`)
})