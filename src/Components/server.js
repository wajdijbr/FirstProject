const express = require('express');
const cors = require('cors');
const app=express();

app.use(cors());

app.get('/data',(req,res)=>{
    res.json([
        {
            id : 1,
            name : 'ahmed' ,
            age : 20
        },
        {
            id : 2,
            name : 'ALI' ,
            age : 22
        },
        {
            id : 3,
            name : 'aSMAHAN' ,
            age : 30
        },
        {
            id : 4,
            name : 'FOUED' ,
            age : 40
        },
        {
            id : 5,
            name : 'BASEL' ,
            age : 24
        }
    ]);
})
app.post('/data',(req,res) => {
    console.log(req.body);
})
app.listen(4500, ()=>{
    console.log('server is running on port 4500');
})