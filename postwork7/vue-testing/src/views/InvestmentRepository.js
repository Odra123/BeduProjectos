//const InvestmentRepositoryContract = require("./InvestmentRepositoryContract");
const {v4: uuidv4} = require('uuid');
const db = require("./database");


class InvestmentRepository { //extends InvestmentRepositoryContract {
    constructor(dbConnection) {
      //  super();
        this.dbConnection = dbConnection;
    }

    getId() {
        return uuidv4();
    }


    save(investment) {
        const sql = "INSERT INTO investment (id,name,description,interest,starting_amount,final_amount,start_date,end_date) VALUES (?,?,?,?,?,?,?,?)";
        const params = [investment.id, investment.name, investment.description, investment.interest, investment.startingAmount, investment.finalAmount, investment.startDate]
        db.run(sql, params, (err, result) => {
            if (err) {
                console.log(err)
                return;
            }
            console.log('Sucess register generated: '+ investment.id)
        })
    }

    getInvestmentFromDB(id){
        const sql = `SELECT * FROM investment where id = '${id}'`;
        const params = []
        console.log(sql)
        db.get(sql, params, (err, result) => {
            if (err) {
                console.log(err)
                return;
            }
            console.log(result)
            return result
        })
    }

    getInvestmentFromDBByName(name){
        const sql = `SELECT *  FROM investment where name = '${name}'`;
        const params = []
        console.log(sql)
        db.get(sql, params, (err, result) => {
            if (err) {
                console.log(err)
                return;
            }
            console.log(result)
            return result
        })
    }

    ejercicioSesion07(PARAMETROCUALQUIERA){
        const sql = `SELECT * FROM investment where PARAMETROCUALQUIERA = '${PARAMETROCUALQUIERA}'`;
        const params = []
        console.log(sql)
        db.get(sql, params, (err, result) => {
            if (err) {
                console.log(err)
                return;
            }
            console.log(result)
            return result
        })
    }
}

module.exports = InvestmentRepository;
