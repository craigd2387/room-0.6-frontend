import { Application, Request, Response } from "express";

const express = require('express');
const path = require('path');
const nunjucks = require('nunjucks');

const app = express();

//configure nunjucks
var appViews= path.join(__dirname, '/views/');

var nunjucksConfig = {
    autoescape: true,
    noCache: true,
    express: app
};

nunjucks.configure(appViews, nunjucksConfig);

app.set('view engine', 'html');

app.use('/public', express.static(path.join(__dirname, 'public')));

app.use(express.json())

app.use(express.urlencoded({ extended: true}))

app.listen(3000, () => {
    console.log('server listening on port 3000')
});

//express routes

app.get('/', async (req: Request, res: Response) => {
    res.render('first', {
        title: 'Initial',
    });
});

require('./controller/employeeController')(app);