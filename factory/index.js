const BangunDatar = require('./bangunDatar')

const bangunDatarFactory = new BangunDatar()

const persegi = bangunDatarFactory.getBangunDatar('persegi')
const lingkaran = bangunDatarFactory.getBangunDatar('lingkaran')

persegi.setSisi(10)
lingkaran.setSisi(3)

const luasPersegi = persegi.luas()
const luasLingkaran = lingkaran.luas()

console.log(`Luas Persegi: ${luasPersegi}`)
console.log(`Luas Lingkaran: ${luasLingkaran}`)
