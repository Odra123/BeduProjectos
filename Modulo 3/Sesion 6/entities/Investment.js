class Investment {
    id;
    name;
    description;
    interest;
    startingAmount;
    finalAmount;
    startDate;
    endDate;
    isr;
    finalAmount1;
    montoFinal;
    

    constructor(id, name, description, interest, startingAmount, finalAmount, startDate, endDate,finalAmount1, montoFinal) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.interest = interest;
        this.startingAmount = startingAmount;
        this.finalAmount = finalAmount;
        this.startDate = startDate;
        this.endDate = endDate;
        this.finalAmount1=finalAmount1;
        this.montoFinal = montoFinal;
    }

    static addInvestment(name, description, interest, startingAmount, startDate, duration, repository) {
        const endDate = startDate;
        endDate.setDate(endDate.getDate() + duration);

        const finalAmount = Investment._calculateFinalAmount(interest, startingAmount, duration);

        return new Investment(repository.getId(), name, description, interest, startingAmount, finalAmount, startDate, endDate)
    }

    static _calculateFinalAmount(interest, startingAmount, duration) {
        const bankingYear = 360;
        const interestAsPercentage = interest / 100;
        return startingAmount * (1 + (((interestAsPercentage) / bankingYear) * duration));
        
    }

    static getFinalAmountAfterTaxes(interest, startingAmount, duration) {
        const bankingYear = 360;
        const interestAsPercentage = interest / 100;
        const finalAmount1 = startingAmount * (1 + (((interestAsPercentage) / bankingYear) * duration));
        let montoFinal= 0;
        if(finalAmount1 >= 0.01 && finalAmount1 <= 644.58){
            const isr=(((finalAmount1-0.01)*0.0192)+0);
            montoFinal= finalAmount1 - isr;            
        }
        else if(finalAmount1 >= 644.59 && finalAmount1 <= 5470.92){
            const isr=(((finalAmount1-644.59)*0.064)+12.38);
            montoFinal = finalAmount1 - isr;                      
        }
        else if(finalAmount1 >= 5470.93 && finalAmount1 <= 9614.66){
            const isr=(((finalAmount1-5470.93)*0.108)+321.26);
            montoFinal = finalAmount1 - isr;                                  
        }
        else if(finalAmount1 >= 9614.67 && finalAmount1 <= 11176.62){
            const isr=(((finalAmount1-9614.67)*0.16)+772.1);
            montoFinal = finalAmount1 - isr;                    
        }
        else if(finalAmount1 >= 11176.63 && finalAmount1 <= 13381.47){
            const isr=(((finalAmount1-11176.63)*0.1792)+1022.01);
            montoFinal = finalAmount1 - isr;            
        }
        else if(finalAmount1 >= 13381.48 && finalAmount1 <= 26988.5){
            const isr=(((finalAmount1-13381.48)*0.2136)+1417.12);
            montoFinal = finalAmount1 - isr;            
        }
        else if(finalAmount1 >= 26988.51 && finalAmount1 <= 42537.58){
            const isr=(((finalAmount1-26988.51)*0.2352)+4323.58);
            montoFinal = finalAmount1 - isr;            
        }
        else if(finalAmount1 >= 42537.59 && finalAmount1 <= 81211.25){
            const isr=(((finalAmount1-42537.59)*0.3)+7980.73);
            montoFinal = finalAmount1 - isr;            
        }
        else if(finalAmount1 >= 81211.26 && finalAmount1 <= 108281.67){
            const isr=(((finalAmount1-81211.26)*0.32)+19582.83);
            montoFinal = finalAmount1 - isr;            
        }
        else if(finalAmount1 >= 108281.68 && finalAmount1 <= 324845.01){
            const isr=(((finalAmount1-108281.68)*0.34)+28245.36);
            montoFinal = finalAmount1 - isr;            
        }
        else if(finalAmount1 >= 324845.02 ){
            const isr=(((finalAmount1-324845.02)*0.35)+101846.9);
            montoFinal = finalAmount1 - isr;            
        }
        return montoFinal;
    }
        
}


module.exports = Investment;
