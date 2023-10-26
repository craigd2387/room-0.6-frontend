import { Application, Request, Response } from "express";
import { Employee } from "../model/employee"
import { log } from "console";

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

    app.get('/delete-delivery-employee', async (req: Request, res: Response) => {
        let data: Employee[];

        try {
            data = await employeeService.getemployees()
            res.render('delete-delivery-employee', { employees: data })      
            
            
        }catch (e) {
            console.error(e);
        }      
        
    })

    app.post('/delete-delivery-employee/:id', async (req: Request, res: Response) => {
        
        let  id = req.params.id
        console.log("here you go", id);
             
        
        try{
             await employeeService.deleteDeliveryEmployeeById(id)
             
             res.redirect('/delete-delivery-employee')  
        } catch (e) {
            console.error(e);

            res.locals.errormessage = e.message

            res.render('delete-delivery-employee')
        }

    })
    
}