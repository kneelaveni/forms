// import express from 'express'
// import mysql from 'mysql'
// import cors from 'cors'
// import bodyParser from 'body-parser'


const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mysql = require('mysql');


const app = express()
app.use(cors());
app.use(bodyParser.json());
app.use(express.json());

const mysqlConnection= mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'Malli2006@12',
    database:'Forms'
})
mysqlConnection.connect((err)=>{
    if(!err){
        console.log('Connected!');
    }
    else{
        console.log('Connection failed');
        // console.log(err)
    }
})

app.post('/', (req,res)=> {

    
    const title = req.body.title;
    const createdAt= new Date();
    const link ="localhost:3000/user";
    const description=req.body.description;
    
    // res.send(values) 
    var sql ="INSERT INTO form (title,createdAt,link,description) VALUES (?,?,?,?)";
    mysqlConnection.query(sql,[title,createdAt,link,description], (err,result)=>{
       if(err) return res.send(err)
       return res.send(result)
    //    res.send(result)
    })    
})

app.post('/formDetails', (req,res)=> {

    
    const fieldname = req.body.fieldname;
    // const formid= req.body.formid;
    const fieldtype=req.body.fieldtype;
    
    // res.send(values) 
    var sql ="INSERT INTO form (fieldname,fieldtype) VALUES (?,?)";
    mysqlConnection.query(sql,[fieldname,fieldtype ], (err,result)=>{
       if(err) return res.send(err)
       return res.send(result)
    //    res.send(result)
    })    
})


app.get('/',(req,res)=>{
    return res.json('From Backend side')
})

app.get('/users',(req,res)=>{
    const sql = 'SELECT * FROM form';
    mysqlConnection.query(sql,(err,data)=>{
    
        if(err) return res.json(err)
                return  res.send(data)
        // res.json(data)
        

    }  )
})

app.listen(8081,()=>{
    console.log('Listening.....');
})