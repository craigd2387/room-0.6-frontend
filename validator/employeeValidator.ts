import { DeliveryEmployeeRequest } from "../model/deliveryEmployeeRequest";

module.exports.validateEmployee = function (employee: DeliveryEmployeeRequest): string {

   if(employee.bank_account_number.length != 8){
    return "Incorrect bank account number lenght!"
   }

    return null;
};
