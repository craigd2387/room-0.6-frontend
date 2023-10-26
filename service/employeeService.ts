import { Employee } from "../model/employee"

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

module.exports.createEmployee = async function (employee:Employee): Promise<number> {

    //const error: string = productValidator.validateProduct(product)

    //if(error){
      //  throw new Error(error)
    //}
    try{
        const response= await axios.post('http://localhost:8080/api/deliveryEmployees/', employee)

        return response.data

    } catch (e){
        throw new Error ('Could not create Employee')
    }
}