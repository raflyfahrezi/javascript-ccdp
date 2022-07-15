class Persegi {
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
        return this.sisi * this.sisi
    }

    keliling() {
        return this.sisi * 4
    }
}

module.exports = Persegi
