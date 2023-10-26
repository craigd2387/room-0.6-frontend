import { CreateEmployee } from "../model/createEmployee";

export function validateEmployee(employee:CreateEmployee): string{
    if(employee.name.length <1||employee.name.length>50){
        return "Name must be between 1 and 50 characters.";
    }

    if(employee.salary<1){
        return "Salary cannot be less than 1";
    }

    if(employee.bank_account_number.length!=8){
        return "Bank account number must have a length of 8"
    }

    if(employee.national_insurance_number.length!=9){
        return "National Insurance number must have a length of 9"
    }

    return null;
}