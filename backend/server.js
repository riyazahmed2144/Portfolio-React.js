const express = require('express');
const app = express();

app.get('/', (req, res) =>{
    res.send('hello, express');
});

const port = 5000;

app.listen(port, () => {
    console.log('sever is running at port ${port}');
});