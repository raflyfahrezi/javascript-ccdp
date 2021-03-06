const Persegi = require('./persegi')
const Lingkaran = require('./lingkaran')

class BangunDatarFactory {
    getBangunDatar(namaBangunDatar) {
        switch (namaBangunDatar) {
            case 'persegi':
                return new Persegi()
            case 'lingkaran':
                return new Lingkaran()
            default:
                return null
        }
    }
}

module.exports = BangunDatarFactory
