import { LightningElement, track } from 'lwc';

export default class BmiCalculator extends LightningElement {
    cardTitle = 'BMI Calculator';
    height;
    weight;
    @track bmiResult;

    userInputhandler(event){
        const input = event.target.name;
        if(input === 'heightInput'){
            this.height = parseFloat(event.target.value);
        }else if(input === 'weightInput'){
            this.weight = parseFloat(event.target.value);
        }
    }

    calculateBMIHandler(){
        this.bmiResult = this.weight/(this.height*this.height);
    }

    get bmiValue(){
        if(this.bmiResult === undefined){
            return "Please enter appropriate values for BMI calculation";
        }
        
        return `Your BMI is ${this.bmiResult}`;
    }

}