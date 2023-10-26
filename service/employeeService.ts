import { DeliveryEmployeeRequest } from "../model/deliveryEmployeeRequest";
import { Employee } from "../model/employee"
import { CreateEmployee } from "../model/createEmployee";
import  createEmployeeValidator = require("../validator/createEmployeeValidator")
const employeeValidator = require('../validator/employeeValidator')

const axios = require('axios');

module.exports.getemployees = async function (): Promise<Employee[]> {
    try {

       
        const response = await axios.get('http://localhost:8080/api/deliveryEmployees')
        

        return response.data
    } catch (e) {
        throw new Error('Could not get orders')
    }

    
}
module.exports.getEmployeetByID = async function (id: number): Promise<Employee> {
    try{
        const response= await axios.get('http://localhost:8080/api/deliveryEmployees/'+id)

        return response.data
    } catch (e){
        throw new Error('Could not get Employee')
    }
    
}

module.exports.createEmployee = async function (employee:CreateEmployee): Promise<number> {

    const error: string = createEmployeeValidator.validateEmployee(employee)

    if(error){
        throw new Error(error)
}
    try{
        const response= await axios.post('http://localhost:8080/api/deliveryEmployees/', employee)

        return response.data

    } catch (e){
        throw new Error ('Could not create Employee')
    }
}

module.exports.getDeliveryEmployeeById = async function (id: number): Promise<Employee[]> {
    try {
        
        const response = await axios.get('http://localhost:8080/api/deliveryEmployees/' + id)
        
        return response.data
    } catch (e) {
        
        throw new Error('Could not get Employee')
    }    
}
module.exports.updateDeliveryEmployee = async function (id: number, employee: DeliveryEmployeeRequest): Promise<number> {
    const error: string = employeeValidator.validateEmployee(employee)

    if(error){
        throw new Error(error)
    }
    try {
        const response = await axios.put('http://localhost:8080/api/deliveryEmployees/' + id, employee)
        return response.data
    }
    catch (e) {
        throw new Error('Could not update employee')
    }

}

