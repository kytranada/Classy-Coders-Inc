const { Employees } = require("./Employees");

class SoftwareEngineer extends Employees {
#programmmingLanguages 
constructor(name,title,salary,programmingLanguages = []){
    super(name,title,salary)
    this.#programmmingLanguages = programmingLanguages
}
getProgrammingLanguages(){
    return this.#programmmingLanguages
}
setProgrammingLanguages(language){
    this.#programmmingLanguages.push(language)
}

    
}

module.exports = {
    SoftwareEngineer,
}