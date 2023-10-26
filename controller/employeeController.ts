import { Application, Request, Response } from "express";
import { Employee } from "../model/employee"

const employeeService = require('../service/employeeService')

module.exports = function(app: Application){
    
    app.get('/employees', async (req: Request, res: Response) => {
        let data: Employee[];

        try {
            data = await employeeService.getemployees()
            res.render('employees', { employees: data } )
            
        }catch (e) {
            console.error(e);
        }
        
        
    })

    app.get('/employees/:id', async (req: Request, res: Response) => {
        let data: Employee[];

        try {
            data = await employeeService.getEmployeeById(req.params.id)
            res.render('delivery-employee', { employees: data } )
            console.log(data);
            
            
        }catch (e) {
            console.error(e);
        }        
        
    })
}