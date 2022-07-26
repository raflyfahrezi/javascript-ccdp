class StudentController {
    constructor(student, view) {
        this.student = student
        this.view = view
    }

    setName(name) {
        this.student.setName(name)
    }

    getName() {
        return this.student.getName()
    }

    setYear(year) {
        this.student.setYear(year)
    }

    getYear() {
        return this.student.getYear()
    }

    setId(id) {
        this.student.setId(id)
    }

    getId() {
        return this.student.getId()
    }

    printStudent() {
        this.view.printStudent(this.student)
    }
}

module.exports = StudentController
