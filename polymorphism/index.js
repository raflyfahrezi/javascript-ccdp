// class Animal {
//     speak() {
//         console.log('Animal is speaking')
//     }

//     speak(sound) {
//         console.log(sound)
//     }
// }

// const animal = new Animal()

// animal.speak()
// animal.speak('Woof woof')

class A {
    display() {
        console.log('A is invoked')
    }
}

class B extends A {
    display() {
        console.log('B is invoked')
    }
}

var a = [new A(), new B()]
a.forEach(function (msg) {
    msg.display()
})
