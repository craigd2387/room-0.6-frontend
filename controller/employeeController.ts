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
}