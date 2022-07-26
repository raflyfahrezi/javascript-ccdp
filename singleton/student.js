let instance = null

class Student {
    constructor() {
        // if (instance) {
        //     return instance
        // }
        // instance = this
    }

    getInstance() {
        return this
    }

    setName(name) {
        this.name = name
    }

    getName() {
        return this.name
    }
}

module.exports = Student
