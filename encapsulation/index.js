class Animals {
    constructor() {
        this.name
    }

    setName(name) {
        this.name = name
    }

    getName() {
        return this.name
    }
}

const animals = new Animals()

animals.setName('Dog')

console.log(animals.getName())

animals.name = 'Cat'

console.log(animals.getName())
