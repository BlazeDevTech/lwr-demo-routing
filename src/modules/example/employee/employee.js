import { LightningElement,wire } from "lwc";
import { CurrentPageReference } from 'lightning/navigation';

export default class Employee extends LightningElement{

    empId;

    @wire(CurrentPageReference)
    getStateParameters(currentPageReference) {
       if (currentPageReference) {
        this.empId = currentPageReference.attributes.empId;
       
       }
    }
    
}