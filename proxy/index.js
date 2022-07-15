const person = {
    name: 'John Doe',
    age: 42,
    nationality: 'American',
}

const personProxy = new Proxy(person, {
    get: (obj, prop) => {
        if (!obj[prop]) {
            console.log(
                `Hmm.. this property doesn't seem to exist on the target object`
            )
        } else {
            console.log(`The value of ${prop} is ${obj[prop]}`)
        }
    },
    set: (obj, prop, value) => {
        console.log(`Changed ${prop} from ${obj[prop]} to ${value}`)

        obj[prop] = value
    },
})

personProxy.name = 'Benno'
personProxy.age = 20
personProxy.nationality = 'Indonesia'
