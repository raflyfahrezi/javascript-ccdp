class Lingkaran {
    constructor(sisi) {
        this.sisi = sisi
    }

    setSisi(sisi) {
        this.sisi = sisi
    }

    getSisi() {
        return this.sisi
    }

    luas() {
        return Math.PI * this.sisi * this.sisi
    }

    keliling() {
        return 2 * Math.PI * this.sisi
    }
}

module.exports = Lingkaran
