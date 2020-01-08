const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const history = require('connect-history-api-fallback');
const serveStatic = require('serve-static');
const path = require("path")
const pool = require('./database.js')

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());
app.use(serveStatic(path.join(__dirname, '..', '/dist')));
// Inserted this so that client-side routing works
app.use(history({
  verbose: true
}));
// Documentation for connect-history-api-fallback requires this again...
app.use(serveStatic(path.join(__dirname, '..', '/dist')));

// function for errors on database connections
function dbConnError(res, err) {
  console.error('Error acquiring client', err, err.message, err.stack);
  res.status(400);
  res.send(err);
}

// function for query errors
function queryError(res, err) {
  console.log('Query error', err, err.message, err.stack);
  res.status(400);
  res.send(err);
}

app.get('/getEventInfo', (req, res) => {
  let id = req.query['id']
  pool.connect(function (err, client, done) {
    if (err) {
      dbConnError(res, err);
      return;
    }
    client.query(`SELECT * FROM events WHERE id=${id};`, //do the query
      (err, resp) => {
        if (err) {
          queryError(res, err)
          return;
        }
        if (req.timedout) return
        console.log(resp.rows)
        // Successful get request
        let response = {
          eventInfo: resp.rows[0]
        }
        res.status(200)
        res.json(response)
      });
      client.release()
  })
})

app.get('/getMainEvents', (req, res) => {
  pool.connect(function (err, client, done) {
    if (err) {
      dbConnError(res, err);
      return;
    }
    client.query(`SELECT * FROM events WHERE type='main';`, //do the query
      (err, resp) => {
        if (err) {
          queryError(res, err)
          return;
        }
        if (req.timedout) return
        console.log(resp.rows)
        // Successful get request
        let response = {
          events: resp.rows
        }
        res.status(200)
        res.json(response)
      });
      client.release()
  })
})

app.get('/getAllEvents', (req, res) => {
  pool.connect(function (err, client, done) {
    if (err) {
      dbConnError(res, err);
      return;
    }
    client.query(`SELECT * FROM events WHERE type!='main';`, //do the query
      (err, resp) => {
        if (err) {
          queryError(res, err)
          return;
        }
        if (req.timedout) return
        console.log(resp.rows)
        // Successful get request
        let musicEvents = []
        let sportEvents = []
        let techEvents = []
        for(let i = 0; i < resp.rows.length; i++) {
          if(resp.rows[i].type = 'music') {
            musicEvents.push(resp.rows[i])
          } else if (resp.rows[i].type = 'sport') {
            sportEvents.push(resp.rows[i])
          } else {
            techEvents.push(resp.rows[i])
          }
        }
        let response = {
          musicEvents: musicEvents,
          sportEvents: sportEvents,
          techEvents: techEvents
        }
        res.status(200)
        res.json(response)
      });
      client.release()
  })
})

app.post('/postEvent', async (req, res) => {
  let topic = req.body.topic
  let img = req.body.img
  let host = req.body.host
  let description = req.body.description
  let position = req.body.position
  let type = req.body.type

  let query = `INSERT INTO events(topic, description, img, host, guests, time, position, type) VALUES ('${topic}', '${description}', '${img}', '${host}', 10, to_timestamp(${Date.now()} / 1000.0), '${position}', '${type}') RETURNING id;`
  console.log(query)

  //connect to the db
  pool.connect(function (err, client, done) {
    if (err) {
      dbConnError(res, err);
      return;
    }
    client.query(query, //do the query
      (err, resp) => {
        if (err) {
          queryError(res, err);
          return;
        }

        res.status(200)
        res.json(resp.rows[0].id)
      });
      client.release()
  });
});


let port = process.env.PORT || 4000;

app.listen(port, function(){
  console.log('Node js at port', port);
});
