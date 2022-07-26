const Student = require('./model')
const StudentView = require('./view')
const StudentController = require('./controller')

const students = new StudentController(new Student(), new StudentView())

students.setName('Farhan Rafly Fahrezi Saepulloh')
students.setYear(2018)
students.setId(10118377)
students.printStudent()
