const express = require('express');
const {startDatabase,isConnected} = require( './db' );
require('dotenv').config()
const cors  = require( 'cors' )

const app = express();
const port = 3000;

app.use(cors())
app.use(express.json()); 

app.get('/', (req, res) => {
  res.json({
    message: 'o_O',
    database: isConnected() ? 'connected' : 'disconnected'
  })
});

  app.get('/next', (req, res) => {
    res.send('HELLO EVERYONE!');
  });
  
  app.listen(port, async () => {
    await startDatabase();

    console.log(`🚀Sever running on port: 💻 ${port}`);
  });


module.exports = app;