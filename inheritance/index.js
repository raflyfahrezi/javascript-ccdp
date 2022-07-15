class Animals {
    constructor(name) {
        this.name = name
    }

    speak() {
        console.log(`${this.name} makes a noise.`)
    }
}

class Bird extends Animals {
    constructor(name) {
        super(name)
    }

    fly() {
        console.log(`${this.name} can fly.`)
    }
}

class Dog extends Animals {
    constructor(name) {
        super(name)
    }

    walk() {
        console.log(`${this.name} can walk.`)
    }
}

const bird = new Bird('Polly')
const dog = new Dog('Fido')

console.log('--- Bird ---')
bird.speak()
bird.fly()

console.log('--- Dog ---')
dog.speak()
dog.walk()
