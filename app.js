const express = require('express');
const app = express();
const port = 3000;


app.get('/', (req,res) =>{
  res.send('Time to deploy');
});

app.listen(port,() => console.log(`Example App listen to port ${port}!`));
