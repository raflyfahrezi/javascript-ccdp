const Student = require('./model')
const StudentView = require('./view')
const StudentController = require('./controller')

const students = new StudentController(new Student(), new StudentView())

students.setName('Farhan Rafly Fahrezi Saepulloh')
students.setAge(22)
students.setId(10118377)
students.printStudent()
