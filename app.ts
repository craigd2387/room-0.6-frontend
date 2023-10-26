import { Application, Request, Response, } from "express";
import { Employee } from "./model/employee";


const express = require('express');
const path = require('path');
const nunjucks = require('nunjucks');
const session= require('express-session')

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

app.use(session({ secret: 'NOT HARDCODED SECRET', cookie: { maxAge:60000}}));

declare module "express-session" {
    interface SessionData {
        employee: Employee;
    }
}

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