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