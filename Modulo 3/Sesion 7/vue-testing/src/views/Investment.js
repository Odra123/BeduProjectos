class Investment {
    id;
    name;
    description;
    interest;
    startingAmount;
    finalAmount;
    startDate;
    endDate;

    constructor(id, name, description, interest, startingAmount, finalAmount, startDate, endDate) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.interest = interest;
        this.startingAmount = startingAmount;
        this.finalAmount = finalAmount;
        this.startDate = startDate;
        this.endDate = endDate;
    }

    static addInvestment(name, description, interest, startingAmount, startDate, duration, repository) {
        const endDate = startDate;
        endDate.setDate(endDate.getDate() + duration);

        const finalAmount = Investment._calculateFinalAmount(interest, startingAmount, duration);
        console.log('------------- final amount:'+finalAmount);
        //MPLA
       const finalTotal = Investment.getFinalAmountAfterTaxes(startingAmount,finalAmount);
       console.log('------------- final amount after taxes:'+finalTotal);
 //quite finalAmount del return
        return new Investment(repository.getId(), name, description, interest, startingAmount, finalTotal, startDate, endDate)
    }

    static _calculateFinalAmount(interest, startingAmount, duration) {
        const bankingYear = 360;
        const interestAsPercentage = interest / 100;
        return startingAmount * (1 + (((interestAsPercentage) / bankingYear) * duration));
    }

    //MPLA
    static getFinalAmountAfterTaxes(startingAmount,finalAmount){
        
        //calcula impuestos a pagar
        const ganancia = finalAmount - startingAmount;

        console.log('GANACIA='+ganancia);
        const taxes=ganancia*(0.0885)//tax en california 8.85% tomado como ejemplo
        console.log(taxes);
        console.log('TAXES='+taxes);
        
        //calcula valor final de la inversion
        //final amount contiene la cantidad inicial mas la ganancia ya solo se le resta el tax
        // la varible intereses contiene solo el porcentaje por eso no la use
        const finalTotal= finalAmount - taxes;
        console.log('TOTAL='+finalTotal);
        
       return finalTotal;
    }


}


module.exports = Investment;