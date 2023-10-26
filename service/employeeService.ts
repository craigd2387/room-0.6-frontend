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

module.exports.getDeliveryEmployeeById = async function (id: number): Promise<Employee[]> {
    try {
        
        const response = await axios.get('http://localhost:8080/api/deliveryEmployees/' + id)
        
        return response.data
    } catch (e) {
        
        throw new Error('Could not get Employee')
    }    
}

    module.exports.deleteDeliveryEmployeeById = async function (id: Number): Promise<Employee[]> {

        try {
            
            const response = await axios.delete('http://localhost:8080/api/deliveryEmployees/' + id)
            
            return response.data
        } catch (e) {
            
            throw new Error('Could not get Employee')
        }  
}