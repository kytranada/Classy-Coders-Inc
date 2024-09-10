class Employees {
    #salary
    #isHired
    constructor(name,title,salary,isHired = true){
        this.name = name
        this.title = title
        this.#salary = salary
        this.#isHired = isHired
        let allEmployees = []
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
    
}

module.exports = {
    Employees,
}