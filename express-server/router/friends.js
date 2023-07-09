const { json } = require('express');
const express = require('express');

const router = express.Router();

let friends = {
    "johnsmith@gamil.com": {"firstName": "John","lastName": "Doe","DOB":"22-12-1990"},
    "annasmith@gamil.com":{"firstName": "Anna","lastName": "smith","DOB":"02-07-1983"},
    "peterjones@gamil.com":{"firstName": "Peter","lastName": "Jones","DOB":"21-03-1989"}
};

// GET request: Retrieve all friends
router.get("/",(req,res)=>{

    res.send(JSON.stringify(friends,null,4))

  res.send("Yet to be implemented")//This line is to be replaced with actual return value
});
