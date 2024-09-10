class Employees {
    #salary
    #isHired
    static #allEmployees = []
    constructor(name,title,salary,isHired = true){
        this.name = name
        this.title = title
        this.#salary = salary
        this.#isHired = isHired
        Employees.#allEmployees.push(this)
    }

    getSalary(){
        return this.#salary
    }
    setSalary(amount){
        this.#salary = amount
    }
    getStatus(){
        return this.#isHired
    }
    setStatus(command){
        if(command == 'hire'){this.#isHired = true}
        if(command == 'fire'){this.#isHired = false}
    }
    static getEmployees(){
        return Employees.#allEmployees
    }
    static getTotalPayroll(){
        let total = 0
        for (let i = 0; i < Employees.#allEmployees.length; i++){
            total += Employees.#allEmployees[i].getSalary()
        }
        return total
    }
}

module.exports = {
    Employees,
}