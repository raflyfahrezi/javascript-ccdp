class StudentView {
    printStudent(student) {
        console.log(`NIM: ${student.id}`)
        console.log(
            `Nama saya ${student.name} dan saya angkatan tahun ${student.year}.`
        )
    }
}

module.exports = StudentView
