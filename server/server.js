const express = require('express');
const router = require('./router/router');
const app = express();
const cors = require('cors')

const port = 5005;
app.use(cors({ 
    origin: '*',
    methods: ['POST','GET'], 
    optionsSuccessStatus: 200 
  }));

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
app.use(express.json()); 

app.use('/api', router);