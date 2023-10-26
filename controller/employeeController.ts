import { Application, Request, Response } from "express";
import { Employee } from "../model/employee"
import { log } from "console";
import { CreateEmployee } from "../model/createEmployee";
import { DeliveryEmployeeRequest } from "../model/deliveryEmployeeRequest";

const employeeService = require('../service/employeeService')

module.exports = function(app: Application){
    
    app.get('/employees', async (req: Request, res: Response) => {
        let data: Employee[];

        try {
            data = await employeeService.getemployees()
            res.render('delivery-employees', { employees: data } )          
            
        }catch (e) {
            console.error(e);
        }
        
        
    })

    app.get('/delivery-employee/:id', async (req: Request, res: Response) => {
        let data: Employee;

        try {
            data = await employeeService.getDeliveryEmployeeById(req.params.id)
        
        
            res.render('delivery-employee', { employees: data } )
        }catch (e) {
            
            res.render('delivery-employee', { employees: data } )
        }   
        
    })

    

    app.get('/add-delivery-employee-name', async (req: Request, res: Response) => {
        if (!req.session.employee){
            req.session.employee= {}
        }
        res.render('add-delivery-employee-name')
    })

    app.post('/add-delivery-employee-name', async (req: Request, res: Response) => {
        req.session.employee["name"]=req.body.name

        res.redirect('/add-delivery-employee-salary')
    })

    app.get('/add-delivery-employee-salary', async (req: Request, res: Response) => {
        
        res.render('add-delivery-employee-salary')
    })

    app.post('/add-delivery-employee-salary', async (req: Request, res: Response) => {
        req.session.employee["salary"]=req.body.salary

        res.redirect('/add-delivery-employee-bank-account-number')
    })

    app.get('/add-delivery-employee-bank-account-number', async (req: Request, res: Response) => {
        
        res.render('add-delivery-employee-bank-account-number')
    })

    app.post('/add-delivery-employee-bank-account-number', async (req: Request, res: Response) => {
        req.session.employee["bank_account_number"]=req.body.bank_account_number

        res.redirect('/add-delivery-employee-national-insurance-number')
    })

    app.get('/add-delivery-employee-national-insurance-number', async (req: Request, res: Response) => {
        
        res.render('add-delivery-employee-national-insurance-number')
    })

    app.post('/add-delivery-employee-national-insurance-number', async (req: Request, res: Response) => {
        req.session.employee["national_insurance_number"]=req.body.national_insurance_number

        res.redirect('/add-delivery-employee-confirmation')
    })

    app.get('/add-delivery-employee-confirmation', async (req: Request, res: Response) => {
        
        res.render('add-delivery-employee-confirmation', req.session.employee)
    })

    app.post('/add-delivery-employee-confirmation', async (req: Request, res: Response) => {
        let data: CreateEmployee = req.session.employee
        let id: Number

        try{
            id = await employeeService.createEmployee(data)
            req.session.employee = undefined
            res.redirect('/employees/' + id)
        }catch(e){
            console.error(e);
            res.locals.errormessage =e.message
            res.render('add-delivery-employee-confirmation', req.session.employee)
        }
    })
    app.get('/updateEmployee/:id', async (req: Request, res: Response) => {
        let data: Employee[];

        try {
            data = await employeeService.getDeliveryEmployeeById(req.params.id)
            res.render('update-employee', { employees: data } )
            console.log(data);
            
            
        }catch (e) {
            console.error(e);
        }        
        
    })


    app.post('/updateEmployee/:id', async (req: Request, res: Response) => {
       
            let data: DeliveryEmployeeRequest = req.body;
            let id = req.params.id;

            try{
                id = await employeeService.updateDeliveryEmployee(id, data)
                res.redirect('/employees');

            }
            catch (e){
                console.error(e);
                res.redirect('/employees');
            }
    })
}