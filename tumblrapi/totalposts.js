// Go through Tumblr API v1 | Tumblr to understand tumble API v1. 
// Create a program that does the following (all the operations should happen in JSON): 

// Take the Tumblr blog name from the user. 
// Ex: good.tumblr.com heckin-good-memes.tumblr.com 
// Then print basic info about the blog. 
// Create a schema in MySQL dB by that blog name.
// Save links for all the images in the blog for 1280 format in the collection inside MySQL db. 
// https://www.tumblr.com/docs/en/api/v1

const express = require('express');
const mysql2 = require('mysql2');
const app = express();
const port = 5000;
const https = require('https');
let totalPost;

const bodyParser = require("body-parser");
const { response } = require("express");
app.use(bodyParser.urlencoded({ extended: true }));


const connection = mysql2.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "bhargavi01",
    port: "3306"
})

try {
    connection.connect((err) => {
        if (err) {
            throw err

        } else {
            console.log("connected")
        }
    })

} catch (error) {
    console.log('error in making connection');
}


app.get("/", function (request, response) {
    response.sendFile(__dirname + "/form.html");
})

app.post("/", function (request, response) {
    console.log(request.body);
    let titleName = request.body.username;
    //console.log(titleName);

    //const Connection = require('/Users/BhargaviSingh/Desktop/javascript_code/bhargavi/tumblrapi/connection').connection;
    const http1R = https.get(`https://${titleName}.tumblr.com/api/read/json/?num=50`, res => {
        //https://theclassyissue.tumblr.com/api/read/json
        //to verify the status code
        if (res.statusCode !== 200) {
            console.error(`error detected! Code: ${res.statusCode}`);
            res.resume();
            return;
        }

        let data = "";    //store data in string 

        //creating event listener
        res.on('data', (orgData) => {
            data += orgData;
        });

        res.on('close', () => {
            let nData = data.slice(22, -2);
            let newdata = JSON.parse(nData);


            console.log('Retrieved all data');
            totalPost=Object.values(newdata)[2];
            console.log(totalPost);

            response.send("fetched");
            let posts = newdata.posts;
            let image = [];
            let count = 0;
            for (let i of posts) {
                if (i["type"] == 'photo') {
                    count++
                    // var a = i["photo-url-1280"];
                    image.push(i["photo-url-1280"]);
                    // console.log(i["photo-url-1280"]);
                    connection.query("INSERT INTO img_links(img_id, img_url) VALUES('" + count + "','" + i['photo-url-1280'] + "')", (err, rows) => {
                        if (err) {
                            throw err;
                        }
                    })
                }
            }



            //iterations----------
            
            for(let j =50;j<totalPost;j+=50)
            {
            const http2R = https.get(`https://${titleName}.tumblr.com/api/read/json/?start=${j}&num=50`, res => {
                //https://theclassyissue.tumblr.com/api/read/json
                //to verify the status code
                if (res.statusCode !== 200) {
                    console.error(`error detected! Code: ${res.statusCode}`);
                    res.resume();
                    return;
                }

                let data = "";    //store data in string

                //creating event listener
                res.on('data', (orgData) => {
                    data += orgData;
                });

                res.on('close', () => {
                    let nData = data.slice(22, -2);
                    let newdata = JSON.parse(nData);

                    console.log('Retrieved all data');

                    response.send("fetched");
                    let posts = newdata.posts;
                    let image = [];
                    let count = 0;
                    for (let i of posts) {
                        if (i["type"] == 'photo') {
                            count++
                            // var a = i["photo-url-1280"];
                            image.push(i["photo-url-1280"]);
                            // console.log(i["photo-url-1280"]);
                            connection.query("INSERT INTO img_links(img_id, img_url) VALUES('" + count + "','" + i['photo-url-1280'] + "')", (err, rows) => {
                                if (err) {
                                    throw err;
                                }
                            })
                        }
                    }
                    http2R.on('error', (err) => {
                        if (err) {
                            console.log(`Error: , ${err.message}`);
                        }

                    });
                });
            

                http1R.on('error', (err) => {
                    if (err) {
                        console.log(`Error: , ${err.message}`);
                    }

                });
            });
        }});
    })
})

        app.listen(port, (request, response) => {
            console.log("Running on 5000..")
        });
