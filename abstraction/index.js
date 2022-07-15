class Person {
    constructor() {
        if (this.constructor === Person) {
            throw new Error('You cannot create an instance of Abstract Class')
        }
    }

    info() {
        throw new Error('You must implement the abstract method')
    }
}

class Teacher extends Person {
    info() {
        return 'I am a teacher'
    }
}

const teacher = new Teacher()
const teacherInfo = teacher.info()

console.log(teacherInfo)
