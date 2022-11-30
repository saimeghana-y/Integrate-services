const cheerio = require('cheerio')
const express = require('express');

const axios = require('axios');
const cors = require('cors');

const path = require('path');
const logger = require('morgan');
const cookieParser = require('cookie-parser');

const app = express();
const PORT = process.env.PORT ||  3000;


app.use(cors({
    origin: '*'
}))


app. use (logger ('dev'));
app. use(express. json());
app. use(express. urlencoded({ extended: false }));
app. use (cookieParser());

// view engine setup
app. set ('views', path. join(__dirname, 'views'));
app. set ('view engine', 'ejs');

app. engine('html', require('ejs'). renderFile);

app.get('/', (req, res) => {
    res .render ('index.html', {title: "Core banking services"});
});

app.get('/services/Custom-Developed-Software', (req, res) => {
    res .render ('custom.html', {title: "Custom Developed Software"});
});
app.get('/services/Legacy-Software-Modernization', (req, res) => {
    res .render ('legacy.html', {title: "Legacy Software Modernization"});
});
app.get('/services/Software-Testing-Services', (req, res) => {
    res .render ('software.html', {title: "Software Testing Services"});
});
app.get('/services/Ecommerce-Website-Development', (req, res) => {
    res .render ('ecomerce.html', {title: "Ecommerce Website Development"});
});
app.get('/services/Embedded-Software-Development', (req, res) => {
    res .render ('embedded.html', {title: "Embedded Software Development"});
});
app.get('/services/Software-Maintenance', (req, res) => {
    res .render ('maintainance.html', {title: "Software Maintenance"});
});

app.get('/services/Web-Application-Development', (req, res) => {
    res .render ('web.html', {title: "Web Application Development"});
});

app.get('/services/Cpp-Software-Development', (req, res) => {
    res .render ('cpp.html', {title: "C++ Software Development"});
});
app.get('/services/NET-Application-Development', (req, res) => {
    res .render ('net.html', {title: ".NET Application Development"});
});

app.get('/project', (req, res) => {
    res .render ('project.html', {title: "Case Studies"});
});

app.get('/integration', (req, res) => {
    res .render ('integrate.html', {title: "Services"});
});

app.get('/resources', (req, res) => {
    res .render ('res.html', {title: "Resources"});
});

app.get('/contact', (req, res) => {
    res .render ('contact.html', {title: "Contact Form"});
});

app.get('/about', (req, res) => {
    res .render ('web.html', {title: "About"});
});

app.get('/partners', (req, res) => {
    res .render ('web.html', {title: "partners"});
});
app.get('/program', (req, res) => {
    res .render ('web.html', {title: "Nexus Software Referral Program"});
});
app.get('/process', (req, res) => {
    res .render ('web.html', {title: "Software Development Process"});
});
app.get('/helpdesk', (req, res) => {
    res .render ('web.html', {title: "Software Support Helpdesk"});
});

app.get('/services', (req, res) => {
    res .render ('services.html', {title: "Software Development Services"});
});


const url = 'https://www.tekwissen.com/BankingInsurance.aspx'
app.get('/integrate' , (req, res) => {
    axios(url)
     .then(response => {
         const html = response.data
         
         const $ = cheerio.load(html)

         lotto_results = {
             text: $('.col-md-12').text().replace('\n                            ','')
         }

         res.json(lotto_results)
     })
     .catch(err => console.log(`Error found: ${err}`))
});

app. listen (PORT, () => {
console. log(`webapp listening on PORT ${PORT}`);
});


// Export the Express API
module.exports = app;