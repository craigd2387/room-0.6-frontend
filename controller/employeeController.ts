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

    
}