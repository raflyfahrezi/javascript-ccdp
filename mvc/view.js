class StudentView {
    printStudent(student) {
        console.log(`ID: ${student.id}`)
        console.log(
            `My name is ${student.name} and I am ${student.age} years old.`
        )
    }
}

module.exports = StudentView
