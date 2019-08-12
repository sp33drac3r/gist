const Pool = require('pg').Pool

const pool = new Pool({
  user: 'rileyscheid',
  host: 'localhost',
  database: 'gist',
  port: 5432,
})

const gistsByUserId = (request, response) => {
  const user_id = request.params.user_id
  pool.query('SELECT * FROM gists WHERE user_id = $1', [user_id], (error, results) => {
    if (error) {
      throw error
    }

    // return {
    //   user_id: user_id,
    //   gists: [
    //     id: gist_id,
    //     gist_description: description,
    //     url: resorce_request_url,
    //     created_at: timestamp,
    //     last_active: timestamp
    //   ]
    // }

    response.status(200).json(results.rows)
  })
}

const gistById = (request, response) => {
  const gist_id = request.params.gist_id
  pool.query('SELECT * FROM gists WHERE gist_id = $1', [gist_id], (error, results) => {
    if (error) {
      throw error
    }

    response.status(200).json(results.rows)

    // return {
    //   id: gist_id,
    //   files: [
    //     {
    //       id: file_id,
    //       name: file_name,
    //       url: resource_request_url,
    //       sample: front_of_blob_text
    //     }
    //   ]
    // }


  })
}

const revisionsByGistId = (request, response) => {
  const gist_id = request.params.gist_id
  pool.query('SELECT * FROM revisions WHERE gist_id = $1', [gist_id], (error, results) => {
    if (error) {
      throw error
    }

    response.status(200).json(results.rows)
  })
}

const editGistById = (request, response) => {
  const gist_id = request.params.gist_id

}

const deleteGistById = (request, response) => {
  const gist_id = request.params.gist_id
  pool.quere('SOMETHHING', [gist_id], (error, results) => {
    if (error) {
      throw error
    }

    response.status(200).json(results.rows)
  })
}

module.exports = {
  gistsByUserId,
  gistById,
  revisionsByGistId,
  editGistById,
  deleteGistById
}