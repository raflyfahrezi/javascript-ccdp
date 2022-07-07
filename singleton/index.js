const Student = require('./student')

const student1 = new Student()
const student2 = new Student()

console.log(student1.getInstance() === student2.getInstance())

student1.setName('Farhan')

console.log(student2.getName())
