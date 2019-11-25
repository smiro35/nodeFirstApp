const axios = require("axios");
const inq = require("inquirer");
const generateHTML = require("./generateHTML");
const fs = require("fs");

const util = require("util");

const writeFileAsync = util.promisify(fs.writeFile);



const pdf = require("html-pdf");



inq
    .prompt({
        message: "Enter your GitHub username:",
        name: "username"
    })
    .then(function({ username }) {
        const queryUrl = `https://api.github.com/users/${username}/repos?per_page=100`;

        axios.get(queryUrl).then(function(res) {

            const info = res.data;



            let person = info[0].name; //for some reason my github name is "boostrap-portfolio"

            let site = info[0].html_url;


        })

    })
    .catch(function(err) {

        throw (err);
    })
    .then(function(info) {


        return writeFileAsync("index.html", info)

    })
    .then(function() {

        const html = generateHTML;

        pdf.generateHTML.toFile('./pdfname.pdf', function(err, res) {

            throw (err)


        })


    });




//     //     //     })
//     //     //     .catch(function(err) {

//     //     //         console.log(err);

//     //     //     })


// })
// 




























//     .then
// fs.writeFile("info.txt", savedData, (err) => {
//     if (err) {
//         throw err;
//     }



// })

// console.log(`successfully saved ${info.url} repos!`);