console.log('hi there!');

const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send('hiiiii there!');
})

app.listen(3000, () =>{
    console.log('Listening');
})